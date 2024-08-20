import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function Header() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <header className="header" id="IDHeader">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent"  // Ensure background color is transparent
            }
          },
          particles: {
            color: {
              value: ['#ff8c0030'],  // Array of colors for particles
            },
            links: {
              color: "#ff8c0030",
            },
            move: {
              enable: true,
              speed: 0.5,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              }
            },
            size: {
              value: 0.6
            },
            number: {
              value: 200
            }
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse"
              },
              resize: true
            }
          }
        }}
      />
      <h1 className="heading1 slideInLeft" id="IDHeading1">
        <span>Ihr Erfolg </span>im <span>Web</span> beginnt <span>hier</span>
      </h1>
      <div className="header-content-container">
        <a className="button call-to-action header-btn slideInRight" href="">
          Kostenlose Beratung sichern!
        </a>
      </div>
    </header>
  );
}
