import femaleProfile from './assets/femaleProfile.jpg'
import maleProfile from './assets/maleProfile.jpg'

const Employees = ({employees, selectedTeam, handleSelectTeam, handleEmployeeCardClick}) => {

    return (
    <main className="container">
        <div className="row justify-content-center mt-3 mb-3">
            <div className="col-6">
                <select className="form-select form-select-lg"
                        value={selectedTeam}
                        onChange={handleSelectTeam}>
                    <option value="TeamA">Team A</option>
                    <option value="TeamB">Team B</option>
                    <option value="TeamC">Team C</option>
                    <option value="TeamD">Team D</option>
                </select>
            </div>
        </div>
        <hr />
        <div className="row justify-content-center mt-3 mb-3">
            <div className="col-8">
                <div className="card-collection">
                    {employees.map((employee) => (
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
                    ))}
                </div>
            </div>
        </div>
    </main>
  )
}

export default Employees