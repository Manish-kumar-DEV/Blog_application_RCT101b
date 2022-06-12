import { Heading,Container,Box } from '@chakra-ui/react'
import React from 'react'
import ArticalUpdater from '../Components/ArticalUpdater';
import { useSelector } from 'react-redux';

const UpdateArtical = () => {
    const currentBlog = useSelector(store=>store.blogReducer.currentBlog) 
  return (
    <div>
        <Container>
            <Box textAlign={'center'} py={{base:2 , md:10}}>
                <Heading>
                 Update Artical   
                </Heading>
            </Box>
            <ArticalUpdater currentBlog={currentBlog}/>
        </Container>
    </div>
  )
}

export default UpdateArtical