import React from 'react';

const Form = (props) => {
   
    return (

        <div className="row">
            <div className="col-sm-6">
            <form onSubmit={props.onAddEmployee}>
            <div className="mb-3">
                <label htmlFor="firstname" className="form-label">First Name</label>
                <input
                    className="form-control" 
                    type="text" 
                    name="firstname" 
                    id="firstname"
                    value={props.firstName} 
                    onChange={props.onFirstNameInputChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="lastname" className="form-label">Last Name</label>
                <input 
                    className="form-control" 
                    type="text" 
                    name="lastname" 
                    id="lastname"
                    value={props.lastName}
                    onChange={props.onLastNameInputChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="department" className="form-label">Department</label>
                <input 
                    className="form-control" 
                    type="text" 
                    name="department" 
                    id="department"
                    value={props.department}
                    onChange={props.onDepartmentInputChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="hiredate" className="form-label">Hire Date</label>
                <input 
                    className="form-control" 
                    type="date" 
                    name="hiredate" 
                    id="hiredate"
                    value={props.hireDate}
                    onChange={props.onHireDateInputChange} />
            </div>
                <button type="submit" className="btn btn-primary">
                    Add Record
                </button>
            </form>
            </div>
        </div>

     );
 };

 export default Form;