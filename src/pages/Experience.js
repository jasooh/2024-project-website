import { Text, Stack, Divider, Box, AbsoluteCenter } from "@chakra-ui/react";

// custom components
import TypingText from "../components/TypingText";
import ContentContainer from "../components/ContentContainer";
import ExperienceCard from "../components/ExperienceCard";

// custom hooks
import useFetch from "../hooks/useFetch";

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
                    LOADING
                </ContentContainer>
            </>
        )
    }

    if (error) {
        console.log("error")
        return (
            <>
                <ContentContainer>
                    ERROR
                </ContentContainer>
            </>
        )
    }

    return (
        <>
            <TypingText>developing skills to become a software engineer - one co-op at a time.</TypingText>
            {/* Experience content */}
            <ContentContainer>
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
                    {console.log(jsonData.data[0].attributes.descriptions)}
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
            </ContentContainer>
        </>
    )
}
