import React from 'react'
import '../Style/Form.css';

const Form = (props) => {
    
    return (
      
          < div className="Containter">
            
                <div className="header-text">
                <ul>
          <li>  {props.name}</li>
          
        </ul>
                </div>
            </div>
      
    )
}
export default Form;
