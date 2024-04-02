'use client'
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { NavBar } from '../NavBar/NavBar';

export default function FlightBookingPage() {
  const [formData, setFormData] = useState({
    cabinOption: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    emailAddress: '',
    dob: new Date(),
    gender: '',
    placeOfDeparture: '',
    destination: '',
    preferredAirline: '',
    ETD: new Date(),
    ETA: new Date(),
    seat: '',
    meals: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (name, date) => {
    setFormData({ ...formData, [name]: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <>
    <NavBar />
    <section className="container mx-auto py-8">
        <div className=" mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-4">
          <div className="bg-gray-100 px-6 py-4 rounded-lg">
            <h1 className="text-xl font-bold text-gray-800">
              Flight Booking
            </h1>
          </div>
          
            
              
                <div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2 pl-2">
                        Cabin Option:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Cabin Option"
                        name="cabinOption"
                        value={formData.cabinOption}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 pl-2"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        First Name:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your First Name"
                        name="FirstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2 pl-2">
                        Last Name:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        Mobile Number:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your Mobile Number"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        Email Address:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your Email Address"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2 " >
                        Date of Birth:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your DOB"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                     <label className="block text-sm font-medium text-gray-700">Gender</label>
                     <div className="mt-1 flex items-center space-x-4">
                     <input type="radio" id="male" name="gender" value="male" onChange={handleChange} />
                     <label htmlFor="male">Male</label>
                     <input type="radio" id="female" name="gender" value="female" onChange={handleChange} />
                     <label htmlFor="female">Female</label>
                     <input type="radio" id="others" name="gender" value="others" onChange={handleChange} />
                     <label htmlFor="others">Others</label>
                     </div>
                   </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        Place of Depature:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your Place of Depature"
                        name="placeOfDeparture"
                        value={formData.placeOfDeparture}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                     <label htmlFor="preferredAirline" className="block text-sm font-medium text-gray-700">Preferred Airline</label>
                     <select name="preferredAirline" id="preferredAirline" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" onChange={handleChange}>
                     <option value="">Select Airline</option>
                     <option value="Luftanza">Luftanza</option>
                     <option value="IndiGo">IndiGo</option>
                     <option value="Emirates">Emirates</option>
                     <option value="Air India">Air India</option>
                    </select>
                    </div>
                    <div className="mb-4">
                     <label htmlFor="ETD" className="block text-sm font-medium text-gray-700">Estimated Time of Departure</label>
                      <DatePicker
                       selected={formData.ETD}
                        onChange={(date) => handleDateChange('ETD', date)}
                        showTimeSelect
                       dateFormat="MMMM d, yyyy h:mm aa"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                       />
                    </div>
                      <div className="mb-4">
                        <label htmlFor="ETA" className="block text-sm font-medium text-gray-700">Estimated Time of Arrival</label>
                        <DatePicker
                          selected={formData.ETA}
                         onChange={(date) => handleDateChange('ETA', date)}
                         showTimeSelect
                         dateFormat="MMMM d, yyyy h:mm aa"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                         />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="seat" className="block text-sm font-medium text-gray-700">Seat</label>
                        <select name="seat" id="seat" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" onChange={handleChange}>
                        <option value="">Select Seat</option>
                        <option value="Window">Window</option>
                        <option value="Aisle">Aisle</option>
                        <option value="Middle">Middle</option>
                        <option value="Extra Leg Room">Extra Leg Room</option>
            
                       </select>
                       <div className="mb-4">
                         <label htmlFor="meals" className="block text-sm font-medium text-gray-700">Meals</label>
                         <select name="meals" id="meals" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" onChange={handleChange}>
                         <option value="">Select Meal</option>
                         <option value="Vegetarian">Vegetarian</option>
                         <option value="Non-vegetarian">Non-vegetarian</option>
                         <option value="Vegan">Vegan</option>
                         <option value="None">None</option>
   
                         </select>
                        </div>
      

                       
    
  
                  </div>
                  </div>
                  <div className=" justify-center items-center  px-[650px]">
                          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-[200px]">Submit</button>
                        </div>
                
          </div>
        </div>
      </section>
    </>
  );
}
