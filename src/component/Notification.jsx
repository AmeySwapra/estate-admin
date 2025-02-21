import React, { useState } from 'react';
import { Box, Text, Grid, Divider, Button, Stack, Heading } from '@chakra-ui/react';

const Notification = () => {
  const [messages] = useState([
    { 
      _id: '1', 
      name: 'John Doe', 
      email: 'john@example.com', 
      phone: '+1234567890', 
      message: 'Do you offer bulk discounts on almonds and cashews?', 
      createdAt: '2025-02-17' 
    },
    { 
      _id: '2', 
      name: 'Jane Smith', 
      email: 'jane@example.com', 
      phone: '+1987654321', 
      message: 'Can you provide organic walnuts and pistachios?', 
      createdAt: '2025-02-16' 
    },
    { 
      _id: '3', 
      name: 'Chris Brown', 
      email: 'chris@example.com', 
      phone: '+1122334455', 
      message: 'I need a monthly subscription for mixed dry fruits. Do you have one?', 
      createdAt: '2025-02-15' 
    },
    { 
      _id: '4', 
      name: 'Emily Davis', 
      email: 'emily@example.com', 
      phone: '+5566778899', 
      message: 'Do you sell roasted or raw nuts? I prefer unsalted options.', 
      createdAt: '2025-02-14' 
    },
    { 
      _id: '5', 
      name: 'Michael King', 
      email: 'michael@example.com', 
      phone: '+4455667788', 
      message: 'Looking for premium quality saffron. Do you have any in stock?', 
      createdAt: '2025-02-13' 
    },
    { 
      _id: '6', 
      name: 'Sarah Lee', 
      email: 'sarah@example.com', 
      phone: '+9988776655', 
      message: 'Can you suggest the best nuts for a healthy diet?', 
      createdAt: '2025-02-12' 
    },
    { 
      _id: '7', 
      name: 'David Martinez', 
      email: 'david@example.com', 
      phone: '+2233445566', 
      message: 'I want to buy dried figs and dates in bulk for my store. Can you provide pricing?', 
      createdAt: '2025-02-11' 
    },
    { 
      _id: '8', 
      name: 'Olivia White', 
      email: 'olivia@example.com', 
      phone: '+6677889900', 
      message: 'Do you have gift packs of mixed dry fruits for festivals?', 
      createdAt: '2025-02-10' 
    },
    { 
      _id: '9', 
      name: 'James Wilson', 
      email: 'james@example.com', 
      phone: '+3344556677', 
      message: 'I am interested in flavored almonds. What varieties do you offer?', 
      createdAt: '2025-02-09' 
    },
    { 
      _id: '10', 
      name: 'Sophia Taylor', 
      email: 'sophia@example.com', 
      phone: '+7788991122', 
      message: 'Do you ship internationally? I want to order dried apricots and raisins.', 
      createdAt: '2025-02-08' 
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 5;

  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = messages.slice(indexOfFirstMessage, indexOfLastMessage);

  const totalPages = Math.ceil(messages.length / messagesPerPage);

  const gradientBackgrounds = [
    'linear-gradient(to bottom, #FFB6C1, #FFD700)',
    'linear-gradient(to bottom, #FFA07A, #FF4500)',
    'linear-gradient(to bottom, #98FB98, #2E8B57)',
    'linear-gradient(to bottom, #87CEFA, #1E90FF)',
    'linear-gradient(to bottom, #DDA0DD, #8A2BE2)',
  ];

  return (
    <Box p={4}>
      <Heading as="h3" size="lg" mb={4}>Recent Customer Inquiries</Heading>

      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }}
        gap={4}
      >
        {currentMessages.length === 0 ? (
          <Text>No notifications available.</Text>
        ) : (
          currentMessages.map((message, index) => (
            <Box
              key={message._id}
              p={4}
              borderWidth={1}
              borderRadius="md"
              boxShadow="sm"
              width="100%"
              background={gradientBackgrounds[index % gradientBackgrounds.length]}
              _hover={{ opacity: 0.9 }}
            >
              <Text fontWeight="bold">{message.name}</Text>
              <Text color="gray.700">{message.email}</Text>
              <Text color="gray.700">{message.phone}</Text>
              <Text mt={2} noOfLines={2}>{message.message}</Text>
              <Text fontSize="sm" color="gray.600" mt={2}>
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
          color="white"
          bg='green.500'
        >
          Previous
        </Button>
        <Text alignSelf="center">{`Page ${currentPage} of ${totalPages}`}</Text>
        <Button
          onClick={() => setCurrentPage(currentPage + 1)}
          isDisabled={currentPage === totalPages}
          color="white"
          bg='green.500'
        >
          Next
        </Button>
      </Stack>
    </Box>
  );
};

export default Notification;
