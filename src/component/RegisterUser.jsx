import React, { useState } from "react";
import { Box, Text, Icon, Button, Stack, Grid, Flex } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

const UserList = () => {
  const [users] = useState([
    { id: 1, username: "JohnDoe", email: "johndoe@example.com" },
    { id: 2, username: "JaneSmith", email: "janesmith@example.com" },
    { id: 3, username: "ChrisBrown", email: "chrisbrown@example.com" },
    { id: 4, username: "SarahLee", email: "sarahlee@example.com" },
    { id: 5, username: "MichaelKing", email: "michaelking@example.com" },
    { id: 6, username: "EmilyDavis", email: "emilydavis@example.com" },
    { id: 13, username: "NatalieMoore", email: "natalie.moore@example.com" },
    { id: 14, username: "LiamMiller", email: "liammiller@example.com" },
    { id: 15, username: "GraceLopez", email: "gracelopez@example.com" },
    { id: 16, username: "LucasWalker", email: "lucaswalker@example.com" },
    { id: 17, username: "MiaHarris", email: "miaharris@example.com" },
    { id: 18, username: "NoahYoung", email: "noahyoung@example.com" },
    { id: 19, username: "AvaKing", email: "avaking@example.com" },
    { id: 20, username: "OliverScott", email: "oliverscott@example.com" },
    { id: 7, username: "DavidMartinez", email: "davidmartinez@example.com" },
    { id: 8, username: "SophiaTaylor", email: "sophiataylor@example.com" },
    { id: 9, username: "JamesWilson", email: "jameswilson@example.com" },
    { id: 10, username: "OliviaWhite", email: "oliviawhite@example.com" },
    { id: 11, username: "AliceBrown", email: "alicebrown@example.com" },
    { id: 12, username: "EthanClark", email: "ethanclark@example.com" },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const gradients = [
    "linear-gradient(to right, #ff7e5f, #feb47b)",
    "linear-gradient(to right, #6a11cb, #2575fc)",
    "linear-gradient(to right, #ff512f, #dd2476)",
    "linear-gradient(to right, #11998e, #38ef7d)",
    "linear-gradient(to right, #fc4a1a, #f7b733)",
  ];

  return (
    <Box p={5} w="100%" maxW="100%" overflowX="hidden">
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={6}
        width="100%"
      >
        {currentUsers.map((user, index) => (
          <Box
            key={user.id}
            p={5}
            borderRadius="lg"
            bg={gradients[index % gradients.length]}
            boxShadow="0 4px 12px rgba(0, 0, 0, 0.2)"
            _hover={{
              transform: "translateY(-5px)",
              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <Flex align="center" justify="space-between">
              <Flex align="center">
                <Icon as={FaUser} w={6} h={6} mr={3} color="white" />
                <Text fontWeight="bold" color="white">
                  {user.username}
                </Text>
              </Flex>
              <Text color="white">{user.email}</Text>
            </Flex>
          </Box>
        ))}
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
        <Text alignSelf="center" color="black">
          Page {currentPage} of {totalPages}
        </Text>
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

export default UserList;
