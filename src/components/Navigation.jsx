const Navigation = () => {
    return (
    <nav className="container">
        {/* uske andr logo dala */}
        <div className="logo">
            <img src="/images/brand_logo.png" alt="logo" />
        </div>
        {/* right mai 4 options dale */}
        <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>
        {/* fir login ka button banaya */}
        <button>Login</button>
    </nav>
    ) 
}


export default Navigation;