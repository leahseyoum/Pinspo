import React, { useRef, useEffect, useState } from 'react';
import './DragAndDrop.css';
import { GrUploadOption } from 'react-icons/gr';

const DropZone = ( {setImageData} ) => {
  const dropTargetRef = useRef(null);
  const fileInputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);
  
  useEffect(() => {
    const dropTarget = dropTargetRef.current;

    // Drag events
    const handleDragOver = (event) => {
      event.preventDefault();
      dropTarget.classList.add('hover');
    };

    const handleDragLeave = (event) => {
      dropTarget.classList.remove('hover');
    };

    const handleDrop = (event) => {
      event.preventDefault();
      dropTarget.classList.remove('hover');
    //   const file = event.target.files[0];
      const file = event.dataTransfer.files[0];
      setImageData(file)
      handleFile(file);
    };

    dropTarget.addEventListener('dragover', handleDragOver);
    dropTarget.addEventListener('dragleave', handleDragLeave);
    dropTarget.addEventListener('drop', handleDrop);

    // Click event
    const handleClick = () => {
      fileInputRef.current.click();
    };

    dropTarget.addEventListener('click', handleClick);

    // Cleanup event listeners
    return () => {
      dropTarget.removeEventListener('dragover', handleDragOver);
      dropTarget.removeEventListener('dragleave', handleDragLeave);
      dropTarget.removeEventListener('drop', handleDrop);
      dropTarget.removeEventListener('click', handleClick);
    };
  }, []);

  // Handle file
  function handleFile(file) {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const imageUrl = event.target.result;
        setImageUrl(imageUrl);
        setImageData(file);
      };

      reader.readAsDataURL(file);
    }
  }

//   const handleFileChange = e => {
//     const file = e.target.files[0];
//     if (file) {
//       const fileReader = new FileReader();
//       fileReader.readAsDataURL(file);
//       fileReader.onload = () => {
//         setImageFile(file);
//         setImageUrl(fileReader.result);
//         setPreview(fileReader.result);
//       };
//     }
//   }

  return (
    <>
      <div ref={dropTargetRef} id="drop-target">
        {imageUrl ? (
          <img src={imageUrl} alt="Uploaded" className="uploaded-image" />
        ) : (
            <div className='drag-and-drop'>
                Drop an image here or click to upload
                <GrUploadOption className ='upload-icon' />
            </div>
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        id="file-input"
        // accept="image/*"
        onChange={(e) => handleFile(e.target.files[0])}
        style={{ display: 'none' }}
      />
    </>
  );
};

export default DropZone;



