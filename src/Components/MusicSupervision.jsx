import Links from "./LinksMusic";
import "../Styles/MusicSupervision.css";

export default function MusicSupervision() {
  const title = "TRAMANDO";
  const description = "Runway music.";
  return (
    <>
      <div className="header">
        <h4>MUSIC SUPERVISION / MUSIC PRODUCTION</h4>
        <h5 className="subtitle-1">
          Creating curated music and sonic identities.
        </h5>
        <h5 className="subtitle-2">Securing music licenses.</h5>
      </div>
      <section className="songs">
        <Links />
      </section>
    </>
  );
}
