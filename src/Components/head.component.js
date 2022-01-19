import React from 'react';
import Typical from 'react-typical';
// import logo from "../assets/logo/cplogo.png" 
import headimg from "../assets/head.gif";
const Head =()=>{
    return(
        <>
        <div className="container text-center">
            <img className="img-fluid vert-move"  src={headimg}  />
                <Typical className="display-6"
                        steps={['cwipedia', 1000, 'Diploma Engineering Portal', 700,'Community', 500,'Software Labs', 500,'We are the TEAM of talented programmers', 500]}
                        loop={Infinity}
                        wrapper="p"
                />
            <button className="explore-btn">Explore</button>
        </div>
        
        </>
    );
}
export default Head;