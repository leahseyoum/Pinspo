// import {useState, useRef} from 'react';

// function DragDropFile() {
    
//     const [dragActive, setDragActive] = useState(false);
//     const inputRef = useRef(null);

    
//     // handle drag events
//     const handleDrag = function(e) {
//       e.preventDefault();
//       e.stopPropagation();
//       if (e.type === "dragenter" || e.type === "dragover") {
//         setDragActive(true);
//       } else if (e.type === "dragleave") {
//         setDragActive(false);
//       }
//     };
    
//     // triggers when file is dropped
//     const handleDrop = function(e) {
//       e.preventDefault();
//       e.stopPropagation();
//       setDragActive(false);
//       if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//         // handleFiles(e.dataTransfer.files);
//       }
//     };
    
    
//     const handleChange = function(e) {
//       e.preventDefault();
//       if (e.target.files && e.target.files[0]) {
//         // handleFiles(e.target.files);
//       }
//     };
    
  
//     const onButtonClick = () => {
//       inputRef.current.click();
//     };
    
//     return (
//       <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
//         <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
//         <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
//           <div className='drag-drop-container'>
//             <p>Drag and drop your file here or</p>
//             <button className="upload-button" onClick={onButtonClick}>Upload a file</button>
//           </div> 
//         </label>
//         { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
//       </form>
//     );
//   };

//   export default DragDropFile;

// import React, { useState } from 'react';

// const DragDropFile = () => {
//   const [preview, setPreview] = useState('');

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();

//     if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
//       const file = e.dataTransfer.files[0];
//       previewFile(file);
//     }
//   }

//   const handleDrag = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//   }

//   const handleDragIn = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//   }

//   const handleDragOut = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//   }

//   const previewFile = (file) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () => {
//       setPreview(reader.result);
//     };
//   }

//   return (
//     <div
//       className='drag-and-drop'
//       onDrop={handleDrop}
//       onDragOver={handleDrag}
//       onDragEnter={handleDragIn}
//       onDragLeave={handleDragOut}
//     >
//       {preview ? (
//         <img className='preview-image' src={preview} alt='Preview' />
//       ) : (
//         <p>Drag and drop or click to upload</p>
//       )}
//     </div>
//   );
// }

// export default DragDropFile;

// import React, {useState} from "react";
// const ImageUploader = () => {
//     // const[image, setImage] = useState(null);
//     const[previewUrl, setPreviewUrl] = useState(""); 
//     // const handleFile = file => {
//     //     //you can carry out any file validations here...
//     //     setImage(file);
//     //     setPreviewUrl(URL.createObjectURL(file));
//     // }
//     //other codes follows...
//     const handleOndrop = event => {
      
//       //let's grab the image file
//       let imageFile = event.dataTransfer.files[0];
//       // handleFile(imageFile);
//     }
// }
