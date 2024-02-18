// app.js
import { auth, firebaseConfig } from './firebaseConfig.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';

document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered');
      document.getElementById('login-form').style.display = 'block';
      document.getElementById('register-form').style.display = 'none';
    } catch (error) {
      console.error('Error in user registration:', error.code, error.message);
    }
});

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in');
      window.location.href = 'index.html';
    } catch (error) {
      console.error('Error in user login:', error.code, error.message);
    }
});

onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('User is signed in, UID:', user.uid);
    } else {
      console.log('User is signed out.');
      document.getElementById('login-form').style.display = 'block';
      document.getElementById('register-form').style.display = 'none';
    }
});

document.querySelector('.toggle-form').addEventListener('click', function() {
        const registerForm = document.getElementById('register-form');
        const loginForm = document.getElementById('login-form');
        const toggleText = document.querySelector('.toggle-form');

        if (registerForm.style.display === 'block') {
            registerForm.style.display = 'none';
            loginForm.style.display = 'block';
            toggleText.textContent = 'Register Here';
        } else {
            registerForm.style.display = 'block';
            loginForm.style.display = 'none';
            toggleText.textContent = 'Login Here';
        }
});

document.getElementById('logout-button').addEventListener('click', async () => {
    try {
        await signOut(auth);
        console.log('User logged out');
        // Optionally redirect to login page or show login form
        window.location.href = 'login.html'; // Adjust as needed, for example, to your app's login page
    } catch (error) {
        console.error('Error logging out:', error);
    }
});



