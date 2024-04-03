import { Text, Stack, VStack, Heading, Flex, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";

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
    return (
        <>
            <TypingText>working towards making my own robot army.</TypingText>
            {/* Project content */}
            <ContentContainer>
                {/* Carousel container */}
                <ProjectCarousel gap={32}>
                    <ProjectCard />
                    <ProjectCard />
                </ProjectCarousel>
            </ContentContainer>
        </>
    )
}
