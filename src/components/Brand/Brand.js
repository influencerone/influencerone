import React from "react";
import NavBar from "../../CommonPages/NavBar/NavBar";



const Brand = ()=>{
return(
    <>
    <NavBar  firstLinkName='Home'
            secondLinkName='Agency'
            thirdLinkName='Influencer'
            fourthLinkName='About Us'
            btn='Login'
            visit='/Login'
    />
   <h1>Brand</h1>
    </>
)
}
export default Brand;