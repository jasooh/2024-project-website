import { Text } from "@chakra-ui/react";

// custom components
import TypingText from "../components/TypingText";
import ContentContainer from "../components/ContentContainer";

export default function ExperiencePage() {
    return (
        <>
            <TypingText>developing skills to become a software engineer - one co-op at a time.</TypingText>
            {/* Experience content */}
            <ContentContainer>
                <Text height='100vh'>Experience</Text>
            </ContentContainer>
        </>
    )
}
