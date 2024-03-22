// Footer design with particles
import { Box } from '@chakra-ui/react';
import ParticleTheme from './ParticleTheme';

export default function Footer() {
    return (
        <>
            <Box
                position='fixed' left='0' bottom='0'
                w='100%'
                h='35%'
                id='footerParticles'
            />
            <ParticleTheme />
        </>
    )
}