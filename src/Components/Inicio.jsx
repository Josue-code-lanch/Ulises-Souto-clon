import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SonoridadPlastica from "../Components/SonoridadPlastica";
import MusicSupervision from "../Components/MusicSupervision";
import Contact from "../Components/Contact";

export default function Inicio() {
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    const unlisten = props.history.listen((location, action) => {
      if (action === location) {
        setShowTitle(true);
      }
    });
    return unlisten;
  }, [props.history]);

  return (
    <>
      {showTitle && <h1 className="title">Ulises Souto</h1>}

      <Routes>
        <Route path="/sonoridad-plastica" element={<SonoridadPlastica />} />
        <Route path="/music-supervision" element={<MusicSupervision />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
