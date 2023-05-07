import logo from "../pictures/logo.png"

export default function Header () {
    return (
        <header>
            <nav className='nav'>
                <img src={logo} width="80px" />
                <h1 className='title'>Can I Park Here?</h1>
                <ul className="navbar" style={{ marginLeft: 'auto' }}>
                    <li>Home</li>
                    <li>V2.0 (In Beta)</li>
                </ul>
            </nav>
            
        </header>
    )
}