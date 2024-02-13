import React, { useState, useEffect } from 'react';

function ClubList() {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/v1/club/getclubdetails');
        if (!response.ok) {
          throw new Error('Failed to fetch clubs');
        }
        const data = await response.json();
        setClubs(data.clubs);
      } catch (error) {
        console.error('Error fetching clubs:', error);
      }
    };

    fetchClubs();
  }, []);

  return (
    <div className="club-list">
      {clubs.map(club => (
        <ClubCard key={club._id} club={club} />
      ))}
    </div>
  );
}

function ClubCard({ club }) {
  return (
    <div className="club-card">
      <h2>{club.name}</h2>
      <p>{club.description}</p>
      {/* Add more club details as needed */}
    </div>
  );
}

export default ClubList;
