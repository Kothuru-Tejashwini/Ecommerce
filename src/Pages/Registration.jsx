import React from 'react';
// import {Link} from "react-router-dom";
export default function Register() {
return (
<><form id="register-form">
     <label className="label-text" htmlFor="username">UserName:</label>
    <input className="input-field" type="text" id="username"></input>
    <br/>
    <label className="label-text" htmlFor="password">Password:</label>
                <input className="input-field" type="password" id="password"></input>
                <br/>
                <label className="label-text" htmlFor="email">Email:</label>
                <input className="input-field" type="email" id="email"></input>
                <br/>
                <label className="label-text" htmlFor="mobile">Mobile No:</label>
                <input className="input-field" type="tel" id="mobile"></input>
                <br/>
                <p id="submit-button" onClick={valid}>Submit</p>
            </form>
        </>
    )
    function valid(){
        let user=document.getElementById("username").value
        window.localStorage.setItem("Username",user)
        let pass=document.getElementById("password").value
        window.localStorage.setItem("Password",pass)
        let email=document.getElementById("email").value
        window.localStorage.setItem("Email",email)
        let mobile=document.getElementById("mobile").value
        window.localStorage.setItem("Mobile",mobile)
        if(user!==""&&pass!==""&&email!==""&&mobile!==""){
            window.open("/login")
        }
        else{
            alert("Enter your details")
        }
    }
}