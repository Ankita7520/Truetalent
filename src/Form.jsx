// import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
// import { useNavigate } from "react-router-dom";
// function Form() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: ""
//   });
//   const { firstName, lastName, email } = formData;
//   const handleChange = e =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log(formData);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="Validation">

//         <label htmlFor="firstName"></label>
//         <TextField
//                       id="filled-basic"
//                       label="First-name"
//                       variant="filled"
//                />
//       </div>
//       <div>
//         <label htmlFor="lastName"></label>
//         <TextField
//                       id="filled-basic"
//                       label="Last name"
//                       variant="filled"
//                />
//       </div>
//       <div>
//       <TextField
//                       id="filled-basic"
//                       label="email"
//                       variant="filled"
//                />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// export default Form;
// import React, { useState, useEffect } from "react";
// const LoginForm = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   useEffect(() => {
//     // Check if the username and password fields are empty.
//     if (username === "" || password === "") {
//       // Display an alert message.
//       alert("Please enter a username and password.");
//     }
//   }, [username, password]);
//   const handleSubmit = (event) => {
//     // Prevent the form from submitting.
//     event.preventDefault();
//     // Check if the username and password fields are empty.
//     if (username === "" || password === "") {
//       // Display an alert message.
//       alert("Please enter a username and password.");
//     } else {
//       // Do something with the username and password.
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={setUsername}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={setPassword}
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };
// export default LoginForm;
// import { TextField } from '@mui/material';
// import React, { useState } from 'react';

// const LoginForm = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });

//   const [errors, setErrors] = useState({
//     username: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check for form validation
//     const newErrors = {};
//     if (formData.username.trim() === '') {
//       newErrors.username = 'Please enter your username.';
//     }
//     if (formData.password.trim() === '') {
//       newErrors.password = 'Please enter your password.';
//     }

//     // If any errors, set the state with the new error messages
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//     } else {
//       // Perform login or form submission here
//       // For demonstration purposes, we'll just clear the form fields
//       setFormData({
//         username: '',
//         password: '',
//       });
//       setErrors({
//         username: '',
//         password: '',
//       });
//     }
//   };

//   return (
//     <div>
//       <h2>Login Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label></label>
//           <TextField
//             type="text"
//             name="username"
//             label="Username"
//             value={formData.username}
//             onChange={handleChange}
//           />
//           {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
//         </div>
//         <div className='word'>
//           <label></label>
//           <TextField
//             type="password"
//             name="password"
//             label="Password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
//         </div>
//         <div>
//           <button type="submit" className='inn'>Login</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
import React, { useState } from 'react';
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email:''
  });

  const [errorCount, setErrorCount] = useState(0);
  const [usererror, setusererror] = useState(0);
  const [passworderror, setpassworderror] = useState(0);
  const [emailerror, setemailerror] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for form validation
    let newErrorCount = 0;
    let usernameerror= 0;
    let pasworderror= 0;
    let mailerror= 0;
    
    if (formData.username.trim() === '') {
      // newErrors.username = 'Please enter your username.';
      newErrorCount++;
      usernameerror++;

    }
    if (formData.password.trim() === '') {
      newErrorCount++;
      pasworderror++
    }
    if (formData.email.trim() === '') {
      newErrorCount++;
      mailerror++
    }

    toast.success("fields need to filled",{
      position: toast.POSITION.TOP_CENTER,
      autoclose: 3000,
      onClick:()=>{
        toast.info("second message",{
          position: toast.POSITION.TOP_CENTER,
          autoClose: false
        })
      }
    });
    
    

    setErrorCount(newErrorCount);
    setusererror(usernameerror);
    setpassworderror(pasworderror);
    setemailerror(mailerror);

    // if (newErrorCount === 0) {
    //   // Perform login or form submission here
    //   // For demonstration purposes, we'll just clear the form fields
    //   setFormData({
    //     username: '',
    //     password: '',
    //   });
    // }
  };

  return (
<div className='loginform'>
  <div className='color'>
  <h2 id='inlog1'>Login Form</h2>
      {errorCount > 0 && (
        <div style={{ border: '1px solid yellow', padding: '10px', marginBottom: '10px' }}>
          {errorCount} {errorCount === 1 ? 'error' : 'errors'} found in the form.
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label className='login-user'>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{ width: '300px', height: '40px' }}
          />
          {usererror > 0 &&  (
        <div style={{ padding: '10px', marginBottom: '10px', color:"red" }}>
            Please enter the username
        </div>
      )}
        </div>
        <div>
          <label>Password:</label>
          <input className='distance3'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '300px', height: '40px' }}
          />
           {passworderror > 0 &&  (
        <div style={{ padding: '10px', marginBottom: '10px', color:"red" }}>
            Please enter the password
        </div>
      )}
          
        </div>
        <div>
          <label className='distance'>email:</label>
          <input className='distance2'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '300px', height: '40px', marginright:"-15px" }}
          />
           {emailerror > 0 &&  (
        <div style={{ padding: '10px', marginBottom: '10px', color:"red" ,marginleft:"10px" }}>
            Please enter the email
        </div>
      )}
        </div>
        <div>
          <button type="submit" className='submit'>Login</button>
        </div>
      </form>
  </div>
      
    </div>
  );
};

export default LoginForm;

