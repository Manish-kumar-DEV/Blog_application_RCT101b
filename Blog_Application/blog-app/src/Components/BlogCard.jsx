import React from 'react';
import {Box, Center ,Image,Stack,Text,Heading, Avatar, useColorModeValue} from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const BlogCard = ({blog}) => {
    
  return (
    <Center my={6}>
        <Box 
        maxW={'445px'} 
        w="full" 
        bg={useColorModeValue("white","grey.900")}
        boxShadow={'2xl'}
        p={6}
        overflow={
            'hidden'
        }
        >
          <Box>
            <Image src={`${blog.thumbnail_pic}`}/>
          </Box>
          <Link to={`/articles/${blog.id}`}>
          <Stack>
            <Text>Blog</Text>
            <Heading>{blog.title}</Heading>
            <Text>{blog.description}</Text>
          </Stack>
          <Stack>
            <Avatar src={`${blog.author.profile_pic}`} alt={"Auther"}></Avatar>
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                    <Text fontWeight={600}>{blog.author.name}</Text>
                    <Text color={"grey.600"}>{blog.author.publish_date}</Text>
                </Stack>
          </Stack>
          </Link>
        </Box>
    </Center>
  )
}

export default BlogCard