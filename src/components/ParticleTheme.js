// tsParticles library component
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

// color
import Colors from '../const/Colors.json';

export default function ParticleTheme() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="footerParticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: false },
                background: {
                    color: {
                        value: "#fffff",
                    },
                },
                fpsLimit: 60,
                particles: {
                    color: {
                        value: Colors['accent'],
                    },
                    links: {
                        color: Colors['accent'],
                        distance: 180,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                        triangles: {
                            enable: true,
                            color: Colors['accent'],
                            opacity: 0.01
                        }
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 600,
                        },
                        value: 40,
                    },
                    opacity: {
                        value: 0.4,
                    },
                    shape: {
                        type: "triangle",
                    },
                    size: {
                        value: { min: 2, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};