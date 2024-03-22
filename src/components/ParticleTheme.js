import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

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
                fpsLimit: 120,
                particles: {
                    color: {
                        value: Colors['yellow'],
                    },
                    links: {
                        color: Colors['yellow'],
                        distance: 200,
                        enable: true,
                        opacity: 0.4,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 1.5,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 600,
                        },
                        value: 45,
                    },
                    opacity: {
                        value: 0.8,
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