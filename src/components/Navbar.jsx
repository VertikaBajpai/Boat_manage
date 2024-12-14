import React from 'react'


const heading={
    fontSize:'25px',
    color:'#0796e8',
    padding:'5px'
}
const line={
    borderBottom:'2px dotted gray'
}
const Navbar = () => {
  return (
    <>
        <header> <nav style={line}><h1 style={heading}>GTM</h1>
        </nav></header>
   
    </>
  )
}

export default Navbar
