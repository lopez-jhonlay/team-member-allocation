import TeamMembersComponent from './TeamMembersComponent'
import TeamsComponent from './TeamsComponent'


const Employees = ({employees, selectedTeam, handleSelectTeam, handleEmployeeCardClick}) => {

    return (
    <main className="container">
        <div className="row justify-content-center mt-3 mb-3">
            <div className="col-6">
                <TeamsComponent selectedTeam={selectedTeam} handleSelectTeam={handleSelectTeam} />
            </div>
        </div>
        <hr />
        <div className="row justify-content-center mt-3 mb-3">
            <div className="col-8">
                <div className="card-collection">  
                    <TeamMembersComponent employees={employees}
                        handleEmployeeCardClick={handleEmployeeCardClick}
                        selectedTeam={selectedTeam} />
                </div>
            </div>
        </div>
    </main>
  )
}

export default Employees