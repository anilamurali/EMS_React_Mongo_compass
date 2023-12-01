import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MDBInput, MDBRow, MDBCol, MDBBtn, MDBTableBody } from 'mdb-react-ui-kit';


function Edit() {
  const history =useNavigate()
  // const [employe,setEmployee]=useState([])

  // States to hold employee details
  const [empid, setId] = useState('')
  const [empname, setName] = useState('')
  const [empage, setAge] = useState('')
  const [empdesignation, setDesignation] = useState('')
  const [empsalary, setSalary] = useState('')


  const { id } = useParams()
  console.log(id);// id of a particular employee
  const fetchData = async (id) => {
    const response = await axios.get('http://localhost:8000/viewEmployees/' + id)
    console.log(response.data.anEmployee);
    setId(response.data.anEmployee.id)
    setName(response.data.anEmployee.name)
    setAge(response.data.anEmployee.age)
    setDesignation(response.data.anEmployee.designation)
    setSalary(response.data.anEmployee.salary)
  }
  useEffect(() => {
    fetchData(id)
  }, [])
console.log(empid,empname,empage,empdesignation,empsalary);
const body= {id:empid,name:empname,age:empage,designation:empdesignation,salary:empsalary}

const handleUpdate = async(e)=>{
  const result=await axios.post('http://localhost:8000/updateEmployees/'+id,body)
  console.log(result);
  alert(result.data.message)
  history('/')
}
  return (
    <>
      <div className="container">
        <h3 className='text-center my-5'>Edit Employee Details</h3>
        {
          <div className="form container form w-50">
            <MDBInput
              onChange={(e) => setId(e.target.value)}
              value={empid}
              label='Employee ID'
              id='form1'
              type='text' />
            <br />
            <MDBInput
              onChange={(e) => setName(e.target.value)}
              value={empname}
              label='Employee Name'
              id='form1'
              type='text' />
            <br />
            <MDBInput
              onChange={(e) =>setAge(e.target.value)}
              value={empage}
              label='Age'
              id='form1'
              type='text'
              placeholder='Age' />
            <br />
            <MDBInput
              onChange={(e) => setDesignation(e.target.value)}
              value={empdesignation}
              label='Designation'
              id='form1'
              type='text' />
            <br />
            <MDBInput
              onChange={(e) => setSalary(e.target.value)}
              value={empsalary}
              label='Salary'
              id='form1'
              type='text'
              placeholder='Salary' />
            <br />
            <div className='w-full mb-5  text-center'>

              <MDBBtn 
              onClick={(e) => handleUpdate(e)} 
              className='font-bold'>Update</MDBBtn>

            </div>

          </div>
        }
      </div>
    </>
  )
}

export default Edit