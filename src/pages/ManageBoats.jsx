import React from 'react';

import Amenities from '../components/Amenities';
import SafetyFeatures from '../components/SafetyFeatures';
import Meals from '../components/Meals';
import { useState } from 'react';
const blocks={
    display: 'block', 
    fontSize: '20px', 
    
    marginBottom: '5px'
}
const boxes={
    width:'400px', 
    padding: '10px', 
    fontSize: '18px', 
    borderRadius: '5px', 
    border: '1px solid #ccc',
}
const boxes2={
    width:'400px', 
    padding: '10px', 
    fontSize: '18px', 
    borderRadius: '5px', 
    border: '1px solid #ccc',
    height:'200px',
    
}

const ManageBoats = () => {
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [features, setFeatures] = useState([]);
  const [photos, setPhotos] = useState("");
  const addamenity = (amenity) => {
    setAmenities((prevAmenities) => {
      if (!prevAmenities.includes(amenity)) {
       prevAmenities.push(amenity)
      }
      return prevAmenities;
    });
  };


  const addsafety = (feature) => {
    setFeatures((prevFeatures) => {
      if (!prevFeatures.includes(feature)) {
        prevFeatures.push(feature)
      }
      return prevFeatures;
    });
  };
  const handleSubmit=async()=>
  {


    const formData={name,capacity,amenities,features,photos};
console.log(amenities);
    try{
      const response=await fetch("http://localhost:5000/api/boats",
        {
          method:'POST',
          headers:{  "Content-Type": "application/json", },
          body:JSON.stringify(formData

          )
        }
      )

      if (response.ok) {
        setName("");
        setCapacity("");
        setAmenities([]);
        setPhotos('');
        setFeatures([]);
        alert("Boat data added successfully!");
       
      
    }
    else{
    
      alert('Error in adding boat data',response);
    }
  }
 catch(e){
  
console.log(e);
  alert(`Failed to connect to the server:${e}`);
  

  }}
  return (
    <div>

      <h3 styles={{fontSize:'45px'}}>Add Boat</h3>
      <section>
        <form>
            <div style={{marginBottom:'20px',
                padding:'10px'
            }}>
            <label style={blocks}>
                Name
            </label>
            <input type='text'
            required style={boxes}
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder='Enter the name of boat'/>
            </div>
            <div style={{marginBottom:'20px',
                padding:'10px'
            }}>
            <label style={blocks}>
               Capacity
            </label>
            <input type='number'
            required style={boxes}
            value={capacity}
            onChange={(e)=>setCapacity(e.target.value)}
            placeholder='Enter number of seats on the boat'/>
            </div>
            
            <div
            style={{
              marginBottom: '20px',
              padding: '10px',
            }}
          >
            <label style={blocks}>Photo</label>
            <p>Upload photos of your boat</p>
            <input
              type="file"
              accept="image/*"  
              required
              style={boxes2}
              onChange={(e)=>setPhotos(e.target.value)}
           
            />
          </div>
        </form>
      </section>
     
      <section>
      <Amenities handleChange={addamenity} selected={amenities} />
       
      </section>
      <section>
      <SafetyFeatures handleChange={addsafety}  selected={features}/>
       
      </section>
      <section>
        <Meals/>
      </section>
      <div style={{padding:'10px'}}>
<button 
onClick={handleSubmit}
style={{
  backgroundColor:'#0796e8',
  width:'200px',
  height:'50px',
  color:'white',
  borderRadius: '15px'
}}
>Save</button>
</div>
    </div>
  )
}

export default ManageBoats
