// custom components
import TypingText from "../components/TypingText";
import ContentContainer from "../components/ContentContainer";
import PromiseDisplay from "../components/PromiseDisplay";
import ProjectCarousel from "../components/ProjectCarousel";
import ProjectCard from "../components/ProjectCard";

// custom hooks
import useFetch from "../hooks/useFetch";

// color
import Colors from '../const/Colors.json';

export default function ProjectPage() {
    const main = "http://localhost:1337"
    const url = main + '/api/projects?populate=*';
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
            <TypingText>working towards making my own robot army.</TypingText>
            {/* Project content */}
            <ContentContainer>
                {/* Carousel container */}
                <ProjectCarousel gap={32}>
                    {jsonData.data.map(project => {
                        // date returned depends if end date is placed, show only year
                        const date = project.attributes.end ? project.attributes.start.slice(0, 4) + " - " + project.attributes.end.slice(0, 4) : project.attributes.start.slice(0, 4)
                        return (
                            <ProjectCard key={project.id}
                                title={project.attributes.title}
                                role={project.attributes.role}
                                date={date}
                                description={project.attributes.description}
                                img={main + project.attributes.thumbnail.data.attributes.url}
                                badges={project.attributes.badges}
                                content={project.attributes.extra}
                            />
                        )
                    })}
                </ProjectCarousel>
            </ContentContainer>
        </>
    )
}
