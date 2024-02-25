import React from 'react'
import TeamMemberCardComponent from './TeamMemberCardComponent'

const TeamMembersComponent = ({employees, handleEmployeeCardClick, selectedTeam}) => {
  return (
    employees.map((employee) => (
        <TeamMemberCardComponent employee={employee} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam} />
    ))
  )
}

export default TeamMembersComponent