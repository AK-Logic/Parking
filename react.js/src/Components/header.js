import logo from "../pictures/logo.png"

export default function Header () {
    return (
        <header>
            <nav className='nav'>
                <img src={logo} width="80px" />
                <h1 className='title'>Can I park here?</h1>
                <ul className="navbar">
                    <li>Home</li>
                </ul>
            </nav>
            
        </header>
    )
}