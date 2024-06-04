import { useState } from "react";
import "../Styles/Title.css";

export default function Title() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (event) => {
    if (hovered) {
      const h1 = event.target;
      const rect = h1.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const rotateX = (event.clientY - centerY) / 10;
      const rotateY = -(event.clientX - centerX) / 70;

      setRotation({
        x: rotateX,
        y: rotateY,
      });
    }
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const h1Style = {
    transform: `perspective(500px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
    transition: "transform 0.1s",
  };

  return (
    <div className="title">
      <h1
        style={h1Style}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Ulises Souto
      </h1>
    </div>
  );
}
