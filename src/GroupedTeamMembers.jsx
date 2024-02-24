import React from 'react'
import { useState } from 'react'

const GroupedTeamMembers = ({employees, selectedTeam, setTeam}) => {
  return (
    <main className="container">
        <div className="row justify-content-center mt-3 mb-4">
            <div className="col-6">
                <h1>Grouped Team Members</h1>
            </div>
        </div>
    </main>
  )
}

export default GroupedTeamMembers