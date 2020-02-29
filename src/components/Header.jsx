import React from "react";
function Header(){
  const headerStyle = {
    color: 'white',
    width: '97%',
    // padding: '9px 0px 5px 0px',
    margin: 'auto',
    backgroundColor: 'rgb(170,170,250)',
    border: '3px solid rgb(50,50,200)',
    borderRadius: '20px',
    fontSize: '35px',
    fontFamily: 'impact',
    textShadow: '3px 3px 2px black',
    textAlign: 'center',
    boxShadow: '2px 2px black'

  };
  const navLinkStyle = {
    fontSize: '15px',
    textAlign: 'center'
  };
  const navBarStyle = {
    margin: "auto",
    marginTop: '20px',
    textAlign: "center"
  };

  return (
    <div>
      <div style={headerStyle}>
        <h1>FuelBrew</h1>
      </div>
      <div style={navBarStyle}>
      <a href="/#/" style={navLinkStyle}>Home</a>
      <a href="/#/newKeg" style={navLinkStyle}> New keg</a>
      <a href="/#/aboutUs" style={navLinkStyle}> About us </a>
      </div>
    </div>
  );
}

export default Header;
