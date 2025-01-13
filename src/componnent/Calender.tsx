'use client'

import Addnote from "@/../public/icons/addnote.png"

// export default Calendar;
import { useState, useEffect } from 'react';
import { format, eachDayOfInterval, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addMonths, subMonths, isSameMonth, add } from 'date-fns';
import Image from "next/image";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [tasks, setTasks] = useState<{ [key: string]: string[] }>({});
  const [newTask, setNewTask] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const start = startOfWeek(startOfMonth(currentDate));
  const end = endOfWeek(endOfMonth(currentDate));
  const daysInMonth = eachDayOfInterval({ start, end });

  const handleAddTask = () => {
    if (newTask.trim() && selectedDate) {
      const formattedDate = format(selectedDate, 'yyyy-MM-dd');
      setTasks((prevTasks) => ({
        ...prevTasks,
        [formattedDate]: [...(prevTasks[formattedDate] || []), newTask],
      }));
      setNewTask('');
      setIsModalOpen(false);
    }
  };

  const handleRemoveTask = (date: string, index: number) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...(prevTasks[date] || [])];
      updatedTasks.splice(index, 1);
      const newTasks = { ...prevTasks, [date]: updatedTasks };
      if (updatedTasks.length === 0) delete newTasks[date];
      return newTasks;
    });
  };

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <button onClick={() => setCurrentDate(subMonths(currentDate, 1))}>Previous</button>
        <h2 className="text-xl font-semibold">{format(currentDate, 'MMMM yyyy')}</h2>
        <button onClick={() => setCurrentDate(addMonths(currentDate, 1))}>Next</button>
      </div>

      <div className="grid grid-cols-7 gap-2 ">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center font-bold">{day}</div>
        ))}
        {daysInMonth.map((day) => (
          <div
            key={day.toString()}
            className={`p-3 border rounded-md relative group ${!isSameMonth(day, currentDate) ? 'text-gray-400' : 'hover:bg-gray-100'}`}
          >
            <div className="text-center">{format(day, 'd')}</div>
            {tasks[format(day, 'yyyy-MM-dd')] && (
              <div className="text-sm text-gray-500">
                {tasks[format(day, 'yyyy-MM-dd')].map((task, index) => (
                  <div key={index} className="flex items-start justify-between max-h-[120px] overflow-y-scroll custom-scrollbar pt-2">
                    <span className='text-sm capitalize '>{task}</span>
                    <button
                      className="text-red-500 p-1 shadow-md rounded-md"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveTask(format(day, 'yyyy-MM-dd'), index);
                      }}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
            <button
              className="absolute top-[6px] left-[6px] bg-blue-500  py-[6px] px-2  rounded-md hidden group-hover:block"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedDate(day);
                setIsModalOpen(true);
              }}
            >
           
            <Image className="object-contain max-w-5 w-full"  src={Addnote} width={30} height={30} alt="add note"/>
            </button>

          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md w-1/3">
            <h3 className="text-lg font-semibold">Add Task for {selectedDate && format(selectedDate, 'MMMM d, yyyy')}</h3>
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter your task"
              className="border p-2 mt-2 w-full"
            />
            <div className="flex justify-end mt-4">
              <button onClick={() => setIsModalOpen(false)} className="bg-red-500 text-white py-1 px-4 rounded-md mr-2">Cancel</button>
              <button onClick={handleAddTask} className="bg-blue-500 text-white py-1 px-4 rounded-md">Add Task</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
