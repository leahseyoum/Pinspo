import { Link } from "react-router-dom";
import './MoreIdeas.css';

const MoreIdeasButton = () => {
    return (
        <> 
            <Link to={`/index`}>
                <div className="more-ideas-button-container">
                    <p className="more-ideas">Find Inspiration</p>
                </div>
            </Link>
        </>
    )
}

export default MoreIdeasButton;