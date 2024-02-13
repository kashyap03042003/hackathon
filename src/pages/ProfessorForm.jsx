import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ProfForm = () => {
    
  const [profInfo, setProfInfo] = useState({
    name: '',
    email: '',
    role: '',
    profusername: '',
    profpassword: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/v1/prof/addprofdetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(profInfo)
      });
      const responseData = await response.json(); // This line may be causing the error
      console.log('Response data:', responseData); // Log the response data to see its format
      navigate('/admin');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Professor Information Form</h2>
      <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '15px' }}>
           <label style={{ display: 'block', marginBottom: '5px' }}>Professor Name:</label>
           <input type="text" name="name" value={profInfo.name} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
         </div>
         <div style={{ marginBottom: '15px' }}>
           <label style={{ display: 'block', marginBottom: '5px' }}>Professor Email:</label>
           <input type="email" name="email" value={profInfo.email} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
         </div>
         <div style={{ marginBottom: '15px' }}>
           <label style={{ display: 'block', marginBottom: '5px' }}>Professor Role:</label>
           <input type="text" name="role" value={profInfo.role} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
         </div>
         <div style={{ marginBottom: '15px' }}>
           <label style={{ display: 'block', marginBottom: '5px' }}>Professor Username:</label>
           <input type="text" name="profusername" value={profInfo.profusername} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
         </div>
         <div style={{ marginBottom: '15px' }}>
           <label style={{ display: 'block', marginBottom: '5px' }}>Professor Password:</label>
           <input type="password" name="profpassword" value={profInfo.profpassword} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
         </div>
         <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '12px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', width: '100%' }}>Add</button>
      </form>
    </div>
  );
};

export default ProfForm;