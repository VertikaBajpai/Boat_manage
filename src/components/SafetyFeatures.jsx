import React from 'react'
import { useState } from 'react';
const blocks={
    display: 'block', 
    fontSize: '20px', 
    
    marginBottom: '5px'
}
const SafetyFeatures = ({handleChange,selected}) => {
  const features = [
    'Live food provided to all passengers',
    'Emergency Kit onboard',
    'Fire Extinguishers',
    
  ];
  return (
   
      <div style={{padding:'10px'}}>
        <div style={blocks}>Safety Features</div>
        <p style={{ color: 'gray' }}>
        Select the safety features available on your boat to enhance passenger safety
        </p>
        {features.map((feature)=>(
          <div style={{padding:'5px'}}>
          <input
            type="checkbox"
            checked={
           selected.includes(feature)
            }
            onChange={() => handleChange(feature)}
            style={{ padding: '5px',
              border:'2px solid #0796e8',
              borderRadius:'4px'
            }}
          />
         {feature}
        </div>))}
        </div>
       
        
 
  )
}

export default SafetyFeatures
