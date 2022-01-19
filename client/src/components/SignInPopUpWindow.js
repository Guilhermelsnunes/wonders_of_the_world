import './SignInPopUpWindow.css'

const SignInPopUpWindow = ({content, handlePopUpClose, currentUser}) => {
    return(
        <div className="sign-in-pop-up">
            <div className="sign-in-pop-up-box">
                {content}
                { currentUser ? <button className='sign-in-close-button' onClick={handlePopUpClose}>Press Here<br/>To Enter</button> : null}
            </div>
            
        </div>
    )
}
export default SignInPopUpWindow;