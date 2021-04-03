import React from 'react'
import * as ReactBootStrap from "react-bootstrap"

function Table(props) {



    const renderEmployee = (employees, index) => {
    let name = ""
    if (employees.name?.first && employees.name?.last){
      name = employees.name.first+employees.name.last
    } else if (employees.name?.first){
      
      name = employees.name.first
    }
    else if (employees.name?.last){
      
      name = employees.name.last
    }
     
      // console.log(employees, index)
        return(
            <tr key={index}>
                <td><img src={employees.picture?.thumbnail}></img></td>
                <td>{name}</td>
          
                <td>{employees.email}</td>
            </tr>
        )
    }

  return (
    <div>
     <ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
        {/* first name, last name, phone, DOB, email */}
      <th>Position</th>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    {props.users.map(renderEmployee)}
  </tbody>
</ReactBootStrap.Table>
    </div>
  );
}

export default Table;