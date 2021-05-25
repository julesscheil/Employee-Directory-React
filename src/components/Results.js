import React from 'react';

function Results(props) { console.log(props)
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>DOB</th>
                            </tr>
                        </thead>
                        <tbody className="table">
                            {props.employees.length && props.employees.map((employee) => {
                               return ( <tr className="row">
                                    <td>{employee.name.first} {employee.name.last}</td>
                                    <td>{employee.phone}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.dob.date}</td>
                                </tr>
                            );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default Results;