import React, { useState } from 'react'
import "./LoginScreen.css"
import SignInScreen from './SignInScreen';
function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className="LoginScreen">
            <div className="LoginScreen_background">
                <img
                    className="LoginScreen_logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/4/42/Dfnefr.png' alt="Netflix Logo" />
                <button onClick={() => setSignIn(true)} className="LoginScreen_button">Sign In</button>
                <div className="LoginScreen_gradient" />
            </div>
            <div className="LoginScreen_body">
                {signIn ? <SignInScreen />
                    : <>
                        <h1>Unlimited films, TV Programmes and more.</h1>
                        <h2>
                            Watch anywhere. Cancel at any time.
                        </h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                        <div className="LoginScreen_input">
                            <form>
                                <input type="email" placeholder="Email Address" />
                                <button className="LoginScreen_getStarted">GET STARTED</button>
                            </form>
                        </div>
                    </>}
            </div>
        </div>
    )
}

export default LoginScreen