import CreateBoardForm from "../CreateBoardModal/BoardCreateForm";
import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import {AiOutlinePlus} from 'react-icons/ai';

function CreateBoardSelectModal( ) {
    const [showModal, setShowModal] = useState(false);
     
    const closeModal = (e) => {
        setShowModal(false);
     };


    return (
        <>
            <AiOutlinePlus className='create-board-plus' onClick={ () => setShowModal(true)}/>
        
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

export default CreateBoardSelectModal;