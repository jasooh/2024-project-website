import { Stack, Divider, Box, AbsoluteCenter, Fade } from "@chakra-ui/react";

// custom components
import TypingText from "../components/TypingText";
import ContentContainer from "../components/ContentContainer";
import ExperienceCard from "../components/ExperienceCard";
import PromiseDisplay from "../components/PromiseDisplay";

// custom hooks
import useFetch from "../hooks/useFetch";

// color
import Colors from '../const/Colors.json';

export default function ExperiencePage() {
    const main = "http://localhost:1337"
    const url = main + '/api/experiences?populate=*';
    const { jsonData, error, loading } = useFetch(url);

    if (loading) {
        console.log("loading")
        return (
            <>
                <ContentContainer>
                    <PromiseDisplay load={loading}/>
                </ContentContainer>
            </>
        )
    }

    if (error) {
        console.log("Error: " + error)
        return (
            <>
                <ContentContainer>
                    <PromiseDisplay load={loading}/>
                </ContentContainer>
            </>
        )
    }

    return (
        <>
            <TypingText>developing skills to become a software engineer - one co-op at a time.</TypingText>
            {/* Experience content */}
            <ContentContainer>
                <Fade in={true}>
                    <Stack
                        direction='column'
                        width='100%'
                        textAlign='center'
                    >
                        <Box position='relative' padding='10'>
                            <Divider />
                            <AbsoluteCenter bg={Colors['black']} color={Colors['white']} px='4'>
                                Experience
                            </AbsoluteCenter>
                        </Box>
                        {/* Card container */}
                        <Stack direction='column'>
                            {jsonData.data.map(experience => (
                                <ExperienceCard key={experience.id}
                                    title={experience.attributes.title}
                                    role={experience.attributes.role}
                                    img={main + experience.attributes.images.data.attributes.url}
                                    description={experience.attributes.descriptions}
                                    badges={experience.attributes.badges}
                                    link={experience.attributes.link}
                                />
                            ))}
                        </Stack>
                    </Stack>
                </Fade>
            </ContentContainer>
        </>
    )
}
