// Buttons used on homepage
import { useState } from 'react';
import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Colors from '../const/Colors.json';

export default function MenuButton({ children, link }) {
    let location = useLocation();
    const onPage = location.pathname === link

    return (
        <Text
            fontSize='20px'
            margin='0px'
            width='25%'
            // Skip animation if user has selected
            fontWeight={onPage ? '800' : '300'}
            opacity={onPage ? '1' : '0.7'}
            color={onPage ? Colors['accent'] : Colors['light-white']}
            transform={onPage ? 'translateX(10px)' : '0'}
            // Animation
            transition='0.3s'
            _hover={{ transform: 'translateX(10px)', color: Colors['yellow'], fontWeight: '800', opacity: '1' }}
        >
            <Link to={link}>
                {children}
            </Link>
        </Text>
    )
}