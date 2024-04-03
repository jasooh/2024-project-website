// Project carousel card
import {
    Image,
    Stack,
    Heading,
    Text,
    Card,
    CardBody,
    Badge,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'


// color
import Colors from '../const/Colors.json';

export default function ProjectCard({ title, date, role, description, img, badges }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Card width='100%' bg={`rgba(13, 13, 13, 0.8)`}
                transition='0.3s'
                _hover={{ bg: 'rgba(255, 255, 255, 0.075)', transform: 'translateY(-5px)' }}
            >
                <CardBody width='100%' onClick={onOpen}>
                    <Stack direction='column' opacity='1'>
                        {/* Title & Description */}
                        <Stack mb='1.5rem' spacing='3' textAlign='center'>
                            <Heading as='h4' size='md' color={Colors['accent']}>{ title }</Heading>
                            <Text fontWeight='300' color={Colors['white']}>{ role }</Text>
                            <Text fontWeight='200' fontSize='15px' mt='-5px'>{ date }</Text>
                            <Stack direction='column'>
                                <Text fontSize={{ base: '12px', "2xl": '15px' }} textAlign='left'>{ description }</Text>
                            </Stack>
                        </Stack>
                        {/* Thumbnail */}
                        <Stack justifyContent='space-around' alignItems='center' minW='200px' minH='200px'>
                            <Image
                                minH='200px'
                                maxH='200px'
                                minW='full'
                                objectFit='cover'
                                src={ img }
                                alt='image'
                                borderRadius='lg'
                            />
                        </Stack>
                        {/* Badges */}
                        <Stack direction='row' mt='5px'>
                            {badges.map((value) => (
                                    <Badge colorScheme='blue'>{value}</Badge>
                            ))}
                        </Stack>
                    </Stack>
                </CardBody>
            </Card>
            {/* Modal section */}
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Black Magic II: Phantom's Causatum</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        extra detail :D
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}