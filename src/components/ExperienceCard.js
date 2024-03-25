import { Image, Stack, Heading, Text, Card, CardBody, Badge } from '@chakra-ui/react'

import Colors from '../const/Colors.json';

export default function ExperienceCard() {
    return (
        <Card width='100%' bg={`rgba(13, 13, 13, 0.8)`}
            transition='0.3s'
            _hover={{ bg: 'rgba(255, 255, 255, 0.075)', transform: 'scale(1.01, 1.01)' }}
        >
            <CardBody width='100%'>
                <Stack direction='row' opacity='1'>
                    <Stack justifyContent='space-around' alignItems='center' minW='200px' minH='200px'>
                        <Image
                            minH='200px'
                            maxH='200px'
                            minW='full'
                            objectFit='cover'
                            src='https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/contentbuilder/GDG-Bevy-ChapterThumbnail.png'
                            alt='image'
                            borderRadius='lg'
                        />
                    </Stack>
                    <Stack ml='2rem' spacing='3' textAlign='left'>
                        <Heading as='h4' size='md' color={Colors['accent']}>Technical Co-Lead, Google Developer Student Clubs - Queen's University</Heading>
                        <Stack direction='row'>
                            <Badge colorScheme='blue'>REACT</Badge>
                            <Badge colorScheme='gray'>EXPRESS.JS</Badge>
                            <Badge colorScheme='purple'>NODE.JS</Badge>
                        </Stack>
                        <Text>
                            - Designed and developed the main website for GDSC Queen's <br />
                            - Hosted technical workshops <br />
                            - Managed a technical team alongside technical lead
                        </Text>
                    </Stack>
                </Stack>
            </CardBody>
        </Card>
    )
}