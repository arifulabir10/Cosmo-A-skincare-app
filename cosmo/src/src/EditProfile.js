import { useState, useEffect } from 'react';

const EditProfile = () => {
  const userId = 4; // Set the user_id to 4 for testing
  const [user, setUser] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Fetch user data from the server based on the user_id
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/user/${userId}`); // Replace with your API endpoint
        const data = await response.json();
        setUser(data.user);
        setFirstName(data.user.first_name);
        setLastName(data.user.last_name);
        setEmail(data.user.email);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleSave = async () => {
    try {
      // Send updated user data to the server
      const response = await fetch(`/api/user/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email }),
      });



      if (response.ok) {
        console.log('User profile updated successfully');
      } else {
        console.error('Error updating user profile');
        const responseData = await response.json();
        console.error('API response:', responseData); // Log the response data
      }
    } catch (error) {
      console.error('Error updating user profile:', error);
    }


    
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default EditProfile;
