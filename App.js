import React, { useState, useEffect } from 'react';
import './App.css'; // Add this line

function App() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(data => setUsers(data.data));
  }, []);

  return (
    <div className="container"> {/* Replace <div> with <div className="container"> */}
     <h1>USER LIST</h1>
     
      <div className="user-list"> {/* Add a wrapper div with className "user-list" */}
        {users.map(user => (
          <div key={user.id} className="user">
            <img src={user.avatar} alt={user.first_name} />
             <div class="wrapper four">
            <div class="type">
              <h3 class="typing">
            <p>{user.first_name}</p></h3>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;