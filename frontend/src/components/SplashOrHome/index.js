import React from "react";
import { useSelector } from 'react-redux';
import Splash from "../SplashPage";
import Pins from "../Pin/PinIndex";


function SplashOrHome(){

    const sessionUser = useSelector(state => state.session.user);

    
    return (
        <div className="splash-home">
            {sessionUser ? <Pins/> : <Splash/>}
        </div>
    )
}

export default SplashOrHome