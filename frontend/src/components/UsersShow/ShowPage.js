 import Spinner from "../Spinner/Spinner";
 import { Link } from "react-router-dom";
 import { useLocation } from "react-router-dom";
 import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

 const UsersShowPage = ({}) => {
    const userParamsId = useParams();
    const userId = userParamsId.userId;
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`/api/users/${userId}`)
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])

    const location = useLocation();
    // return (
    //     <div className="info-container">
    //       {user ? (
    //         <>
    //           <div className="user-profile-header-container">
    //             <div className="user-show-profile-pic">
    //               {user.profilePhoto ? (
    //                 <img className="profile-photo" src={user.profilePhoto} alt="profile photo" />
    //               ) : (
    //                 <p className="user-initial">{user.username[0].toUpperCase()}</p>
    //               )}
    //             </div>
    //           </div>
      
    //           <p className="username-tag">{`@${user.username}`}</p>
    //           <div className="user-profile-info-container">
    //             <div className="username-container">
    //               <h2 className="profile-username">{user.username}</h2>
    //               {/* <button className="edit-profile-button" onClick={handleEditClick}>
    //                 Edit Profile
    //               </button> */}
    //             </div>
    //             <div className="user-nav-links-container">
    //               {/* <a href="/created" className="user-nav-link">
    //                 Created
    //               </a>
    //               <a href="/saved" className="user-nav-link">
    //                 Saved
    //               </a> */}
    //               <Link to="/created" className={`user-nav-link ${location.pathname === '/created' ? 'active' : ''}`}>
    //             Created
    //           </Link>
    //           <Link to="/saved" className={`user-nav-link ${location.pathname === '/saved' ? 'active' : ''}`}>
    //             Saved
    //           </Link>
    //             </div>
    //           </div>
    //         </>
    //       ) : (
    //         <Spinner />
    //       )}
    //     </div>
    //   );

    return (
        <>
        </>
    )
 }

 export default UsersShowPage;