import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate();
  return (
    <div>
      <h3>Add Your Own Boat Data</h3>
 <button onClick={
  ()=>{
    navigate('/manage-boats');
  }
 }>
Go to manage boats
 </button>
    </div>
  )
}

export default Home
