import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Header from '../component/common/Header';
import Sidebar from '../component/common/Sidebar';
import Dashboard from '../component/Dashboard';

function HomePage() {
  return (
    <Flex height="100vh"> 
      <Box height="100vh"> 
        <Sidebar />
      </Box>
      <Box flex="1" display="flex" flexDirection="column" height="100vh" overflowY="auto">  
        <Header />
        <Box flex="1" overflowY="auto"> 
          <Dashboard />
        </Box>
      </Box>
    </Flex>
  );
}

export default HomePage;
