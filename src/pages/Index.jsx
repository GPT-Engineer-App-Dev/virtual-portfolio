import { Container, Text, VStack, Heading, Box, Button, Image, Flex } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl">Welcome to My Personal Website</Heading>
        <Text fontSize="xl" textAlign="center">Hi, I'm [Your Name], a passionate web developer. Explore my work and get in touch!</Text>
        <Box boxSize="sm">
          <Image src="/path/to/your/profile-picture.jpg" alt="Profile Picture" borderRadius="full" boxSize="150px" />
        </Box>
        <Flex justify="center" width="100%" mt={4}>
          <Button as="a" href="https://github.com/yourusername" leftIcon={<FaGithub />} colorScheme="teal" variant="outline" m={2}>
            GitHub
          </Button>
          <Button as="a" href="https://linkedin.com/in/yourusername" leftIcon={<FaLinkedin />} colorScheme="teal" variant="outline" m={2}>
            LinkedIn
          </Button>
          <Button as="a" href="mailto:your.email@example.com" leftIcon={<FaEnvelope />} colorScheme="teal" variant="outline" m={2}>
            Email
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;