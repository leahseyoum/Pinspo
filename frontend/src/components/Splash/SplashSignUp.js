import SignupForm from "../SignupFormModal/SignupForm"
import pinterestLogo from '../../assets/pinterestLogo.png'

const SplashSignUp = (props)=> {


    return (
        <div className="sign-up-content">
            <div className="sign-up-window">
                <div id="modal-children">
                    
                    <SignupForm />
                </div>
           
            </div>
           
        </div>
       
    )
}

export default SplashSignUp