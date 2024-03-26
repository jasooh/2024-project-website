// Experience card
import { Image, Stack, Heading, Text, Card, CardBody, Badge } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons';

import Colors from '../const/Colors.json';

export default function ExperienceCard({ title, role, img, description, badges, link }) {
    return (
        <Card width='100%' bg={`rgba(13, 13, 13, 0.8)`}
            transition='0.3s'
            _hover={{ bg: 'rgba(255, 255, 255, 0.075)', transform: 'scale(1.01, 1.01)' }}
        >
            <CardBody width='100%' onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}>
                <Stack direction='row' opacity='1'>
                    <Stack justifyContent='space-around' alignItems='center' minW='200px' minH='200px' display={{ base: 'none', md: 'inline-block' }}>
                        <Image
                            minH='200px'
                            maxH='200px'
                            minW='full'
                            objectFit='cover'
                            src={img}
                            alt='image'
                            borderRadius='lg'
                        />
                    </Stack>
                    <Stack ml='2rem' spacing='3' textAlign='left'>
                        <Heading as='h4' size='md' color={Colors['accent']}>{ title }</Heading>
                        <Text fontWeight='300' color={Colors['white']}>{ role }</Text>
                        <Stack direction='row'>
                            {badges.map((value) => (
                                <Badge colorScheme='yellow'>{value}</Badge>
                            ))}
                        </Stack>
                        <Stack direction='column'>
                            {description.map((value) => (
                                <Text>{"- " + value}</Text>
                            ))}
                        </Stack>
                    </Stack>
                    <ExternalLinkIcon color={Colors['light-white']} boxSize='6'
                        position='absolute'
                        bottom='10px'
                        right='10px'
                    />
                </Stack>
            </CardBody>
        </Card>
    )
}