import React, { useState } from 'react';

const blocks = {
  display: 'block',
  fontSize: '20px',
  marginBottom: '5px',
};

const Amenities = ({handleChange,selected}) => {
  // State for each checkbox
  // const [isChecked1, setIsChecked1] = useState(false);
  // const [isChecked2, setIsChecked2] = useState(false);
  // const [isChecked3, setIsChecked3] = useState(false);
  // const [isChecked4, setIsChecked4] = useState(false);
  // const [isChecked5, setIsChecked5] = useState(false);
  // const [isChecked6, setIsChecked6] = useState(false);

  const amenities = [
    'Clean Restrooms',
    'Comfortable Sitting arrangement',
    'Onboarding Dining',
    'Wi-Fi Access',
    'Entertainment System',
    'Air Conditioning/Climate Control',
  ];
  

  return (
    <div style={{padding:'10px'}}>
      <div style={blocks}>Amenities</div>
      <p style={{ color: 'gray' }}>
        Select the amenities available on your boat to enhance passenger comfort and experience
      </p>
      {amenities.map((amenity)=>(
        <div style={{padding:'5px'}}>
        <input
          type="checkbox"
          checked={
         selected.includes(amenity)
          }
          onChange={() => handleChange(amenity)}
          style={{ padding: '5px',
            border:'2px solid #0796e8',
            borderRadius:'4px'
          }}
        />
       {amenity}
      </div>
      ))}

      {/* <div style={{padding:'5px'}}>
        <input
          type="checkbox"
          checked={isChecked1}
          onChange={() => handleOnChange(1)}
          style={{ padding: '5px',
            border:'2px solid #0796e8',
            borderRadius:'4px'
          }}
        />
        Clean Restrooms
      </div>

      <div style={{padding:'5px'}}>
        <input
          type="checkbox"
          checked={isChecked2}
          onChange={() => handleOnChange(2)}
          style={{ padding: '5px' }}
        />
      Comfortable Sitting arrangement
      </div>

      <div style={{padding:'5px'}}>
        <input
          type="checkbox"
          checked={isChecked3}
          onChange={() => handleOnChange(3)}
          style={{ padding: '5px' }}
        />
      Onboarding Dining
      </div>

      <div style={{padding:'5px'}}>
        <input
          type="checkbox"
          checked={isChecked4}
          onChange={() => handleOnChange(4)}
          style={{ padding: '5px' }}
        />
       Wi-Fi Access
      </div>

      <div style={{padding:'5px'}}>
        <input
          type="checkbox"
          checked={isChecked5}
          onChange={() => handleOnChange(5)}
          style={{ padding: '5px' }}
        />
       Entertainment System
      </div>

      <div style={{padding:'5px'}}>
        <input
          type="checkbox"
          checked={isChecked6}
          onChange={() => handleOnChange(6)}
          style={{ padding: '5px',accentColor: '#0796e8' }}
        />
    Air Conditioning/Climate Change
      </div> */}
    </div>
  );
};

export default Amenities;
