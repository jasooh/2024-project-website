import { Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Card, CardBody, CardFooter } from '@chakra-ui/react'

import Colors from '../const/Colors.json';

export default function ExperienceCard() {
    return (
        <Card width='100%' bg={`rgba(13, 13, 13, 0.4)`}>
            <CardBody width='100%'>
                <Stack direction='row' opacity='1'>
                    <Stack justifyContent='space-around' alignItems='center' minW='200px' minH='200px'>
                        <Image
                            minH='200px'
                            maxH='200px'
                            minW='full'
                            objectFit='cover'
                            src='https://media.licdn.com/dms/image/D5603AQFA39Ep6OyU6Q/profile-displayphoto-shrink_800_800/0/1697921469015?e=1717027200&v=beta&t=8g6IWmgExTAlC59AIJZQRYCv_bsdt7-DEQN2zF2mR9E'
                            alt='image'
                            borderRadius='lg'
                        />
                    </Stack>
                    <Stack ml='2rem' spacing='3' textAlign='left'>
                        <Heading as='h4' size='md'>Technical Co-Lead, Google Developer Student Clubs - Queen's University</Heading>
                        <Text>
                            - Roblox development <br/>
                            - Awesome
                        </Text>
                    </Stack>
                </Stack>
            </CardBody>
        </Card>
    )
}