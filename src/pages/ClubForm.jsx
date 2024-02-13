import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ClubForm = () => {
  const [clubInfo, setClubInfo] = useState({
    clubname: '',
    clubhead: '',
    budget: '',
    profName: '',
    profEmail: '',
    clubEmail: '',
    clubusername: '',
    clubpassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClubInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/v1/club/addclubdetails', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(clubInfo)
      });
      const data = await response.json();
      console.log(data);
      navigate('/displayclub');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Club Information Form</h2>
      <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '15px' }}>
           <label style={{ display: 'block', marginBottom: '5px' }}>Club Name:</label>
           <input type="text" name="clubname" value={clubInfo.clubname} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
         </div>
         <div style={{ marginBottom: '15px' }}>
           <label style={{ display: 'block', marginBottom: '5px' }}>Club Head:</label>
           <input type="text" name="clubhead" value={clubInfo.clubhead} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
         </div>
         <div style={{ marginBottom: '15px' }}>
           <label style={{ display: 'block', marginBottom: '5px' }}>Budget:</label>
           <input type="number" name="budget" value={clubInfo.budget} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
         </div>
         <div style={{ marginBottom: '15px' }}>
           <label style={{ display: 'block', marginBottom: '5px' }}>Professor Name:</label>
           <input type="text" name="profName" value={clubInfo.profName} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
         </div>
         <div style={{ marginBottom: '15px' }}>
           <label style={{ display: 'block', marginBottom: '5px' }}>Professor Email:</label>
           <input type="email" name="profEmail" value={clubInfo.profEmail} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
         </div>
         <div style={{ marginBottom: '15px' }}>
           <label style={{ display: 'block', marginBottom: '5px' }}>Club Email:</label>
           <input type="email" name="clubEmail" value={clubInfo.clubEmail} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
         </div>
         <div style={{ marginBottom: '15px' }}>
           <label style={{ display: 'block', marginBottom: '5px' }}>Club Username:</label>
           <input type="text" name="clubusername" value={clubInfo.clubusername} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
         </div>
         <div style={{ marginBottom: '15px' }}>
           <label style={{ display: 'block', marginBottom: '5px' }}>Club Password:</label>
           <input type="password" name="clubpassword" value={clubInfo.clubpassword} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
         </div>
         <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '12px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', width: '100%' }}>Add</button>
      </form>
    </div>
  );
};

export default ClubForm;
