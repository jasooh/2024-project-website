// Project carousel card
import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
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

// for rich text
import useText from "../hooks/useText";

// color
import Colors from '../const/Colors.json';

export default function ProjectCard({ title, date, role, description, img, badges, content }) {
    // modal dependencies
    const { isOpen, onOpen, onClose } = useDisclosure()
    // rich text
    const text = useText(content);
    const [state, setEditorState] = useState(EditorState.createWithContent(text));

    return (
        <>
            <Card width='100%' bg={`rgba(13, 13, 13, 0.8)`}
                transition='0.3s'
                _hover={{ bg: 'rgba(255, 255, 255, 0.075)', transform: 'translateY(-5px)' }}
            >
                <CardBody width='100%' onClick={onOpen}>
                    <Stack height='100%' direction='column' justifyContent='space-between' opacity='1'>
                        {/* Title & Description */}
                        <Stack mb='1.5rem' spacing='3' textAlign='center'>
                            <Heading as='h4' size='md' color={Colors['accent']}>{title}</Heading>
                            <Text fontWeight='300' color={Colors['white']}>{role}</Text>
                            <Text fontWeight='200' fontSize='15px' mt='-5px'>{date}</Text>

                            <Text fontSize={{ base: '12px', "2xl": '15px' }} textAlign='left'>{description}</Text>
                        </Stack>
                        {/* Thumbnail */}
                        <Stack direction='column' justifyContent='space-around' minW='200px' minH='200px'>
                            <Image
                                minH='200px'
                                maxH='200px'
                                minW='full'
                                objectFit='cover'
                                src={img}
                                alt='image'
                                borderRadius='lg'
                                pointerEvents='none'
                            />
                            <Stack direction='row' mt='5px' flexWrap='wrap'>
                                {badges.map((value) => (
                                    <Badge colorScheme='yellow'>{value}</Badge>
                                ))}
                            </Stack>
                        </Stack>
                    </Stack>
                </CardBody>
            </Card>
            {/* Modal section */}
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} borderWidth='2px'>
                <ModalOverlay />
                <ModalContent backgroundColor={Colors['black']} color={Colors['white']} minW='35%' minH='50%'>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Editor editorState={state} onChange={setEditorState} readOnly />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}