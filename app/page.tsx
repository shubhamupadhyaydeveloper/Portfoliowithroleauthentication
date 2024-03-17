// index.js
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import { Container } from "@chakra-ui/react";

export default function Home() {
    return (
        <Container maxW="780px" mx="auto" mt={["5rem", "5rem", "7rem", "9rem"]}>
            <HeroSection />
            <Services/>
        </Container>
    );
}
