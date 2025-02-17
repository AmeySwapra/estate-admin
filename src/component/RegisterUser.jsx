import React, { useState } from 'react';
import { Box, Text, Icon, useColorMode, useColorModeValue, Button, Stack, Grid, Flex } from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';

const UserList = () => {
  const [users] = useState([
    { id: 1, username: 'JohnDoe', email: 'johndoe@example.com' },
    { id: 2, username: 'JaneSmith', email: 'janesmith@example.com' },
    { id: 3, username: 'ChrisBrown', email: 'chrisbrown@example.com' },
    { id: 4, username: 'SarahLee', email: 'sarahlee@example.com' },
    { id: 5, username: 'MichaelKing', email: 'michaelking@example.com' },
    { id: 6, username: 'EmilyDavis', email: 'emilydavis@example.com' },
    { id: 7, username: 'DavidMartinez', email: 'davidmartinez@example.com' },
    { id: 8, username: 'SophiaTaylor', email: 'sophiataylor@example.com' },
    { id: 9, username: 'JamesWilson', email: 'jameswilson@example.com' },
    { id: 10, username: 'OliviaWhite', email: 'oliviawhite@example.com' },
    { id: 11, username: 'AliceBrown', email: 'alicebrown@example.com' },
    { id: 12, username: 'EthanClark', email: 'ethanclark@example.com' },
    { id: 13, username: 'NatalieMoore', email: 'natalie.moore@example.com' },
    { id: 14, username: 'LiamMiller', email: 'liammiller@example.com' },
    { id: 15, username: 'GraceLopez', email: 'gracelopez@example.com' },
    { id: 16, username: 'LucasWalker', email: 'lucaswalker@example.com' },
    { id: 17, username: 'MiaHarris', email: 'miaharris@example.com' },
    { id: 18, username: 'NoahYoung', email: 'noahyoung@example.com' },
    { id: 19, username: 'AvaKing', email: 'avaking@example.com' },
    { id: 20, username: 'OliverScott', email: 'oliverscott@example.com' },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const hoverBgColor = useColorModeValue('gray.200', 'gray.600');
  const textColor = useColorModeValue('black', 'white');
  const cardBg = useColorModeValue('linear-gradient(to right, #ff7e5f, #feb47b)', 'linear-gradient(to right, #2c3e50, #34495e)');
  const shadowColor = useColorModeValue('rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.5)');

  return (
    <Box p={5} w="100%">
      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }}
        gap={6}
      >
        {currentUsers.map((user) => (
          <Box
            key={user.id}
            p={5}
            borderRadius="lg"
            bg={cardBg}
            boxShadow={`0 4px 12px ${shadowColor}`}
            _hover={{
              transform: 'translateY(-5px)',
              boxShadow: `0 6px 16px ${shadowColor}`,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
          >
            <Flex align="center" justify="space-between">
              <Flex align="center">
                <Icon as={FaUser} w={6} h={6} mr={3} color={textColor} />
                <Text fontWeight="bold" color={textColor}>
                  {user.username}
                </Text>
              </Flex>
              <Text color={textColor}>{user.email}</Text>
            </Flex>
          </Box>
        ))}
      </Grid>

      <Stack direction="row" spacing={4} mt={5} justify="center">
        <Button
          onClick={() => setCurrentPage(currentPage - 1)}
          isDisabled={currentPage === 1}
          colorScheme="teal"
        >
          Previous
        </Button>
        <Text alignSelf="center" color={textColor}>
          Page {currentPage} of {totalPages}
        </Text>
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

export default UserList;
