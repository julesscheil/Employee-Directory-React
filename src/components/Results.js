import React from 'react';

function Results(props) { 
    function formatDate(date) {
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate = [month, day, year].join("-");
        return formattedDate;
      }
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">DOB</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.employees.length && props.employees.map((employee) => {
                               return ( <tr>
                                    <td>{employee.name.first} {employee.name.last}</td>
                                    <td>{employee.phone}</td>
                                    <td>{employee.email}</td>
                                    <td>{formatDate(employee.dob.date)}</td>
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