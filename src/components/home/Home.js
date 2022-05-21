import React from "react";
import Particles from "react-tsparticles";
import { useState } from "react";

const Home = () => {
  const [isPending, setIsPending] = useState(true);

  const spinner = (() => {
    setTimeout(() => {
      setIsPending(false);
    }, 1500);
  })();

  const particlesInit = (main) => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      {isPending && (
        <div className="spinnerContainer">
          <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      {!isPending && (
        <div className="home">
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            className="tsparticles"
            options={{
              background: {
                color: {
                  value: "#1f2224",
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: false,
                    mode: "push",
                  },
                  onHover: {
                    enable: false,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#f5b921",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.3,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 0.2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 1500,
                  },
                  value: 60,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 3,
                },
              },
              detectRetina: true,
            }}
          />
        </div>
      )}
    </>
  );
};

export default Home;
