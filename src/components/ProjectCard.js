// Experience card
import { Image, Stack, Heading, Text, Card, CardBody, Badge } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons';

// color
import Colors from '../const/Colors.json';

export default function ProjectCard() {
    return (
        <Card width='100%' bg={`rgba(13, 13, 13, 0.8)`}
            transition='0.3s'
            _hover={{ bg: 'rgba(255, 255, 255, 0.075)', transform: 'translateY(-5px)' }}
        >
            <CardBody width='100%'>
                <Stack direction='column' opacity='1'>
                    {/* Title & Description */}
                    <Stack mb='1.5rem' spacing='3' textAlign='center'>
                        <Heading as='h4' size='md' color={Colors['accent']}>Black Magic II: Phantom's Causatum</Heading>
                        <Text fontWeight='600' fontSize='15px' mt='-5px'>2021</Text>
                        <Stack direction='column'>
                            <Text fontSize={{ base: '12px', "2xl": '15px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                        </Stack>
                    </Stack>
                    {/* Thumbnail */}
                    <Stack justifyContent='space-around' alignItems='center' minW='200px' minH='200px' display={{ base: 'none', md: 'inline-block' }}>
                        <Image
                            minH='200px'
                            maxH='200px'
                            minW='full'
                            objectFit='cover'
                            src='https://cdn.discordapp.com/attachments/1134146495717851246/1224944220373127261/test.gif?ex=661f5534&is=660ce034&hm=9a291ee8134ac853df0e5e466322ccff6dcc08ec3998a508e6d6817621d9dace&'
                            alt='image'
                            borderRadius='lg'
                        />
                    </Stack>
                    {/* Badges */}
                    <Stack direction='row' mt='5px'>
                        <Badge colorScheme='yellow'>LUA</Badge>
                        <Badge colorScheme='yellow'>BLENDER</Badge>
                    </Stack>
                </Stack>
            </CardBody>
        </Card>
    )
}