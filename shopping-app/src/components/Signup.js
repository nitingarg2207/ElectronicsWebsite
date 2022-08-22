import React, { useState } from "react";
import '../styles/Signup.css'
import {Link} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {

  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const successfulLogin = () => {
    toast.success('User Registered successfully', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(password,email)
    const mydata = {
      "name":username,
      "email":email,
      "password":password
    }
    try{
      const res  = await fetch("/user/register",{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(mydata)
      })
      await res.json()
      successfulLogin();
    }
    catch(err){
      console.log(err)
      alert("Error in Creating Account")
    }
    setUsername("");
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <section>
        <div className="container">
          <div className="user signinBx">
            <div className="formBx">
              <form
              onSubmit={(e)=>handleSubmit(e)} autoComplete="off"
              >
                <h2>Create an account</h2>
                <input type="text" name="username"
                placeholder="Username" required
                value={username} onChange={(e)=>setUsername(e.target.value)}
                />
                <input type="email" name="email"
                placeholder="Email Address" required
                value={email} onChange={(e)=>setEmail(e.target.value)}
                autoComplete="off"
                />
                <input type="password" name="password"
                placeholder="Create Password" required
                value={password} onChange={(e)=>setPassword(e.target.value)}
                autoComplete="off"
                />
                <input type="submit" name="" value="Sign Up" />
                <p className="signup">
                  Already have an account ?
                  <Link
                  to="/login"
                  >
                    Sign in.
                  </Link>
                </p>
              </form>
            </div>
            <div className="imgBx">
              <img
                src="https://images.unsplash.com/photo-1572499465883-9d7dd5a321fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80"
                alt="..."
              />
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </div>
  );
};

export default Register;