import styles from './LoginForm.module.css'
import { Link } from 'react-router-dom';
import CreateAccount from './CreateAccount';

function LoginForm() {
    return (
        <div className={styles.root}>
            <div className={styles.loginContainer}>
                <h2 className={styles.loginTitle}>Login</h2>
                <form name="login" className={styles.loginForm}>
                    <div className={styles.loginFormUsername}>
                        <label for="username">Username:</label>
                        <input type="text" name="username" className={styles.inputUsername} placeholder="Enter your username" /> 
                    </div>
                    <div className={styles.loginFormPassword}>
                        <label for="password">Password:</label>
                        <input type="password" name="password" className={styles.inputPassword} placeholder="Enter your password" />
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.loginBtn}>Log In</button>
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