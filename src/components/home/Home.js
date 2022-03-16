import React from "react";
import Particles from "react-tsparticles";

const Home = () => {
    const particlesInit = (main) => {
        console.log(main);
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };

      const particlesLoaded = (container) => {
        console.log(container);
      };

    return ( 
        <div className="home">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                className="tsparticles"
                options={{
                    background: {
                    color: {
                        value: "#08373b",
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
                        area: 2000,
                        },
                        value: 30,
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
     );
}
 
export default Home;