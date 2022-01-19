import { useState } from "react";

const RegistrationForm = ({formUser, onRegistrationSubmit}) => {
    
    const [email, setEmail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");

    const handleEmailChange = (evt) => {
        setEmail(evt.target.value);
    }

    const handleDateOfBirthChange = (evt) => {
        setDateOfBirth(evt.target.value);
    }

    const handleRegistrationFormSubmit = (evt) => {
        evt.preventDefault()

        onRegistrationSubmit({
            name: formUser.name,
            email: email,
            dateOfBirth: dateOfBirth 
        })

        setEmail("")
    }

    return(
        <form onSubmit={handleRegistrationFormSubmit}>
            <label>Parents Email: </label><br/>
            <input className="input-label" type="text" name="email" placeholder="Enter parent's email..." onChange={handleEmailChange}required /><br/>
            <label>{formUser.name}'s Date of Birth: </label><br/>
            <input className="input-label" type="date" name="dateOfBirth" value={dateOfBirth} onChange={handleDateOfBirthChange} required/><br/>
            <input className="reg-submit" type="submit" value="Submit" />
        </form>
    )
}

export default RegistrationForm;