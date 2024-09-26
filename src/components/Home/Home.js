import React from 'react'
import NavBar from '../../CommonPages/NavBar/NavBar'
import CommonHome from '../../CommonPages/Home/CommonHome'

const Home=()=> {
  return (
    <div>
         <NavBar  firstLinkName='Home'
            secondLinkName='Agency'
            thirdLinkName='Influencer'
            fourthLinkName='About Us'
            btn='Login'
            visit='/Login'
            
    />
        <CommonHome/>
        
    </div>
  )
}

export default Home