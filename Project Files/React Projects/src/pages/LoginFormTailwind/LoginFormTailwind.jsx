import './LoginForm.css'
import styles from './LoginForm.module.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function LoginFormTailwind() {
    
    const [usernameFix, setUsernameFix] = useState(null);
    const [passwordFix, setPasswordFix] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const username = formData.get("username");
        const password = formData.get("password");
        let submittedForm = null;
        if (username.length <= 8) {
            setUsernameFix(u => <p className={styles.formFix}>Username must be more than 8 characters</p>);
        } else if (/[!@#$%^&*]/.test(username)) {
            setUsernameFix(u => <p className={styles.formFix}>Username must not contain special character</p>)
        } else {
            setUsernameFix(u => null);
        }

        if (password.length <= 8) {
            setPasswordFix(p => <p className={styles.formFix}>Password must be more than 8 characters</p>);
        } else if (!/[A-Z]/.test(password)) {
            setPasswordFix(p => <p className={styles.formFix}>Password must contain an uppercase letter</p>);
        } else if (!/[a-z]/.test(password)) {
            setPasswordFix(p => <p className={styles.formFix}>Password must contain an lowercase letter</p>);
        } else if (!/[0-9]/.test(password)) {
            setPasswordFix(p => <p className={styles.formFix}>Password must contain a number</p>);
        } else if (!/[!@#$%^&*]/.test(password)) {
            setPasswordFix(p => <p className={styles.formFix}>Password must contain a special character</p>);
        } else {
            setPasswordFix(p => null);
        }

        if (username.length > 8 && password.length > 8) {
            submittedForm = formData;
            alert(`Successfully logged in to ${username}`);
        }
    }

    return (
        <div className="min-w-full min-h-screen flex flex-col justify-center items-center">
            <div className="bg-[rgba(0,255,255,0.443)] flex flex-col rounded-3xl p-12 justify-center items-center">
                <h2 className="mt-0 text-2xl font-bold mb-3">Login</h2>
                <form name="login" onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                        <label for="username">Username:</label>
                        <input type="text" name="username" className="min-w-60 bg-white placeholder-gray-300 pl-2 py-0.5 text-[95%] text-black" placeholder="Enter your username" required/> 
                    </div>
                    {usernameFix}
                    <div className="flex flex-col gap-1.5">
                        <label for="password">Password:</label>
                        <input type="password" name="password" className="min-w-60 bg-white placeholder-gray-300 pl-2 py-0.5 text-[95%] text-black" placeholder="Enter your password" required/>
                    </div>
                    {passwordFix}
                    <div className="flex justify-center pt-1">
                        <button type="submit" className="bg-gray-300 px-7 text-black font-light text-sm hover:cursor-pointer">Log In</button>
                    </div>
                </form>
                <p className="mt-5">
                    No account? &nbsp;
                    <Link to={'./create-account'} className="hover:text-blue-600">
                        Create Account
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default LoginFormTailwind