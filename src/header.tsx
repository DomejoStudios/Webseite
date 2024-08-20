import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine, Container } from 'tsparticles-engine';

export default function Header() {
  // Initialization function for particles
  const particlesInit = async (main: Engine): Promise<void> => {
    await loadFull(main);
  };

  // Updated particlesLoaded function to return a Promise<void>
  const particlesLoaded = async (container: Container | undefined): Promise<void> => {
    // You can still log or handle the container as needed
    console.log(container);
    // Return a resolved Promise
    return Promise.resolve();
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
