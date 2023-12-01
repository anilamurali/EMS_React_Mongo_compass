import React, { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Admin() {
  // state for holding employee details
  const [allEmployee, setAllEmployee] = useState([])

  // data fetchibg function
  const fetchData = async () => {
    const response = await axios.get('http://localhost:8000/getEmployees')
    // console.log(data);
    setAllEmployee(response.data.employe)
  }
  console.log(allEmployee);
  useEffect(() => {
    fetchData()
  }, [])

  // function for detete particular employee

  const handleDelete = async (id) => {
    // API Call for delete an employee
   const response= await axios.delete('http://localhost:8000/deleteEmployees/'+id)
   console.log(response.data.message);
   alert(response.data.message)
   fetchData()

  }
 
  return (
    <>
      <div className="container">
        <h3 className='text-center mt-3'>Employee Management System</h3>
        <p className='mx-5 my-3 text-justify'>
          Employee management that uses coaching to motivate and build trust with workers can unlock enormous human potential. Yet,
          communication tactics alone may fall short in the face of multi-generational workforces, rising numbers of freelance workers and complex
          regulations. Technology, whether it’s workforce management
          software or a human capital management solution, can often help business leaders maintain productivity more effectively in rapidly changing environments.
        </p>
        <div className='w-full pr-14 flex justify-end'>
          <Link to={'add'}>
            <MDBBtn className='font-bold'><i class="fa-solid fa-lg fa-user-plus"></i>  Add</MDBBtn>
          </Link>
        </div>
        <MDBTable striped className='mt-5'>
          <MDBTableHead>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Name</th>
              <th scope='col'>Age</th>
              <th scope='col'>Dasignation</th>
              <th scope='col'>Salary</th>
              <th scope='col'>Action</th>

            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {
              allEmployee.map(item => (
                <tr>
                  <th scope='row'>{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.designation}</td>
                  <td>{item.salary}</td>
                  <td>
                    <div>

                      <Link to={'/view/'+item.id}>
                      <MDBBtn   className='font-bold me-5'><i class="fa-solid fa-lg fa-eye"></i>  </MDBBtn>
                      </Link>
<Link to={'/edit/'+item.id}>
<MDBBtn  className='font-bold me-5'><i class="fa-solid fa-lg fa-pen"></i>  </MDBBtn>
</Link>
                      <MDBBtn onClick={() => handleDelete(item.id)} className='font-bold'><i class="fa-solid fa-lg fa-trash"></i> </MDBBtn>
                    </div>
                  </td>

                </tr>
              ))


            }


          </MDBTableBody>
        </MDBTable>


      </div>
    </>
  )
}

export default Admin