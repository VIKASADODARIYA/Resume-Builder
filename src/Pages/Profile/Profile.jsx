import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import { useDarkMode } from '../../DarkModeContext';
import { useAuth } from '../../context/AuthProvider'; // Import useAuth hook
import './Profile.css'; // Your custom CSS file for styling
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { isDarkMode } = useDarkMode();
    const [authUser] = useAuth(); // Access authUser from context
    const [userData, setUserData] = useState(null); // State to hold user data
    const navigate = useNavigate();

    useEffect(() => {
        if (!authUser) {
            // If user is not logged in, redirect to login page
            navigate('/'); // or any other route you prefer
        } else {
            fetchUserData(authUser._id); // Fetch user data when authUser changes
        }
    }, [authUser]);

    const fetchUserData = async (userId) => {
        try {
            const response = await fetch(`http://localhost:5002/user/userdetails/${userId}`); // Endpoint with userId parameter
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            const data = await response.json();
            setUserData(data.user); // Assuming 'user' object in response contains user data
        } catch (error) {
            console.error('Error fetching user data:', error.message);
            // Handle error (e.g., show error message)
        }
    };

    if (!authUser) {
        return null; // Render nothing if user is not authenticated and redirected
    }

    return (
        <>
            <div className={`main ${isDarkMode ? "dark-mode" : ""}`}>
                <div className="profile-container">
                    <h1>User Profile</h1>
                    {userData ? (
                        <div className="profile-details">
                            <div className="profile-image">
                                <img src={userData.profile} alt="Profile" />
                            </div>
                            <div className="user-info">
                                <ul>
                                    <li><strong>Full Name:</strong> {userData.fullname}</li>
                                    <li><strong>Phone:</strong> {userData.phone}</li>
                                    <li><strong>Email:</strong> {userData.email}</li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <p>Loading user data...</p>
                    )}
                </div>
                <hr />
                <Footer />
            </div>
        </>
    );
};

export default Profile;
