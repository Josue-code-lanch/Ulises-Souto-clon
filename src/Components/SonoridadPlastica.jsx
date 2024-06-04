import LogoInstagram from "./Instagram";
import DescriptionImage from "./DescriptionImage";
import InfoSonoridad from "./InfoSonoridad";
import Banner from "./Banner";
import { motion } from "framer-motion";
import "../Styles/SonoridadPlastica.css";

export default function SonoridadPlastica() {
  return (
    <div className="contenido">
      <section className="section-image">
        <motion.div
          className="logo move-right"
          initial={{ x: "-10vw", rotate: -10 }}
          animate={{ x: 0, rotate: 0 }}
          exit={{ x: "1vw", rotate: 80 }}
          transition={{ type: "spring", stiffness: 100, damping: 9, bounce: 1 }}
        >
          <motion.img
            className="logo"
            src="sp.png"
            alt="Logo Sonoridad Plastica"
            whileHover={{ rotate: 3 }}
            transition={{ type: "spring", stiffness: 600 }}
          />
        </motion.div>
      </section>
      <Banner />
      <section className="section-info">
        <DescriptionImage />
        <div className="info">
          <div>
            <InfoSonoridad
              text={
                "These encounters consist of confronting a group of live instrumentalists with a carefully curated selection of visual artworks, which are read and interpreted as if they were sheet music."
              }
            />
            <InfoSonoridad
              text={
                "Each engagement builds upon the intriguing dialogue introduced by Sonoridad Plástica. By aligning our activities with the exhibitions at hand, we delve into the thought-provoking concepts introduced by the artworks, crafting an evocative musical narrative that resonates with the visual expressions."
              }
            />
          </div>
          <div className="info-p">
            <InfoSonoridad
              text={
                "This collaborative endeavor extends to the musicians we summon, who possess an unparalleled ability to breathe life into the artworks. "
              }
            />
            <InfoSonoridad
              text={
                "Since 2021, Sonoridad Plástica has etched its mark as an initiative that transcends traditional boundaries. It captivates an audience that often finds itself distant from such exhibitions, catalyzing crossovers that enrich our cultural perceptions. Sonoridad Plástica emerges as a pioneering force, unlocking new dimensions of appreciation and understanding."
              }
            />
          </div>
        </div>
      </section>
      <div className="instagram">
        <LogoInstagram />
        <a
          href="https://www.instagram.com/sonoridadplastica/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @sonoridadplastica
        </a>
      </div>
    </div>
  );
}
