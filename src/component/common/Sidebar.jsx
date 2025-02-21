import React, { useEffect, useState } from "react";
import {
  Box,
  VStack,
  Avatar,
  Text,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SettingsIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import {
  FaHome,
  FaTools,
  FaPen,
  FaThLarge,
  FaBell,
  FaUser,
  FaBox,
  FaImages,
  FaClipboardList,
  FaShoppingCart,
  FaUserPlus,
  FaTags,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const textColor = useColorModeValue("gray.800", "white");
  const toast = useToast();

  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUsername(storedUser.username);
      setAvatar(storedUser.avatar);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUsername("");
    setAvatar("");
    toast({
      title: "Logged out.",
      description: "You have successfully logged out.",
      status: "info",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };

  // Define a professional background gradient for the sidebar.
  const sidebarBg = useColorModeValue(
    "linear(to-br, gray.100, whiteAlpha.900)",
    "linear(to-b, gray.800, gray.900)"
  );

  return (
    <Box
      bgGradient={sidebarBg}
      p={4}
      height="100vh"
      width="200px"
      display="flex"
      flexDirection="column"
      borderRadius="md"
      boxShadow="md"
    >
      <HStack spacing={3} mb={4}>
        <Avatar name={username} src={avatar} />
        <Text fontWeight="bold" color={textColor}>
          {username}
        </Text>
      </HStack>

      <Box flex="1" overflowY="auto" marginTop="20px">
        <VStack spacing={6} align="flex-start">
          <HStack>
            <Link to="/">
              <FaThLarge size={24} color="teal" />
            </Link>
            <Link to="/">
              <Text color={textColor} ml={5}>
                Dashboard
              </Text>
            </Link>
          </HStack>
          <HStack>
            <Link to="/products">
              <FaBox size={24} color="blue" />
            </Link>
            <Link to="/products">
              <Text color={textColor} ml={5}>
                Add Products
              </Text>
            </Link>
          </HStack>
          <HStack>
            <Link to="/gallery">
              <FaImages size={24} color="orange" />
            </Link>
            <Link to="/gallery">
              <Text color={textColor} ml={5}>
                Add Gallery
              </Text>
            </Link>
          </HStack>
          <HStack>
            <Link to="/discount">
              <FaTags size={24} color="red" />
            </Link>
            <Link to="/discount">
              <Text color={textColor} ml={5}>
                Add Discount
              </Text>
            </Link>
          </HStack>
          <HStack>
            <Link to="/blog">
              <FaPen size={24} color="purple" />
            </Link>
            <Link to="/blog">
              <Text color={textColor} ml={5}>
                Blog
              </Text>
            </Link>
          </HStack>
          <HStack>
            <Link to="/testimonial">
              <FaClipboardList size={24} color="gray" />
            </Link>
            <Link to="/testimonial">
              <Text color={textColor} ml={5}>
                Testimonial
              </Text>
            </Link>
          </HStack>
          <HStack>
            <Link to="/order-management">
              <FaShoppingCart size={24} color="lime" />
            </Link>
            <Link to="/order-management">
              <Text color={textColor} ml={5}>
                Order Status
              </Text>
            </Link>
          </HStack>
          <HStack>
            <Link to="/register-user">
              <FaUserPlus size={24} color="olive" />
            </Link>
            <Link to="/register-user">
              <Text color={textColor} ml={5}>
                Register User
              </Text>
            </Link>
          </HStack>
          <HStack>
            <Link to="/notification">
              <FaBell size={24} color="green" />
            </Link>
            <Link to="/notification">
              <Text color={textColor} ml={5}>
                Notification
              </Text>
            </Link>
          </HStack>
        </VStack>
      </Box>

      <Box mt="auto">
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<SettingsIcon />}
            variant="ghost"
            color={textColor}
            aria-label="Settings"
          />
          <MenuList>
            <MenuItem onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}{" "}
              {colorMode === "light" ? "Dark Mode" : "Light Mode"}
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default Sidebar;
