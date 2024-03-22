// Go back to about page when user scrolls up
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ScrollEvent() {
    const navigate = useNavigate();
    useEffect(() => {
        const handleScroll = () => {
            // Check if the page is scrolled to the top
            if (window.pageYOffset == 0) {
                navigate('/'); // Navigate to a new route
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {window.removeEventListener('scroll', handleScroll);};
    }, [navigate]);
}