// Buttons used on homepage
import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// color
import Colors from '../const/Colors.json';

export default function MenuButton({ children, link }) {
    let location = useLocation();
    const onPage = location.pathname === link

    const scrollDown = () => {
        // Scrolls down 100 pixels
        setTimeout(() => {
            window.scrollBy({
                top: window.scrollY === 0 ? '300' : '0',
                left: 0,
                behavior: 'smooth' // Enables smooth scrolling
            });
        }, 100)
    };

    return (
        <Text
            fontSize='20px'
            margin='0px'
            width='25%'
            zIndex='1'
            // Skip animation if user has selected
            fontWeight={onPage ? '800' : '300'}
            opacity={onPage ? '1' : '0.7'}
            color={onPage ? Colors['accent'] : Colors['light-white']}
            transform={onPage ? 'translateX(10px)' : '0'}
            // Animation
            transition='0.3s'
            _hover={{ transform: 'translateX(10px)', fontWeight: '800', opacity: '1' }}
        >
            <Link to={link} onClick={scrollDown}>
                {children}
            </Link>
        </Text>
    )
}