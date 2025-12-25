import styles from './LoginForm.module.css'
import { Link } from 'react-router-dom';
import CreateAccount from './CreateAccount';
import { useState } from 'react';

function LoginForm() {
    
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
        <div className={styles.root}>
            <div className={styles.loginContainer}>
                <h2 className={styles.loginTitle}>Login</h2>
                <form name="login" onSubmit={handleSubmit} className={styles.loginForm}>
                    <div className={styles.loginFormUsername}>
                        <label for="username">Username:</label>
                        <input type="text" name="username" className={styles.inputUsername} placeholder="Enter your username" required/> 
                    </div>
                    {usernameFix}
                    <div className={styles.loginFormPassword}>
                        <label for="password">Password:</label>
                        <input type="password" name="password" className={styles.inputPassword} placeholder="Enter your password" required/>
                    </div>
                    {passwordFix}
                    <div className={styles.buttonContainer}>
                        <button type="submit" className={styles.loginBtn}>Log In</button>
                    </div>
                </form>
                <p className={styles.noAccount}>
                    No account? &nbsp;
                    <Link to={'./create-account'} className={styles.createAccount}>
                        Create Account
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default LoginForm