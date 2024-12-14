import React from 'react'
import { useState } from 'react';
const blocks={
  display: 'block', 
  fontSize: '20px', 
  
  marginBottom: '5px'
}

const Meals = () => {

          const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleOnChange = (index) => {
    switch(index) {
      case 1:
        setIsChecked1(!isChecked1);
        break;
      case 2:
        setIsChecked2(!isChecked2);
        break;
      
    }
}
  return (
    <div style={{padding:'15px'}}>
       <div style={blocks}>Meals</div>
      <p style={{ color: 'gray' }}>
        Select the available meals on your boat.
      </p>

      <div style={{padding:'5px'}}>
        <input
          type="checkbox"
          checked={isChecked1}
          onChange={() => handleOnChange(1)}
          style={{ padding: '5px',
            border:'2px solid #0796e8',
            borderRadius:'4px'
          }}
        />
     Veg/Non veg
      </div>

      <div style={{padding:'5px'}}>
        <input
          type="checkbox"
          checked={isChecked2}
          onChange={() => handleOnChange(2)}
          style={{ padding: '5px' }}
        />
  Pure Veg
      </div>

     
    </div>
  )

  
}

export default Meals
