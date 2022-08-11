import BGVideo from "./bg-video";
import logo from "../media/images/vedettes-logo.png"

export default function HomePage()
{
  return (
    <div className="home">
      <BGVideo/>
        {/* <div className="content">
          <img className="logo" src={logo} alt="logo"/>
          <h1>BIENVENUE À BORD.</h1>
          <h3>DES NAVETTES MARITIMES 7 JOURS SUR 7.</h3>
          <div className="buttons">
            <div className="cta">Prochaines navettes</div>
            <div className="about-button">Qui sommes-nous ?</div>
          </div>
        </div> */}
    </div>
  );
}


