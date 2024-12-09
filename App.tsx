import React, { useState } from 'react';
import SignUpForm from './components/Signup.tsx';
import LoginForm from './components/Login.tsx';

const App: React.FC = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <h1>Better Software Assignment</h1>
      {showLogin ? (
        <>
          <LoginForm />
          <p>
            Don't have an account?{' '}
            <button onClick={() => setShowLogin(false)}>Sign Up</button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm />
          <p>
            Already have an account?{' '}
            <button onClick={() => setShowLogin(true)}>Log In</button>
          </p>
        </>
      )}
    </div>
  );
};

export default App;
