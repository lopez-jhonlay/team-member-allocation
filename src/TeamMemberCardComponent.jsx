import React from 'react'
import femaleProfile from './assets/femaleProfile.jpg'
import maleProfile from './assets/maleProfile.jpg'

const TeamMemberCardComponent = ({employee, handleEmployeeCardClick, selectedTeam}) => {
  return (
    <div key={employee.id} id={employee.id} className={(employee.team_name === selectedTeam ?
        "card m-2 card-pointer standout"  : "card m-2 card-pointer")}
            onClick={handleEmployeeCardClick}>
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
  )
}

export default TeamMemberCardComponent