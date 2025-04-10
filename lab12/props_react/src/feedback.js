import React from "react";
import "./index.css";
import Modalwindow from "./modalwindow"
const User_feedback = function(props){
    // function to open modal window
    const openmodalwindow=function(){
        const modalwindow = document.querySelector(".modalwindow")
        modalwindow.style.display = "block";
    }
    
    return(
        <>
            <main className="feedbackcontainer">
                <section classname="feedbackcard">
                    <div classname="content"><p>{props.username}</p></div>
                    <div classname="description">{props.children}</div>
                    <div classname="cardfooter">
                        <p className="addiction" onClick={openmodalwindow}><span>&#10011;</span>Add feedback</p>
                    </div>    
                </section>

            </main>
            {/**modal window */}
            <Modalwindow/>
        </>
    )
}

export default User_feedback