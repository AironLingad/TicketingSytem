function Header() {
  return (
    <div className="header-title-container">
      <div className='left-panel'>
        <img src="../images/ITS-LOGO-NOBG.png" alt="Logo" />
        <span className="it-squarehub">IT SQUAREHUB</span>
        <span className="header-text">| Ticketing System</span>
      </div>
 
      <div className='right-panel'>
        <u><a href="#">Admin</a></u>
      </div>
    </div>
  );
}
export default Header;