import React from 'react';


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

  const amenities = [
    'Clean Restrooms',
    'Comfortable Sitting arrangement',
    'Onboarding Dining',
    'Wi-Fi Access',
    'Entertainment System',
    'Air Conditioning/Climate Control',
  ];
  const features = [
    'Live food provided to all passengers',
    'Emergency Kit onboard',
    'Fire Extinguishers',
    
  ];


const ManageBoats = () => {
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [amenities1, setAmenities] = useState([]);
  const [features1, setFeatures] = useState([]);
  const [image,setimage]=useState(null);
  const addamenity = (amenity) => {
    setAmenities((prevAmenities) => {
     
      if (!prevAmenities.includes(amenity)) {
        
        return [...prevAmenities, amenity];
      }
      return prevAmenities; 
    });
  };
  

  const addsafety = (feature) => {
    setFeatures((prevAmenities) => {
    
      if (!prevAmenities.includes(feature)) {
       
        return [...prevAmenities, feature];
      }
      return prevAmenities; 
    });
  };
  
  const handleSubmit=async()=>
  {


    const formData={name,capacity,amenities1,features1,image};
console.log(image);
    try{
      const response=await fetch("https://boat-backend-kkvcfs4wk-vertika-s-projects.vercel.app/",
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
      setimage(null);
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
             onChange={(e)=>{
              console.log(e.target.files[0]);
              setimage(e.target.files[0]);
             }}
           
            />
          </div>
        </form>
      </section>
     
      <section>
      <div style={{ padding: '10px' }}>
      <div style={blocks}>Amenities</div>
      <p style={{ color: 'gray' }}>
        Select the amenities available on your boat to enhance passenger comfort and experience
      </p>
      {amenities.map((amenity)=>(
          <div  style={{padding:'5px'}}>
          <input
            type="checkbox"
            checked={
           amenities1.includes(amenity)
            }
            onChange={() => addamenity(amenity)}
            style={{ padding: '5px',
              border:'2px solid #0796e8',
              borderRadius:'4px'
            }}
          />
         {amenity}
        </div>))}
        </div>
       
      </section>
      <section>
      <div style={{padding:'10px'}}>
        <div style={blocks}>Safety Features</div>
        <p style={{ color: 'gray' }}>
        Select the safety features available on your boat to enhance passenger safety
        </p>
        {features.map((feature)=>(
          <div  style={{padding:'5px'}}>
          <input
            type="checkbox"
            checked={
           features1.includes(feature)
            }
            onChange={() =>addsafety(feature)}
            style={{ padding: '5px',
              border:'2px solid #0796e8',
              borderRadius:'4px'
            }}
          />
         {feature}
        </div>))}
        </div>
       
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
