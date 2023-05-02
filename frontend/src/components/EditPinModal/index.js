import EditPinForm from './EditPinForm';
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';

function EditPinModal({pin}) {
    const [showModal, setShowModal] = useState(false);

     const closeModal = () => {
        setShowModal(false);
     };

     console.log(showModal);

    return (
        <>
            <button className='edit-button' onClick={() => {setShowModal(true)}}>Edit Pin</button>
            {showModal && (
                <Modal onClose={closeModal}>
                    <div className="edit-pin-modal-content" onClick={(e) => e.stopPropagation()}>
                        <EditPinForm pin={pin} closeModal={closeModal}/>
                    </div>
                </Modal>
            )}
        
        </>
    );
};

export default EditPinModal;
