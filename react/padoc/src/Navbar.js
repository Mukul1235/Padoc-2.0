const Navbar = () => {
    return (
        {
            <div className="App">
                <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
                <h1 className="web-name"><img src="Images/Logo_padoc.png" className="logo-class" />Padoc</h1>
            
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="#" style="font-weight:900;">lorem</a>
                    </li>
                
                    <li className="nav-item">
                            <a className="nav-link" href="#">About us</a>
                    </li>
                
                    <li className="nav-item log-in">
                        <a className="nav-link sign-option" href="#">Log In</a>
                    </li>
                
                    <li className="nav-item sign-in">
                        <a className="nav-link sign-option" href="#">Sign-In</a>
                    </li>
                </ul>
          </div>
        </div>
    </nav>
    
        }
    );
}
 
export default Navbar;