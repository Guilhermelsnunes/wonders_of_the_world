import { useState } from "react";

const SignInForm = ({onSignInSubmit}) => {
    
    const [name, setName] = useState("");

    const handleNameChange = (evt) => {
        setName(evt.target.value);
    }

    const handleSignInFormSubmit = (evt) => {
        evt.preventDefault()

        onSignInSubmit({
            name: name
        })

        setName("")
    }

    return(
        <form onSubmit={handleSignInFormSubmit}>
            <label>Enter Your Name: </label><br/>
            <div >
            <input className="input-label" type="text" placeholder="Name..." value={name} onChange={handleNameChange} required/><br/>
            <input className="reg-submit" type="submit" value="Submit" />
            </div>
        </form>
    )
}

export default SignInForm;