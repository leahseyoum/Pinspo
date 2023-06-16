import { Link } from "react-router-dom";
import './MoreIdeas.css';

const UsersCreateButton = () => {
    return (
        <> 
            <Link to={`/create`}>
                <div className="spacing-div">
                    <div className="more-ideas-button-container">
                        <p className="more-ideas">Create</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default UsersCreateButton;