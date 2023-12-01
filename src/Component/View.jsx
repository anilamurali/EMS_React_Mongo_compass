import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

function View() {
  // view a particular employee
  const {id} = useParams()
  console.log(id);

  // State for holding the details of an employee
  const [employe,setEmployee]=useState([])
  //  API call for  fetch the details of an employee

  const viewAnEmployee = async (id) => {

    const response = await axios.get('http://localhost:8000/viewEmployees/' + id)
    console.log(response.data.anEmployee);
    setEmployee(response.data.anEmployee)
  }
  console.log(employe);

  useEffect(() => {
    viewAnEmployee(id)
  },[])
  return (
    <>
    <div className="container">
    {
      <MDBCard>
      <MDBCardBody>
        <div className="text-center" style={{width:'100%'}} >
      <MDBCardImage className='text-center' style={{width:'250px'}} position='top' alt='...' src='https://mdbootstrap.com/img/new/standard/city/062.webp' />

        </div>
        <MDBCardTitle className='text-center'>{employe.name}</MDBCardTitle>
        
      </MDBCardBody>
      <MDBListGroup flush>
      <MDBListGroupItem className='text-center'>{employe.age}</MDBListGroupItem>
        <MDBListGroupItem className='text-center'>{employe.designation}</MDBListGroupItem>
        <MDBListGroupItem className='text-center'>{employe.salary}</MDBListGroupItem>
        
      </MDBListGroup>
      <MDBCardBody>
        <MDBCardLink href='#'>Card link</MDBCardLink>
        <MDBCardLink href='#'>Card link</MDBCardLink>
      </MDBCardBody>
    </MDBCard>

    }
    
    </div>
    </>
  )
}

export default View