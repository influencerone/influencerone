import React from "react";
import NavBar from "../../CommonPages/NavBar/NavBar";
 



const Blog = ()=>{
return(
    <>
     <NavBar  firstLinkName='Home'
            secondLinkName='Agency'
            thirdLinkName='Influencer'
            fourthLinkName='About Us'
            btn='Login'
            visit='/Login'
    />
   <h1>Blog</h1>
    </>
)
}
export default Blog;