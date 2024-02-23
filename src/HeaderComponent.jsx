import React from 'react'

const HeaderComponent = ({selectedTeam, teamMemberCount}) => {
  return (
    <header className="container">
        <h1>Team Member Allocation</h1>
        <h3>{selectedTeam} has {teamMemberCount} member/s</h3>
    </header>
  )
}

export default HeaderComponent