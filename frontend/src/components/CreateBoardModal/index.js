import CreateBoardForm from './BoardCreateForm';
import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import {AiOutlinePlus} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './index.css';

function CreateBoardModal() {
    const [showModal, setShowModal] = useState(false);
    const [dropDown, setDropDown] = useState(false);
     
    const closeModal = () => {
        setShowModal(false);
     };


    return (
        <>
        <div className={`plus-icon-container ${dropDown ? 'modal-open' : ''}`}>
            <AiOutlinePlus className={`${dropDown ? 'dropdown-open' : ''}`} onClick={() => setDropDown(!dropDown)} size={30}/>
        </div>
            {dropDown && (
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                
                  <li>
                    <Link className='dropdown-create-pin-button' to='/create'>Create Pin</Link>
                  </li>
               
                <li>
                  <button className='dropdown-create-board-button' onClick={() => setShowModal(true)}>Create Board</button>
                </li>
              </ul>
            )}
            {showModal && (
                <Modal onClose={closeModal}>
                    <div className="create-board-modal-content" >
                        <CreateBoardForm closeModal={closeModal}/>
                    </div>
                </Modal>
            )} 
        
        </>
    );
};

export default CreateBoardModal;
