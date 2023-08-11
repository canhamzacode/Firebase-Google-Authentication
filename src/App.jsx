import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { auth, googleProvider } from './config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [user] = useAuthState(auth);
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };
  const handleLogout = () => {
    auth.signOut();
  };
  useEffect(() => {
    console.log(user);
  }, [user])

  return (
    <>
      <h1>Hello {user?.displayName}</h1>
      <button onClick={signInWithGoogle}>
        Sign In
      </button>
      <button onClick={handleLogout}>
        Log out
      </button>
    </>
  )
}

export default App
