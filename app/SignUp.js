'use client';

import React, { useState } from 'react';
import { User, Mail, Lock } from 'lucide-react';

export default function SignupPage() {
  const [userType, setUserType] = useState('customer');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!formData.agreedToTerms) {
      alert('Please agree to the Terms and Conditions');
      return;
    }
    console.log('Form submitted:', { ...formData, userType });
    alert('Account created successfully!');
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div>
      <div>
        <div>
          <h1>Click2Book</h1>
          <h2>Welcome Back</h2>
          <p>Sign in to your account to continue</p>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <p>I want to join as a</p>
              <div>
                <button
                  type="button"
                  onClick={() => setUserType('customer')}
                >
                  Customer
                </button>
                <button
                  type="button"
                  onClick={() => setUserType('provider')}
                >
                  Provider
                </button>
              </div>
            </div>

            <div>
              <div>
                <label>First Name</label>
                <div>
                  <User />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First name"
                    required
                  />
                </div>
              </div>
              <div>
                <label>Last Name</label>
                <div>
                  <User />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label>Email Address</label>
              <div>
                <Mail />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label>Password</label>
              <div>
                <Lock />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Create a password"
                  required
                />
              </div>
            </div>

            <div>
              <label>Confirm Password</label>
              <div>
                <Lock />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>

            <div>
              <label>
                <input
                  type="checkbox"
                  name="agreedToTerms"
                  checked={formData.agreedToTerms}
                  onChange={handleInputChange}
                  required
                />
                <span>
                  I agree to the{' '}
                  <a href="#">Terms and Conditions</a>{' '}
                  and{' '}
                  <a href="#">Privacy Policy</a>
                </span>
              </label>
            </div>

            <button type="submit">
              CREATE ACCOUNT
            </button>

            <div>
              <div></div>
              <span>Or Sign up with</span>
              <div></div>
            </div>

            <div>
              <button type="button">
                SignUp Method 1
              </button>
              <button type="button">
                SignUp Method 2
              </button>
            </div>

            <p>
              Already have an account?{' '}
              <a href="#">Sign Up here</a>
            </p>
          </form>
        </div>

        <div>
          <a href="#">
            <span>←</span>
            <span>Back to Home</span>
          </a>
        </div>
      </div>
    </div>
  );
}