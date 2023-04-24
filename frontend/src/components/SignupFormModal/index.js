
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';
import LoginFormModal from '../LoginFormModal';
import { NavLink } from 'react-router-dom';

function SignupFormModal() {
    const [showSignupModal, setShowSignupModal] = useState(false);

    return (
        <>
            <button className="signup-button" onClick={() => setShowSignupModal(true)}>Sign up</button>
            {showSignupModal && (
                <Modal onClose={() => setShowSignupModal(false)}>
                    <SignupForm />
                </Modal>
            )}
        </>
    );
}

export default SignupFormModal;