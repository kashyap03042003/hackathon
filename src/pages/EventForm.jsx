import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function EventForm() {
  const [formData, setFormData] = useState({
    eventName: '',
    purpose: '',
    club_name: '',
    venuename: '',
    date: '',
    start_time: '',
    end_time: '',
    venue: true,
    girls_permission: true,
    equipments: true,
    sports_equipments: false,
    classes_off: false,
    expected_expenditure: 0,
    advance_required: 'yes',
  });

  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/v1/event/addevent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventName: formData.eventName,
          purpose: formData.purpose,
          club_name: formData.club_name,
          venuename: formData.venuename,
          date: formData.date,
          start_time: formData.start_time,
          end_time: formData.end_time,
          permissionRequired: {
            venue: formData.venue,
            girls_permission: formData.girls_permission,
            equipments: formData.equipments,
            sports_equipments: formData.sports_equipments,
            classes_off: formData.classes_off,
          },
          expected_expenditure: formData.expected_expenditure,
          advance_required: formData.advance_required === 'yes', // Convert 'yes'/'no' to boolean
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to submit event');
      }
      // Handle success
      navigate('/progress');
    } catch (error) {
      console.error('Error submitting event:', error);
      // Handle error
      alert('Failed to submit event. Please try again later.');
    }
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Event Form</title>
      <style>
        {`
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-image: url("https://img.freepik.com/free-vector/gradient-purple-striped-background_23-2149583760.jpg");
            background-repeat: no-repeat;
            background-size: cover;
          }
          .container-e {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            padding: 30px;
            width: 120%;
            max-width: 600px;
          }
          h2 {
            text-align: center;
            margin-bottom: 30px;
            color: #333;
          }
          label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
            color: #555;
          }
          input[type="text"],
          input[type="date"],
          input[type="time"],
          input[type="number"],
          input[type="description"],
          input[type="checkbox"],
          select {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
          }
          input[type="checkbox"] {
            width: auto;
          }
          button[type="submit"] {
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 5px;
            background-color: #007bff;
            color: #fff;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          button[type="submit"]:hover {
            background-color: #0056b3;
          }
        `}
      </style>
      <div className="container-e">
        <h2>Event Form</h2>
        <form id="form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="eventName">Event Name:</label>
            <input type="text" id="eventName" name="eventName" value={formData.eventName} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="purpose">Purpose:</label>
            <input type="description" id="purpose" name="purpose" value={formData.purpose} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="club_name">Club Name:</label>
            <input type="text" id="club_name" name="club_name" value={formData.club_name} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="venuename">Venue:</label>
            <input type="text" id="venuename" name="venuename" value={formData.venuename} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="start_time">Start Time:</label>
            <input type="time" id="start_time" name="start_time" value={formData.start_time} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="end_time">End Time:</label>
            <input type="time" id="end_time" name="end_time" value={formData.end_time} onChange={handleChange} required />
          </div>
          <div>
            <label>Permission:</label>
            <label htmlFor="venue">
              <input type="checkbox" id="venue" name="venue" checked={formData.venue} onChange={handleChange} /> Venue Permission
            </label>
            <label htmlFor="girls_permission">
              <input type="checkbox" id="girls_permission" name="girls_permission" checked={formData.girls_permission} onChange={handleChange} /> Girls In-Time Permission
            </label>
            <label htmlFor="equipments">
              <input type="checkbox" id="equipments" name="equipments" checked={formData.equipments} onChange={handleChange} /> Equipments Permission
            </label>
            <label htmlFor="sports_equipments">
              <input type="checkbox" id="sports_equipments" name="sports_equipments" checked={formData.sports_equipments} onChange={handleChange} /> Sports Equipments Permission
            </label>
            <label htmlFor="classes_off">
              <input type="checkbox" id="classes_off" name="classes_off" checked={formData.classes_off} onChange={handleChange} /> Classes Off Permission
            </label>
          </div>
          <div>
            <label htmlFor="expected_expenditure">Total Expenditure:</label>
            <input type="number" id="expected_expenditure" name="expected_expenditure" value={formData.expected_expenditure} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="advance_required">Advance Required:</label>
            <select id="advance_required" name="advance_required" value={formData.advance_required} onChange={handleChange} required>
              <option value="">-- Select --</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
