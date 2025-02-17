import React, { useState } from 'react';
import {
  Box,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaHome, FaPen, FaUser, FaEye, FaTools } from 'react-icons/fa';

const Dashboard = () => {
  const [data] = useState({
    properties: Math.floor(Math.random() * 100),
    blogs: Math.floor(Math.random() * 100),
    services: Math.floor(Math.random() * 50),
    users: Math.floor(Math.random() * 1000),
    visitors: Math.floor(Math.random() * 5000),
  });

  const cardStyles = [
    { bgGradient: 'linear(to-r, blue.400, blue.600)', color: 'white' },
    { bgGradient: 'linear(to-r, green.400, green.600)', color: 'white' },
    { bgGradient: 'linear(to-r, orange.400, orange.600)', color: 'white' },
    { bgGradient: 'linear(to-r, purple.400, purple.600)', color: 'white' },
    { bgGradient: 'linear(to-r, red.400, red.600)', color: 'white' },
  ];

  const stats = [
    { label: 'Properties Listed', value: data.properties, icon: <FaHome size={24} /> },
    { label: 'Blogs', value: data.blogs, icon: <FaPen size={24} /> },
    { label: 'Services Available', value: data.services, icon: <FaTools size={24} /> },
    { label: 'Registered Users', value: data.users, icon: <FaUser size={24} /> },
    { label: 'Website Visitors', value: data.visitors, icon: <FaEye size={24} /> },
  ];

  return (
    <Box p={4} minHeight="100vh">
      <Text fontSize="4xl" fontWeight="bold" mb={4} color={useColorModeValue('gray.800', 'white')}>
        Dashboard
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {stats.map((stat, index) => (
          <Stat key={index} p={4} borderRadius="md" boxShadow="dark-lg" {...cardStyles[index]}>
            <Flex align="center" justify="space-between">
              <Box>{stat.icon}</Box>
              <Box>
                <StatLabel>{stat.label}</StatLabel>
                <StatNumber>{stat.value}</StatNumber>
              </Box>
            </Flex>
          </Stat>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;
