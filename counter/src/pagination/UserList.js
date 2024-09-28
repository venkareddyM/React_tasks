// UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css'; // Importing CSS for styling

const UserList = () => {
  const [users, setUsers] = useState([]); // State to hold user data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling
  const [filter, setFilter] = useState(''); // State for filtering
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [usersPerPage] = useState(5); // Number of users per page

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers(); // Fetch users on component mount
  }, []);

  if (loading) return <p>Loading...</p>; // Display loading message
  if (error) return <p>Error: {error}</p>; // Display error message

  // Filter users based on the filter input
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage; // Calculate last user index
  const indexOfFirstUser = indexOfLastUser - usersPerPage; // Calculate first user index
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser); // Get users for current page

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage); // Calculate total pages

  const paginate = (pageNumber) => setCurrentPage(pageNumber); // Function to set the current page

  // Functions for previous and next buttons
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1); // Move to next page
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); // Move to previous page
    }
  };

  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <input
        type="text"
        placeholder="Filter users by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)} // Update filter state on input change
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="pagination">
        <button onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button 
            key={index + 1} 
            onClick={() => paginate(index + 1)} 
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default UserList;
