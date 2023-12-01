import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  

function Header() {
  return (
    <>
    <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
            <img
              src='https://th.bing.com/th/id/R.81ce8e5aedb019766d2e230d45fd3051?rik=BkuQ2YBXjIXZgA&riu=http%3a%2f%2fchemtechsolutions.com%2fwp-content%2fuploads%2f2019%2f10%2fEmployee-Training-01-1280x880.png&ehk=3BMz6r3Q34RdS9gPunQy4HVETZVD1C01PznvnYk9EyA%3d&risl=&pid=ImgRaw&r=0'
              className='h-10'
              alt=''
              loading='lazy'
            />
            Employee Management System
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Header