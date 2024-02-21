import React from 'react'
import "./Login.css"

function Login() {
    return (
        <section className='form-background'>
                <h1>Login</h1>
                <form>
                    <div className='form-sections'>
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text"
                            id="username"
                            name="username"
                            autoComplete="username"
                            required
                        />
                    </div>
                    <div className='form-sections'>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="pass"
                            name="password"
                            autoComplete="current-password"
                            required
                        />
                    </div>
                    <div className='form-sections'>
                        <input
                            id="login-btn"
                            className='btn form-btn'
                            type="submit"
                            value="SIGN IN"
                        />
                    </div>
                </form>
        </section>
    )
}

export default Login