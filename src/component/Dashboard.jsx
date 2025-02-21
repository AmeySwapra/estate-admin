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
import { FaHome, FaPen, FaUser, FaEye, FaTools, FaThLarge, FaBox, FaImages, FaClipboardList, FaShoppingCart, FaUserPlus, FaBell } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [data] = useState({
    products: Math.floor(Math.random() * 100),
    gallery: Math.floor(Math.random() * 50),
    blogs: Math.floor(Math.random() * 30),
    testimonials: Math.floor(Math.random() * 20),
    orders: Math.floor(Math.random() * 200),
    registeredUsers: Math.floor(Math.random() * 1000),
    notifications: Math.floor(Math.random() * 500),
  });

  const cardStyles = [
    { bgGradient: 'linear(to-r, teal.400, teal.600)', color: 'white' }, 
    { bgGradient: 'linear(to-r, blue.400, blue.600)', color: 'white' },
    { bgGradient: 'linear(to-r, orange.400, orange.600)', color: 'white' }, 
    { bgGradient: 'linear(to-r, purple.400, purple.600)', color: 'white' }, 
    { bgGradient: 'linear(to-r, red.400, red.600)', color: 'white' }, 
    { bgGradient: 'linear(to-r, cyan.400, cyan.600)', color: 'white' }, 
    { bgGradient: 'linear(to-r, pink.400, pink.600)', color: 'white' }, 
    { bgGradient: 'linear(to-r, green.400, green.600)', color: 'white' }, 
  ];

  const stats = [
    { label: 'Dashboard', value: data.products, icon: <FaThLarge size={24} /> },
    { label: 'Products', value: data.products, icon: <FaBox size={24} /> },
    { label: 'Gallery', value: data.gallery, icon: <FaImages size={24} /> },
    { label: 'Blogs', value: data.blogs, icon: <FaPen size={24} /> },
    { label: 'Testimonials', value: data.testimonials, icon: <FaClipboardList size={24} /> },
    { label: 'Orders', value: data.orders, icon: <FaShoppingCart size={24} /> },
    { label: 'Registered Users', value: data.registeredUsers, icon: <FaUserPlus size={24} /> },
    { label: 'Notifications', value: data.notifications, icon: <FaBell size={24} /> },
  ];

  // Data for the line charts
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Products',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Users',
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
      },
      {
        label: 'Orders',
        data: [12, 34, 45, 56, 67, 78, 89],
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Overview',
      },
    },
  };

  return (
    <Box p={4} minHeight="100%" overflowY="auto">
      <Text fontSize="4xl" fontWeight="bold" mb={4} color={useColorModeValue('gray.800', 'white')}>
        Admin Dashboard
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {stats.map((stat, index) => (
          <Stat key={index} p={4} borderRadius="md" boxShadow="lg" {...cardStyles[index]}>
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

      {/* Add the charts section */}
      <SimpleGrid columns={[1, 2, 3]} spacing={6} mt={6}>
        <Box p={4} borderRadius="md" boxShadow="10px 10px gray" bg={useColorModeValue('white', 'gray.700')}>
          <Text fontSize="xl" fontWeight="bold" mb={4}>Products Overview</Text>
          <Line data={{ labels: chartData.labels, datasets: [chartData.datasets[0]] }} options={chartOptions} />
        </Box>
        <Box p={4} borderRadius="md" boxShadow="10px 10px gray" bg={useColorModeValue('white', 'gray.700')}>
          <Text fontSize="xl" fontWeight="bold" mb={4}>Users Overview</Text>
          <Line data={{ labels: chartData.labels, datasets: [chartData.datasets[1]] }} options={chartOptions} />
        </Box>
        <Box p={4} borderRadius="md" boxShadow="10px 10px gray" bg={useColorModeValue('white', 'gray.700')}>
          <Text fontSize="xl" fontWeight="bold" mb={4}>Orders Overview</Text>
          <Line data={{ labels: chartData.labels, datasets: [chartData.datasets[2]] }} options={chartOptions} />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;