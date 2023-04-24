// import React, { useState } from 'react';
// import { Modal } from '../../context/Modal';
// import LoginForm from './LoginForm';
// import SignupForm from './SignupForm';

// function AuthModal() {
//   const [showLogin, setShowLogin] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);

//   const toggleModal = () => {
//     setShowLogin(!showLogin);
//     setShowSignup(!showSignup);
//   }

//   return (
//     <>
//       <button onClick={() => setShowLogin(true)}>Login</button>
//       {/* <button onClick={() => setShowSignup(true)}>Sign Up</button> */}
//       {showLogin ? (
//         <Modal onClose={() => setShowLogin(false)}>
//           <LoginForm />
//           <button onClick={toggleModal}>Sign Up</button>
//         </Modal>
//       ) : (
//         <Modal onClose={() => setShowSignup(false)}>
//           <SignupForm />
//           <button onClick={toggleModal}>Login</button>
//         </Modal>
//       )}
//     </>
//   );
// }

// export default AuthModal;















// import React, { useState } from 'react';
// import { Modal } from '../../context/Modal';
// import LoginForm from './LoginForm';
// import SignupForm from './SignupForm';

// function AuthModal() {
//   const [showLogin, setShowLogin] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);
//   console.log(showSignup, "SIGN UP")


//   return (
//     <>
//       <button onClick={() => setShowLogin(true)}>Login</button>
//       {/* <button onClick={() => setShowSignup(true)}>Sign Up</button> */}
//       {showLogin ? (
//         <Modal onClose={() => {setShowLogin(false); setShowSignup(false)}}>
//           console.log(showSignup, "SIGN UP")
//           <LoginForm />
//           <button onClick={() => {setShowLogin(false); setShowSignup(true)}}>Sign Up</button>
//         </Modal>
//       ) : (
//         <Modal onClose={() => {setShowSignup(false); setShowLogin(false)}}>
//           <SignupForm />
//           <button onClick={() => {setShowSignup(false); setShowLogin(true)}}>Login</button>
//         </Modal>
//       )}
//     </>
//   );
// }

// export default AuthModal;







import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import SignupFormModal from '../SignupFormModal';
import { NavLink } from 'react-router-dom';
import './index.css';


function LoginFormModal() {
  const [showLoginModal, setShowLoginModal] = useState(false);


  return (
    <>
      <button className="login-button" onClick={() => setShowLoginModal(true)}>Log In</button>
      {showLoginModal && (
        <Modal className="login-modal" onClose={() => setShowLoginModal(false)}>
          <LoginForm />
        </Modal>
      )}
      
    </>
  );
}

export default LoginFormModal;