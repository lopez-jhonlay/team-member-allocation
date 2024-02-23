import React from 'react'
import { useState } from 'react'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import Employees from './Employees'


function App() {

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
      //console.log(event.target.value);
      setTeam(event.target.value);
  }

  const handleEmployeeCardClick = (event) => {
      const transformedEmployees = employees.map(
          (employee) => employee.id === parseInt(event.currentTarget.id) 
          ? (employee.team_name === selectedTeam) ? {...employee, team_name: ''}
          : {...employee, team_name: selectedTeam}
          : employee
          )

      setEmployees(transformedEmployees);
  }

  return (
    <>
      <HeaderComponent selectedTeam={selectedTeam}
                       teamMemberCount = {employees.filter((employee) => employee.team_name === selectedTeam).length} />
      <Employees employees={employees} 
                 selectedTeam={selectedTeam}
                 handleEmployeeCardClick={handleEmployeeCardClick}
                 handleSelectTeam={handleSelectTeam} />
      <FooterComponent />
    </>
  )
}

export default App
