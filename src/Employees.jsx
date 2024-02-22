import React, { useState } from 'react'
import femaleProfile from './assets/femaleProfile.jpg'
import maleProfile from './assets/maleProfile.jpg'

const Employees = () => {

    const [selectedTeam, setTeam] = useState("");

    const [employees, setEmployees] = useState([
        {
            id: 1,
            full_name: "Jhon Lay Lopez",
            designation: "ReactJS Developer",
            gender: "Male",
            team_name: "TeamA"
        },
        {
            id: 2,
            full_name: "John Doe",
            designation: "PHP Developer",
            gender: "Male",
            team_name: "TeamA"
        },
        {
            id: 3,
            full_name: "Jane Dee",
            designation: "ReactJS Developer",
            gender: "Female",
            team_name: "TeamB"
        },
        {
            id: 4,
            full_name: "Justin Canard",
            designation: "PHP Developer",
            gender: "Male",
            team_name: "TeamB"
        },
        {
            id: 5,
            full_name: "Melody Sunshine",
            designation: "ReactJS Developer",
            gender: "Female",
            team_name: "TeamC"
        },
        {
            id: 6,
            full_name: "Christian Fox",
            designation: "PHP Developer",
            gender: "Male",
            team_name: "TeamC"
        },
        {
            id: 7,
            full_name: "Sam Smith",
            designation: "ReactJS Developer",
            gender: "Male",
            team_name: "TeamD"
        },
        {
            id: 8,
            full_name: "Christian Alexander",
            designation: "PHP Developer",
            gender: "Male",
            team_name: "TeamD"
        }

    ]);

    const handleSelectTeam = (event) => {
        console.log(event.target.value);
        setTeam(event.target.value);
    }

    return (
    <main className="container">
        <div className="row justify-content-center mt-3 mb-3">
            <div className="col-6">
                <select className="form-select form-select-lg"
                        value={selectedTeam}
                        onChange={handleSelectTeam}>
                    <option value="" disabled>Select a Team</option>
                    <option value="TeamA">Team A</option>
                    <option value="TeamB">Team B</option>
                    <option value="TeamC">Team C</option>
                    <option value="TeamD">Team D</option>
                </select>
            </div>
        </div>
        <div className="row justify-content-center mt-3 mb-3">
            <div className="col-8">
                <div className="card-collection">
                    {employees.map((employee) => (
                        <div id={employee.id} className="card m-2 card-pointer">
                            {
                                (employee.gender === 'Male') ? <img src={maleProfile}
                                    alt="profile"
                                    className="card-img-top" /> : 
                                <img src={femaleProfile}
                                    alt="profile"
                                    className="card-img-top" />
                            }
                            <div className="card-body">
                                <h5 className="card-title">Full Name: {employee.full_name}</h5>
                                <p className="card-text">Designation: {employee.designation}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </main>
  )
}

export default Employees