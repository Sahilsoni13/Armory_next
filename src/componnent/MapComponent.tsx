import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

const MapComponent = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCozIGHjFgslA1zW1Ftq77ZhEa3jdBxVBE", // Replace with your actual Google Maps API key
  });

  if (!isLoaded) return <div>Loading...</div>; // You can show a loading spinner here

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={8}
    />
  );
};

export default MapComponent;
