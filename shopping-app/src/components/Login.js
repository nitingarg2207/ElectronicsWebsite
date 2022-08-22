import React, { useState } from "react";
import '../styles/Signup.css'
import {Link} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const successfulLogin = () => {
    console.log("Hi")
    toast.success('Login Succesful', {
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
    const mydata = {email,password}
    try{
      const res  = await fetch("/user/login",{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(mydata)
      })
      await res.json()
      successfulLogin();
      setEmail("");
      setPassword("");
    }
    catch(err){
      console.log(err)
      alert("Error in Login")
    }
  }

  return (
    <div>
      <section>
        <div className="container">
          <div className="user signinBx">
            <div className="imgBx">
              <img
                src="https://images.unsplash.com/photo-1572499465883-9d7dd5a321fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80"
                alt="..."
              />
            </div>
            <div className="formBx">
              <form autoComplete="off"
              onSubmit={(e)=>handleSubmit(e)}
              >
                <h2>Sign In</h2>
                <input type="email" name="email"
                placeholder="Email" required value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input type="password" name="password"
                placeholder="Password" required value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <input type="submit" name="" value="Login" />
                <p className="signup">
                  Don't have an account ?
                  <Link
                  to="/register"
                  >
                    Sign Up.
                  </Link>
                </p>
              </form>
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

export default Login;