import React from 'react';
import { Trash } from 'react-bootstrap-icons';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Last</th>
                <th scope="col">Department</th>
                <th scope="col">Hire Date</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => { 

    const rows = props.tableEmployees.map((employee, index) => {
        return (
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{employee.firstname}</td>
                <td>{employee.lastname}</td>
                <td>{employee.department}</td>
                <td>{employee.hiredate}</td>
                <td><button onClick={props.tableOnDelete} value={employee.id} className="btn btn-primary">  Delete <Trash /> </button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}


const Data = (props) => {
   
    return (
         <div>
             <table className="table table-striped">
                <TableHeader />
                <TableBody 
                    tableEmployees={props.employees}
                    tableOnDelete={props.onDelete} 
                />
            </table>
         </div>
     );
 };

 export default Data;