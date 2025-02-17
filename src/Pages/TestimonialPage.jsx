import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '../component/common/Sidebar';
import Header from '../component/common/Header';
import TestimonialGrid from '../component/TestimonialGrid';

function TestimonialPage() {
  return (
    <Flex height="100vh"> 
      <Sidebar />
      <Box flex="1" overflowY="auto">  
        <Header />
        <TestimonialGrid/>
      </Box>
    </Flex>
  );
}

export default TestimonialPage;