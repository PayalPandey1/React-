import React from 'react'
import './one.css'


const Header = (props) =>
{
        return (
            <div className = "header">
             
                <div id = "Logo" >   Logo </div> 
                <div id = "text" >  <input type ="text" onChange = {props.keysk }   />  </div>
                <div id = "button"> <input type = "button" value = "Submit" /> </div>
                
            </div> 
        )    

}

export default Header ;