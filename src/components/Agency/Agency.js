import React from "react";
import NavBar from "../../CommonPages/NavBar/NavBar";

const Agency =()=>{
    return(
        <>
         <NavBar  firstLinkName='Home'
            secondLinkName='Agency'
            thirdLinkName='Influencer'
            fourthLinkName='About Us'
            btn='Login'
            visit='/Login'
    />
        <h1>Agency</h1>
        </>
    )
}

export default Agency