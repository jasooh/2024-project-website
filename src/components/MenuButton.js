// Buttons used on homepage
import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Colors from '../const/Colors.json';

export default function MenuButton({ children, link }) {
    return (
        <Text fontSize='20px' margin='0px' width='25%' fontWeight='300'
            transition='0.3s'
            _hover={{ transform: 'translateX(10px)', color: Colors['yellow'], fontWeight: '700' }}
        >
            <Link to={link}>{children}</Link>
        </Text>
    )
}