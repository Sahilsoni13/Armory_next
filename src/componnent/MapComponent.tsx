import React, { useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
  Marker,
  Autocomplete,
} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

const MapComponent = () => {
  const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<google.maps.LatLngLiteral | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const handleDirections = (origin: string, destination: string) => {
    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin,
        destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirectionsResponse(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  };

  const onPlaceSelected = (place: google.maps.places.PlaceResult | null) => {
    if (place?.geometry?.location) {
      const location = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      setSelectedPlace(location);
      map?.panTo(location);
    }
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAzpK2EnXgj1uVvhQr0QCYONsD_QVW3RTI" libraries={['places']}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={(map) => setMap(map)}
      >
        {selectedPlace && <Marker position={selectedPlace} />}
        {directionsResponse && (
          <DirectionsRenderer
            directions={directionsResponse}
            options={{ suppressMarkers: true }}
          />
        )}
        <Autocomplete
          onPlaceChanged={() => {
            const autocomplete = new google.maps.places.AutocompleteService();
            autocomplete.getPlacePredictions({ input: '' }, (predictions, status) => {
              if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
                const selectedPrediction = predictions[0]; // Assume the first prediction is selected
                onPlaceSelected(selectedPrediction);
              }
            });
          }}
        >
          <input
            id="autocomplete"
            type="text"
            placeholder="Enter a location"
            style={{
              width: '300px',
              height: '40px',
              marginTop: '10px',
              padding: '5px',
            }}
          />
        </Autocomplete>
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
