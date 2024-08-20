
export default function Nav () {

  return (
    <nav id="IDNav" className="nav">
      <div className="img-container">
        <img className="logo-tp logo-nav" id="IDLogoTp" src="DomejoStudiosLogoTp.png" alt="Domejo Studios Logo"/>
      </div>
      <ul className="nav-ul">
        <li><a className="link über-uns-li" href="#IDUeberUns">Über Uns</a></li>
        <li><a className="link Projekte-li" href="#IDProjekte">Projekte</a></li>
        <li><a className="link Dienstleistungen-li" href="#IDDienstleistungen">Dienstleistungen</a></li>
        <li><a className="link kontakt-li" href="#IDKontakt">Kontakt</a></li>
      </ul>
    </nav>
  );
}