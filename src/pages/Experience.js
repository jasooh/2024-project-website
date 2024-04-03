import { Stack, Fade } from "@chakra-ui/react";

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

    if (loading || error) {
        console.log("loading")
        if (error) {console.log("Error: " + error)}
        return (
            <>
                <ContentContainer>
                    <PromiseDisplay load={loading} />
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
                        {/* Card container */}
                        <Stack direction='column'>
                            {jsonData.data.map(experience => {
                                // date returned depends if end date is placed, show only year
                                const date = experience.attributes.end ? experience.attributes.start.slice(0, 4) + " - " + experience.attributes.end.slice(0, 4) : experience.attributes.start.slice(0, 4)
                                return (
                                    <ExperienceCard key={experience.id}
                                        title={experience.attributes.title}
                                        role={experience.attributes.role}
                                        img={main + experience.attributes.images.data.attributes.url}
                                        description={experience.attributes.descriptions}
                                        badges={experience.attributes.badges}
                                        date={date}
                                        link={experience.attributes.link}
                                    />
                                )
                            })}
                        </Stack>
                    </Stack>
                </Fade>
            </ContentContainer>
        </>
    )
}
