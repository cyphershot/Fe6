import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './style.css';
import { clientSignUpService } from '../../api/ClientAPIService';
import { toast } from 'react-toastify';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    clientSignUpService(email, password)
      .then(() => {
        navigate('/dash');
        toast('User created successfully!');
      })
      .catch(error => {});
  }

  return (
    <div>
      {' '}
      <main>
        <section className="section-login">
          <div className="section-main">
            <div className="section-login-1">
              <div className="section-login-1-main">
                <h1 className="section-login-1-title"></h1>
                <p className="section-login-1-text">Beautiful gradients in seconds.</p>
                <div className="section-login-1-img">
                  <img src="https://fe6-xi.vercel.app/assets/FE6-01.png" alt="" />
                </div>
              </div>
            </div>
            <div className="section-login-2">
              <div className="section-login-2-main">
                <h1 className="section-login-2-title">Signup</h1>
                <form className="section-login-2-form">
                  <div className="login-form-1">
                    <label htmlFor="input-email">Email</label>
                    <input
                      type="email"
                      onChange={e => {
                        setEmail(e.target.value);
                      }}
                      id="input-email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="login-form-3">
                    <label htmlFor="input-password">Password</label>
                    <input
                      type="password"
                      onChange={e => {
                        setPassword(e.target.value);
                      }}
                      id="input-password"
                      placeholder="At least 8 characters"
                      required
                    />
                  </div>
                  <div className="login-form-4">
                    <input type="checkbox" id="input-checkbox" />
                    <p>
                      By creating an account, you agree to the <a href="#">Terms &amp; Conditions.</a>
                    </p>
                  </div>
                  <div className="login-form-submit-btn">
                    <button type="submit" onClick={submit}>
                      Create an Account
                    </button>
                  </div>
                  <div className="login-form-5">
                    <p>
                      Already have an account? <Link to="/login">Login</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Login;
