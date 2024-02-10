const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid justify-content-between">
        <a className="navbar-brand" href="#"><img src="https://cdn.iconscout.com/icon/free/png-512/swiggy-1613371-1369418.png" style={{width:"50px",height:"50px"}}/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="mynavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
        <form className="d-flex ">
            <input className="form-control me-2" type="text" placeholder="Search" />
            <button className="btn btn-primary" type="button">Search</button>
          </form>
      </div>
    </nav>
  )
}

export default Header