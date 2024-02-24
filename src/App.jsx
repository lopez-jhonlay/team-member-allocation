import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import Employees from './Employees'
import GroupedTeamMembers from './GroupedTeamMembers'
import NavbarComponent from './NavbarComponent'
import NotFoundComponent from './NotFoundComponent'


function App() {

  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamA");

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [
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

  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees))
  }, [employees])

  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
  }, [selectedTeam])

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
    <Router>
        <NavbarComponent />
        <HeaderComponent selectedTeam={selectedTeam}
                        teamMemberCount = {employees.filter(
                            (employee) => employee.team_name === selectedTeam
                        ).length} />
        <Routes>
            <Route path="/" element={
                <Employees employees={employees}
                selectedTeam={selectedTeam}
                handleEmployeeCardClick={handleEmployeeCardClick}
                handleSelectTeam={handleSelectTeam} />
            }>
            </Route>
            <Route path="/GroupedTeamMembers" element={
                <GroupedTeamMembers employees={employees} selectedTeam={selectedTeam} setTeam={setTeam} />
            }>
            </Route>
            <Route path="*" element={<NotFoundComponent />}></Route>
        </Routes>
        <FooterComponent />
    </Router>
  )
}

export default App
