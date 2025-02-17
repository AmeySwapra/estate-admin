import React, { useState } from 'react';
import { Box, Text, Grid, Divider, Button, Stack, Heading } from '@chakra-ui/react';

const Notification = () => {
  const [messages] = useState([
    { 
      _id: '1', 
      name: 'John Doe', 
      email: 'john@example.com', 
      phone: '+1234567890', 
      message: 'I am interested in buying a 2-bedroom apartment in the city center. Please provide more details.', 
      createdAt: '2025-02-17' 
    },
    { 
      _id: '2', 
      name: 'Jane Smith', 
      email: 'jane@example.com', 
      phone: '+1987654321', 
      message: 'Can you send me information on any upcoming property auctions in the area?', 
      createdAt: '2025-02-16' 
    },
    { 
      _id: '3', 
      name: 'Chris Brown', 
      email: 'chris@example.com', 
      phone: '+1122334455', 
      message: 'I am looking to rent a house with at least 3 bedrooms. Any suggestions?', 
      createdAt: '2025-02-15' 
    },
    { 
      _id: '4', 
      name: 'Emily Davis', 
      email: 'emily@example.com', 
      phone: '+5566778899', 
      message: 'Please let me know about properties near the beach for investment purposes.', 
      createdAt: '2025-02-14' 
    },
    { 
      _id: '5', 
      name: 'Michael King', 
      email: 'michael@example.com', 
      phone: '+4455667788', 
      message: 'Looking for a commercial property for a new business. Can you assist?', 
      createdAt: '2025-02-13' 
    },
    { 
      _id: '6', 
      name: 'Sarah Lee', 
      email: 'sarah@example.com', 
      phone: '+9988776655', 
      message: 'I need help finding a family home in a quiet neighborhood. Any recommendations?', 
      createdAt: '2025-02-12' 
    },
    { 
      _id: '7', 
      name: 'David Martinez', 
      email: 'david@example.com', 
      phone: '+2233445566', 
      message: 'I am interested in investing in rental properties. Can you provide more details on the market?', 
      createdAt: '2025-02-11' 
    },
    { 
      _id: '8', 
      name: 'Olivia White', 
      email: 'olivia@example.com', 
      phone: '+6677889900', 
      message: 'Please send me a list of properties under $500,000 in the downtown area.', 
      createdAt: '2025-02-10' 
    },
    { 
      _id: '9', 
      name: 'James Wilson', 
      email: 'james@example.com', 
      phone: '+3344556677', 
      message: 'I would like to schedule a viewing of a few properties in the suburbs.', 
      createdAt: '2025-02-09' 
    },
    { 
      _id: '10', 
      name: 'Sophia Taylor', 
      email: 'sophia@example.com', 
      phone: '+7788991122', 
      message: 'Can you send me more information about homes with a pool? I’m looking for something luxurious.', 
      createdAt: '2025-02-08' 
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 5;

  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = messages.slice(indexOfFirstMessage, indexOfLastMessage);

  const totalPages = Math.ceil(messages.length / messagesPerPage);

  return (
    <Box p={4}>
      <Heading as="h3" size="lg" mb={4}>Recent Property Inquiries</Heading>

      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }}
        gap={4}
      >
        {currentMessages.length === 0 ? (
          <Text>No notifications available.</Text>
        ) : (
          currentMessages.map((message) => (
            <Box
              key={message._id}
              p={4}
              borderWidth={1}
              borderRadius="md"
              boxShadow="sm"
              width="100%"
              bg="white"
              background="linear-gradient(to bottom, #FFB6C1, #FFD700)"
              _hover={{ bg: 'gray.100' }}
            >
              <Text fontWeight="bold">{message.name}</Text>
              <Text color="gray.500">{message.email}</Text>
              <Text color="gray.500">{message.phone}</Text>
              <Text mt={2} noOfLines={2}>{message.message}</Text>
              <Text fontSize="sm" color="gray.400" mt={2}>
                {message.createdAt}
              </Text>
              <Divider my={2} />
            </Box>
          ))
        )}
      </Grid>

      <Stack direction="row" spacing={4} mt={5} justify="center">
        <Button
          onClick={() => setCurrentPage(currentPage - 1)}
          isDisabled={currentPage === 1}
          colorScheme="teal"
        >
          Previous
        </Button>
        <Text alignSelf="center">{`Page ${currentPage} of ${totalPages}`}</Text>
        <Button
          onClick={() => setCurrentPage(currentPage + 1)}
          isDisabled={currentPage === totalPages}
          colorScheme="teal"
        >
          Next
        </Button>
      </Stack>
    </Box>
  );
};

export default Notification;
