import { Text } from "@chakra-ui/react";

// custom components
import TypingText from "../components/TypingText";
import ContentContainer from "../components/ContentContainer";

export default function ContactPage() {
    return (
        <>
            <TypingText>i check my email often :&#41;</TypingText>
            {/* Contact content */}
            <ContentContainer>
                <Text height='100vh'>Contact</Text>
            </ContentContainer>
        </>
    )
}
