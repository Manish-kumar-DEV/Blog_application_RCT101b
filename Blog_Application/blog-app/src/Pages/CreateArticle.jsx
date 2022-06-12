import {
  Box,
  Container,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import ArticalUpdater from "../Components/ArticalUpdater";

const CreateArticle = () => {

  return (
    <Container>
      <Box textAlign="center" py={{ base: 2, md: 10 }}>
        <Heading>Create Article</Heading>
      </Box>
      <ArticalUpdater />
    </Container>
  );
};

export default CreateArticle;
