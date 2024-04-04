import { Stack, Spinner, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react"

// color
import Colors from '../const/Colors.json';

export default function PromiseDisplay(load) {

    if (load) { // loading
        return ( 
        <>
            <Stack direction='row' height='20vh' width='60vw' justifyContent='center'>
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor={Colors["light-white"]}
                    color={Colors["accent"]}
                    size='xl'
                />
            </Stack>
        </>
    )
    } else { // error
        return (
            <>
                <Stack direction='row' height='8vh' width='60vw' justifyContent='center' borderRadius='xl'>
                    <Alert status='error'>
                        <AlertIcon />
                        <AlertTitle>Content could not be loaded!</AlertTitle>
                        <AlertDescription>Please check console for errors.</AlertDescription>
                    </Alert>
                </Stack>
            </>
        )
    }
}