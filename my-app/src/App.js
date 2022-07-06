import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import { NavBar } from './components/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.css'


function App() {
  const adminUser = {
  email: 'admin@admin.com',
  password: 'password123'
}

const [user, setUser] = useState ({name: '', email: ''});
const [error, setError] = useState('');

const Login = details => {
  console.log(details);
}

const Logout = () => {
  console.log('Logout');
}

return (
  <div className='App'>
    <NavBar />
    {(user.email != "") ? (
      <div className='Welcome'>
        <h2> Welcome, <span>{user.name}</span></h2>
        <button>Logout</button>
      </div>
    ) : (
      <LoginForm />
    )}
    
    </div>
  );
}
 

export default App;