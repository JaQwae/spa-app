import { React, useState } from 'react'
import Axios from "axios";
import "../Login/Login";
import "./SignUp.css";

function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3000/auth/signup", { 
            username, 
            email,
            password
        }).then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <section className='form-background'>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-sections'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete='email'
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='form-sections'>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        autoComplete="username"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className='form-sections'>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        autoComplete="current-password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='form-sections'>
                    <input
                        id="sign-up-btn"
                        className='btn form-btn'
                        type="submit"
                        value="SIGN UP"
                    />
                    <p>Existing User?</p>
                </div>
            </form>
        </section>
    )
}

export default SignUp