import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import { NavLink } from 'react-router-dom';

function AuthFormModal() {
    const [showSignUpModal, setShowSignupModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    return (
        <>
            <button className="signup-button" onClick={() => {setShowSignupModal(true); setShowLoginModal(false)}}>Sign up</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <SignupForm />
                        <LoginFormModal />
                    </Modal>
                )}
            
            <button onClick={() => {setShowLoginModal(true); setShowSignupModal(false)}}>Log In</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <LoginForm />
                        <SignupFormModal/>
                    </Modal>
                )}
        </>
    )
}

export default AuthFormModal