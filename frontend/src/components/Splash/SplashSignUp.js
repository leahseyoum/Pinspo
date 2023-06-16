import SignupForm from "../SignupFormModal/SignupForm"
// import logo from "../../assets/image/logo3.png"
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