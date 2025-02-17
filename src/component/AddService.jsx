import React, { useState } from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Icon,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { FaHome, FaDollarSign, FaKey, FaBuilding, FaComments, FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import Pagination from "./common/Pagination";


const initialServices = [
  {
    id: 1,
    name: "Buying",
    text: "Find your dream home with ease.",
    icon: FaHome,
    details:
      "We help you find the perfect property that matches your needs and budget. From apartments to villas, our team ensures a seamless buying experience.",
  },
  {
    id: 2,
    name: "Selling",
    text: "Get the best deals for your property.",
    icon: FaDollarSign,
    details:
      "Maximize the value of your property with our expert selling services. We provide market analysis, staging, and negotiation to get you the best price.",
  },
  {
    id: 3,
    name: "Renting",
    text: "Browse rental properties hassle-free.",
    icon: FaKey,
    details:
      "Discover a wide range of rental properties tailored to your preferences. Whether short-term or long-term, we make renting simple and stress-free.",
  },
  {
    id: 4,
    name: "Property Management",
    text: "We manage your property with care.",
    icon: FaBuilding,
    details:
      "Our property management services include tenant screening, maintenance, rent collection, and legal compliance to ensure your investment is well taken care of.",
  },
  {
    id: 5,
    name: "Consulting",
    text: "Expert advice on real estate investments.",
    icon: FaComments,
    details:
      "Our real estate consultants provide market analysis, investment strategies, and legal guidance to help you make informed property decisions.",
  },
  {
    id: 6,
    name: "Home Loans",
    text: "Secure financing for your dream home.",
    icon: FaDollarSign,
    details:
      "We connect you with top lenders to get the best mortgage rates and financing options. Let us help you navigate the home loan process smoothly.",
  },
  {
    id: 7,
    name: "Interior Design",
    text: "Transform your space with expert designs.",
    icon: FaHome,
    details:
      "Our interior designers help create functional and aesthetically pleasing living spaces tailored to your taste and lifestyle.",
  },
  {
    id: 8,
    name: "Legal Assistance",
    text: "Ensure smooth and hassle-free transactions.",
    icon: FaKey,
    details:
      "We provide legal assistance for property transactions, including title verification, document preparation, and dispute resolution.",
  },
  {
    id: 9,
    name: "Commercial Properties",
    text: "Buy, sell, or lease commercial spaces.",
    icon: FaBuilding,
    details:
      "We help businesses find the right commercial properties, whether it's office space, retail, or industrial properties.",
  },
  {
    id: 10,
    name: "Vacation Rentals",
    text: "Find the perfect getaway home.",
    icon: FaHome,
    details:
      "Explore a variety of vacation rentals for short-term stays, with properties ranging from beachfront villas to cozy mountain cabins.",
  },
];


const ServiceDetail = () => {
  const [services, setServices] = useState(initialServices);
  const [currentService, setCurrentService] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure();

  const [newService, setNewService] = useState({
    name: "",
    text: "",
    details: "",
    icon: FaHome,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(services.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentServices = services.slice(startIndex, startIndex + itemsPerPage);

  const handleEditClick = (service) => {
    setCurrentService(service);
    onOpen();
  };

  const handleDelete = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  const handleSave = () => {
    setServices(
      services.map((service) =>
        service.id === currentService.id ? currentService : service
      )
    );
    onClose();
  };

  const handleAddService = () => {
    setServices([...services, { ...newService, id: Date.now() }]);
    setNewService({ name: "", text: "", details: "", icon: FaHome });
    onAddClose();
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Box id="services" py="8" px={{ base: 4, md: 8, lg: 24 }}>
      {/* Header with Add Button */}
      <Flex justify="space-between" align="center" mb={6}>
        <Heading as="h2" size="xl" color="blue.700">
          Our Services
        </Heading>
        <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={onAddOpen}>
          Add Service
        </Button>
      </Flex>

      {/* Services Grid */}
      <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={8}>
        {currentServices.map((service) => (
          <GridItem key={service.id}>
            <Box
              bg="white"
              p={6}
              borderRadius="lg"
              boxShadow="dark-lg"
              textAlign="center"
              transition="transform 0.2s, box-shadow 0.2s"
              _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
              position="relative"
            >
              <Icon as={service.icon} boxSize="50px" color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={4} color="blue.700">
                {service.name}
              </Heading>
              <Text fontSize="md" color="gray.700" mb={4}>
                {service.text}
              </Text>
              <Text fontSize="sm" color="gray.600">
                {service.details}
              </Text>

              {/* Edit & Delete Icons */}
              <Flex justify="center" gap={4} mt={4}>
                <Icon as={FaEdit} boxSize="5" color="green.500" cursor="pointer" onClick={() => handleEditClick(service)} />
                <Icon as={FaTrash} boxSize="5" color="red.500" cursor="pointer" onClick={() => handleDelete(service.id)} />
              </Flex>
            </Box>
          </GridItem>
        ))}
      </Grid>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {/* Edit Service Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Service</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Service Name"
              mb={3}
              value={currentService?.name || ""}
              onChange={(e) => setCurrentService({ ...currentService, name: e.target.value })}
            />
            <Input
              placeholder="Short Description"
              mb={3}
              value={currentService?.text || ""}
              onChange={(e) => setCurrentService({ ...currentService, text: e.target.value })}
            />
            <Textarea
              placeholder="Detailed Description"
              mb={3}
              value={currentService?.details || ""}
              onChange={(e) => setCurrentService({ ...currentService, details: e.target.value })}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
              Save Changes
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Add Service Modal */}
      <Modal isOpen={isAddOpen} onClose={onAddClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Service</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Service Name"
              mb={3}
              value={newService.name}
              onChange={(e) => setNewService({ ...newService, name: e.target.value })}
            />
            <Input
              placeholder="Short Description"
              mb={3}
              value={newService.text}
              onChange={(e) => setNewService({ ...newService, text: e.target.value })}
            />
            <Textarea
              placeholder="Detailed Description"
              mb={3}
              value={newService.details}
              onChange={(e) => setNewService({ ...newService, details: e.target.value })}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddService}>
              Add Service
            </Button>
            <Button onClick={onAddClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ServiceDetail;





