import React from 'react'

const HeaderComponent = ({selectedTeam, teamMemberCount}) => {
  return (
    <header className="container">
        <h1 className="text-center">Team Member Allocation</h1>
        <h3 className="text-center">{selectedTeam} has {teamMemberCount} member/s</h3>
    </header>
  )
}

export default HeaderComponent