import React from 'react';

function Results(props) {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope='col'>Name</th>
                                <th scope='col'>Phone</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>DOB</th>
                            </tr>
                        </thead>
                        <tbody className="table">
                            {props.results.map(employee => {
                                <tr className="row">
                                    <td>{employee.name.first} {employee.name.last}</td>
                                    <td>{employee.phone}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.dob.date}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default Results;