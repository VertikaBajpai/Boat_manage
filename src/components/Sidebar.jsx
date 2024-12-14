import React from 'react'
import '../App.css';


const BarData=[
    {
        title:'Dashboard',
        link:'/dashboard'
    },
    {
        title:'Manage Bookings',
        link:'/manage-bookings'
    },
    {
        title:'Manage Boats',
        link:'/manage-boats'
    },
    {
        title:'Manage meals',
        link:'/manage-meals'
    },
    {
        title:'Manage pricing',
        link:'/manage-pricing'
    },

]


const Sidebar = () => {
  return (
    <>
   
    <div className='Sidebar'>
        <ul className='SidebarList'>
   {BarData.map((val,key)=>{
        return(
            <li className='row' 
            id={window.location.pathname===val.link?"active":""}
            onClick={()=>{
           window.location.pathname=val.link;
            }}><div>{val.title}</div></li>
        );
    })}
    </ul>
    </div>
    </>
  )
}

export default Sidebar
