import EditBoardForm from './EditBoardForm';
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import './index.css';

function EditBoardModal({board}) {
    const [showModal, setShowModal] = useState(false);

     const closeModal = () => {
        setShowModal(false);
     };


    return (
        <>  
                <p className="currently-in">Board Options</p>
                <button className='edit-board-button' onClick={() => {setShowModal(true)}}>Edit Board</button>
            {showModal && (
                <Modal onClose={closeModal}>
                    <div className="edit-board-modal-content" >
                        <EditBoardForm board={board} closeModal={closeModal}/>
                    </div>
                </Modal>
            )} 
        
        </>
    );
};

export default EditBoardModal;
