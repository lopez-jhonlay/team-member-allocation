import React from 'react'

const FooterComponent = () => {

  let year = new Date();

  return (
    <footer className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-6">
          <h5 className="text-center">Team Member Allocation App - {year.getFullYear()}</h5>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent