import React, { useState, useEffect } from 'react';
import Data from './Data';
import Form from './Form';
import './App.css';

const EMPLOYEES_RECORDS = localStorage.getItem('employeesdata')
  ? JSON.parse(localStorage.getItem('employeesdata'))
  : [];

const App = () => {
  const [ employees, setEmployees ] = useState(EMPLOYEES_RECORDS);

  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ department, setDepartment ] = useState('');
  const [ hireDate, setHireDate ] = useState('');

  useEffect(() => {
    localStorage.setItem('employeesdata', JSON.stringify(employees))
  }, [employees]);

  const handleFirstNameInputChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameInputChange = (event) => {
    setLastName(event.target.value);
  };

  const handleDepartmentInputChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleHireDateInputChange = (event) => {
    setHireDate(event.target.value);
  };

  //Add an employee record
  const addEmployee = (event) => {
    event.preventDefault();
    
    const employeeObject = {
      id: employees.length + 1,
      firstname: firstName,
      lastname: lastName,
      department: department,
      hiredate: hireDate
    };

    setEmployees(employees.concat(employeeObject));
    setFirstName('');
    setLastName('');
    setDepartment('');
    setHireDate('');

  };

  //Delete an employee record
  const deleteEmployee = (event) => {
    const id = parseInt(event.target.value, 10)
    const identity = employees.find(employee => employee.id === id);

    if( identity !== undefined) {
        const response = window.confirm(`Delete employee ${identity.firstname} ${identity.lastname} record ?`);
        if(response){
          const result = employees.filter(employee => employee.id !== id);
          setEmployees(result);
        }
    }
  };

  return (
      <div className="container my-5">
          <h1 className="text-center my-3">Employee Records</h1>
          <p className="text-center">Add an employee data to the employee records table.</p>
          <Data 
            employees={employees}
            onDelete={deleteEmployee} 
          />
          <h3 className="mt-5 mb-3">Add New Employee</h3>
          <Form 
            firstName={firstName}
            lastName={lastName}
            department={department}
            hireDate={hireDate}
            onFirstNameInputChange={handleFirstNameInputChange}
            onLastNameInputChange={handleLastNameInputChange}
            onDepartmentInputChange={handleDepartmentInputChange}
            onHireDateInputChange={handleHireDateInputChange}
            onAddEmployee={addEmployee} 
          />
      </div>
  );
}

export default App;
