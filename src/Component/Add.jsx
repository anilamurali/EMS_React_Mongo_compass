import React, { useState } from 'react'
import { MDBInput, MDBRow, MDBCol, MDBBtn, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function Add() {
  const location= useNavigate()// used to navigate one component to another
  // Create state for holding value from input feild
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [designation, setDesignation] = useState('')
  const [salary, setSalary] = useState('')

  // function for annding the employee
  const handleAdd = async (e) => {
    console.log(id, name, age, designation, salary);
    const body = { id, name, age, designation, salary }
    // API call to add employee
    await axios.post('http://localhost:8000/addEmployees', body).then((response) => {
      console.log(response);
      alert(response.data.message)
      location('/')//redirect to admin page
    }).catch((error) => {
      alert("Enter unique Id")
    })
  }
  return (
    <>
      <div className="container">
        <h3 className='text-center my-5'>Add Employee Details</h3>
        <div className="form container form w-50">
          <MDBInput onChange={(e) => setId(e.target.value)} label='Employee ID' id='form1' type='text' />
          <br />
          <MDBInput onChange={(e) => setName(e.target.value)} label='Employee Name' id='form1' type='text' />
          <br />
          <MDBInput onChange={(e) => setAge(e.target.value)} label='Age' id='form1' type='text' placeholder='Age' />
          <br />
          <MDBInput onChange={(e) => setDesignation(e.target.value)} label='Designation' id='form1' type='text' />
          <br />
          <MDBInput onChange={(e) => setSalary(e.target.value)} label='Salary' id='form1' type='text' placeholder='Salary' />
          <br />
          <div className='w-full mb-5  text-center'>

            <MDBBtn onClick={(e) => handleAdd(e)} className='font-bold'><i class="fa-solid fa-lg fa-user-plus"></i>  Add</MDBBtn>

          </div>

        </div>
      </div>
    </>
  )
}

export default Add