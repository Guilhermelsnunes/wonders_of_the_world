import RegistrationForm from "../components/RegistrationForm";
import SignInForm from "../components/SignInForm";


const UsersContainer = ({ addFormUser, createUser, currentUser, formUser }) => {

    return (
        <div>
            {formUser ? null : <>
                <h2>Sign In:</h2>
                <SignInForm onSignInSubmit={addFormUser} />
            </>}
            {currentUser ? <h2>Welcome {currentUser.name}!</h2> : null}
            {(!currentUser && formUser) ? <>
                <h2>You are not registered</h2>
                <h3>👨‍👧Ask a grown-up to do this bit with you👩‍👦</h3>
                <RegistrationForm formUser={formUser} onRegistrationSubmit={createUser} /> </> : null}
        </div>
    )
}

export default UsersContainer;