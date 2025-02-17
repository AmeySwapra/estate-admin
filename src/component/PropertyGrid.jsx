import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  IconButton,
  Image,
  Text,
  Button,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import {
  FaHeart,
  FaList,
  FaRegHeart,
  FaTh,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import h1 from "../assets/images/h1.jpeg";
import h2 from "../assets/images/h2.jpeg";
import h3 from "../assets/images/h3.jpg";
import h4 from "../assets/images/h4.jpg";
import h5 from "../assets/images/h5.jpg";
import h6 from "../assets/images/h6.jpeg";
import h7 from "../assets/images/h7.jpeg";
import h8 from "../assets/images/h8.jpeg";
import h9 from "../assets/images/h9.jpeg";
import h10 from "../assets/images/h10.jpeg";
import Pagination from "./common/Pagination";

const properties = [
  {
    id: 1,
    title: "Spacious 3BHK Apartment in Bandra, Mumbai",
    address: "Bandra West, Mumbai, Maharashtra, India",
    price: "Rs.3,00,00,000",
    beds: 3,
    baths: 2,
    area: "1500 Sq Ft",
    type: "Apartment, Residential",
    image: h1,
    link: "/property-details",
  },
  {
    id: 2,
    title: "Luxurious 4BHK Villa in Whitefield, Bangalore",
    address: "Whitefield, Bangalore, Karnataka, India",
    price: "Rs.4,50,00,000",
    beds: 4,
    baths: 4,
    area: "3500 Sq Ft",
    type: "Villa, Residential",
    image: h2,
    link: "/property-details",
  },
  {
    id: 3,
    title: "Cozy 2BHK Flat in Sector 62, Noida",
    address: "Sector 62, Noida, Uttar Pradesh, India",
    price: "Rs.90,00,000",
    beds: 2,
    baths: 2,
    area: "1100 Sq Ft",
    type: "Flat, Residential",
    image: h3,
    link: "/property-details",
  },
  {
    id: 4,
    title: "Elegant 5BHK Bungalow in Jubilee Hills, Hyderabad",
    address: "Jubilee Hills, Hyderabad, Telangana, India",
    price: "Rs.20,00,00,000",
    beds: 5,
    baths: 5,
    area: "4500 Sq Ft",
    type: "Bungalow, Residential",
    image: h4,
    link: "/property-details",
  },
  {
    id: 5,
    title: "Modern 3BHK Penthouse in Vashi, Navi Mumbai",
    address: "Vashi, Navi Mumbai, Maharashtra, India",
    price: "Rs.2,50,00,000",
    beds: 3,
    baths: 3,
    area: "2000 Sq Ft",
    type: "Penthouse, Residential",
    image: h5,
    link: "/property-details",
  },
  {
    id: 6,
    title: "Luxury 6BHK Farmhouse in Chhatarpur, Delhi",
    address: "Chhatarpur, Delhi, India",
    price: "Rs.40,00,00,000",
    beds: 6,
    baths: 7,
    area: "8000 Sq Ft",
    type: "Farmhouse, Residential",
    image: h6,
    link: "/property-details",
  },
  {
    id: 7,
    title: "Premium 2BHK Flat in BTM Layout, Bangalore",
    address: "BTM Layout, Bangalore, Karnataka, India",
    price: "Rs.75,00,000",
    beds: 2,
    baths: 2,
    area: "950 Sq Ft",
    type: "Flat, Residential",
    image: h7,
    link: "/property-details",
  },
  {
    id: 8,
    title: "Cozy 3BHK House in Andheri East, Mumbai",
    address: "Andheri East, Mumbai, Maharashtra, India",
    price: "Rs.1,75,00,000",
    beds: 3,
    baths: 3,
    area: "1200 Sq Ft",
    type: "House, Residential",
    image: h8,
    link: "/property-details",
  },
  {
    id: 9,
    title: "Elegant 4BHK Duplex in Salt Lake, Kolkata",
    address: "Salt Lake, Kolkata, West Bengal, India",
    price: "Rs.2,80,00,000",
    beds: 4,
    baths: 4,
    area: "2100 Sq Ft",
    type: "Duplex, Residential",
    image: h9,
    link: "/property-details",
  },
  {
    id: 10,
    title: "Charming 1BHK Studio Apartment in MG Road, Pune",
    address: "MG Road, Pune, Maharashtra, India",
    price: "Rs.50,00,000",
    beds: 1,
    baths: 1,
    area: "600 Sq Ft",
    type: "Studio Apartment, Residential",
    image: h10,
    link: "/property-details",
  },
  // ... rest of your properties (ids 11-20)
];

const PropertyList = ({ viewType = "homepage" }) => {
  const [isGridView, setIsGridView] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarked, setBookmarked] = useState([]);
  const itemsPerPage = 9;

  const toggleBookmark = (propertyId) => {
    setBookmarked((prev) =>
      prev.includes(propertyId)
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  // Use state to hold our properties data so we can add, edit, or delete
  const [propertiesData, setPropertiesData] = useState([]);

  useEffect(() => {
    const shuffledProperties = [...properties].sort(() => Math.random() - 0.5);
    setPropertiesData(shuffledProperties);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProperties = propertiesData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(propertiesData.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // State for Add Service Modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newService, setNewService] = useState({
    title: "",
    address: "",
    price: "",
    beds: "",
    baths: "",
    area: "",
    type: "",
    image: "",
    link: "",
  });

  const handleAddServiceSubmit = () => {
    const newId = propertiesData.length
      ? Math.max(...propertiesData.map((p) => p.id)) + 1
      : 1;
    const serviceToAdd = { ...newService, id: newId };
    setPropertiesData([...propertiesData, serviceToAdd]);
    setIsAddModalOpen(false);
    setNewService({
      title: "",
      address: "",
      price: "",
      beds: "",
      baths: "",
      area: "",
      type: "",
      image: "",
      link: "",
    });
  };

  // State for Edit Service Modal
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editService, setEditService] = useState(null);

  const handleEditService = (property) => {
    setEditService(property);
    setIsEditModalOpen(true);
  };

  const handleEditServiceSubmit = () => {
    setPropertiesData(
      propertiesData.map((p) => (p.id === editService.id ? editService : p))
    );
    setIsEditModalOpen(false);
    setEditService(null);
  };

  const handleDeleteService = (id) => {
    // Optionally add a confirmation here
    setPropertiesData(propertiesData.filter((prop) => prop.id !== id));
  };

  return (
    <Box p={5} px={{ base: 4, md: 8, lg: 14 }}>
      {/* Add Services Button */}
      <Button colorScheme="blue" onClick={() => setIsAddModalOpen(true)} mb={5}>
        Add Services
      </Button>

      {/* Header Text */}
      <Text fontSize="2xl" fontWeight="bold" textAlign="center">
        Manage All Real Estate Listings & Content Efficiently
      </Text>
      <Text fontSize="md" fontWeight="normal" textAlign="center" mb={5}>
        Add, edit, and update properties, services, blogs, and testimonials seamlessly from the admin panel.
      </Text>

      {viewType === "other" && (
        <Flex justifyContent="space-between" alignItems="center" mb={5}>
          <Text fontSize="2xl" fontWeight="bold">
            Properties
          </Text>
          <Flex>
            <IconButton
              icon={<FaTh />}
              aria-label="Grid View"
              onClick={() => setIsGridView(true)}
              background={isGridView ? "#3182ce" : "gray"}
              mr={2}
            />
            <IconButton
              icon={<FaList />}
              aria-label="List View"
              onClick={() => setIsGridView(false)}
              background={!isGridView ? "#3182ce" : "gray"}
            />
          </Flex>
        </Flex>
      )}

      {isGridView || viewType === "homepage" ? (
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          px={{ base: 4, md: 8 }}
          spacing={6}
        >
          {currentProperties.map((property) => (
            <Box
              key={property.id}
              position="relative"
              borderWidth="1px"
              borderRadius="md"
              overflow="hidden"
              boxShadow="lg"
            >
              <IconButton
                icon={
                  bookmarked.includes(property.id) ? (
                    <FaHeart />
                  ) : (
                    <FaRegHeart />
                  )
                }
                position="absolute"
                top={2}
                right={2}
                colorScheme={bookmarked.includes(property.id) ? "red" : "gray"}
                aria-label="Bookmark"
                onClick={() => toggleBookmark(property.id)}
                zIndex={1}
              />
              <Image src={property.image} alt={property.title} w="full" />
              <Box p={5}>
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                  {property.title}
                </Text>
                <Text color="gray.500" mb={2}>
                  {property.address}
                </Text>
                <Text fontWeight="bold" color="#3182ce" mb={2}>
                  {property.price}
                </Text>
                <Text fontSize="sm" color="gray.500" mb={2}>
                  {property.beds} Beds | {property.baths} Baths |{" "}
                  {property.area}
                </Text>
                <Button
                  background={"#3182ce"}
                  color={"white"}
                  as="a"
                  href={property.link}
                >
                  View Details
                </Button>
                <Flex mt={3} justifyContent="flex-end">
                  <IconButton
                    icon={<FaEdit />}
                    aria-label="Edit"
                    onClick={() => handleEditService(property)}
                    mr={2}
                  />
                  <IconButton
                    icon={<FaTrash />}
                    aria-label="Delete"
                    onClick={() => handleDeleteService(property.id)}
                  />
                </Flex>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      ) : (
        <Box>
          {currentProperties.map((property) => (
            <Box
              key={property.id}
              display="flex"
              borderWidth="1px"
              borderRadius="md"
              overflow="hidden"
              boxShadow="lg"
              mb={5}
            >
              <Image
                src={property.image}
                alt={property.title}
                boxSize="150px"
              />
              <Box p={5}>
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                  {property.title}
                </Text>
                <Text color="gray.500" mb={2}>
                  {property.address}
                </Text>
                <Text fontWeight="bold" color="#3182ce" mb={2}>
                  {property.price}
                </Text>
                <Text fontSize="sm" color="gray.500" mb={2}>
                  {property.beds} Beds | {property.baths} Baths |{" "}
                  {property.area}
                </Text>
                <Button
                  color={"white"}
                  background={"#3182ce"}
                  as="a"
                  href={property.link}
                >
                  View Details
                </Button>
                <Flex mt={3} justifyContent="flex-end">
                  <IconButton
                    icon={<FaEdit />}
                    aria-label="Edit"
                    onClick={() => handleEditService(property)}
                    mr={2}
                  />
                  <IconButton
                    icon={<FaTrash />}
                    aria-label="Delete"
                    onClick={() => handleDeleteService(property.id)}
                  />
                </Flex>
              </Box>
            </Box>
          ))}
        </Box>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {/* Add Service Modal */}
      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Service</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={3}>
              <FormLabel>Title</FormLabel>
              <Input
                value={newService.title}
                onChange={(e) =>
                  setNewService({ ...newService, title: e.target.value })
                }
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Address</FormLabel>
              <Input
                value={newService.address}
                onChange={(e) =>
                  setNewService({ ...newService, address: e.target.value })
                }
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Price</FormLabel>
              <Input
                value={newService.price}
                onChange={(e) =>
                  setNewService({ ...newService, price: e.target.value })
                }
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Beds</FormLabel>
              <Input
                value={newService.beds}
                onChange={(e) =>
                  setNewService({ ...newService, beds: e.target.value })
                }
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Baths</FormLabel>
              <Input
                value={newService.baths}
                onChange={(e) =>
                  setNewService({ ...newService, baths: e.target.value })
                }
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Area</FormLabel>
              <Input
                value={newService.area}
                onChange={(e) =>
                  setNewService({ ...newService, area: e.target.value })
                }
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Type</FormLabel>
              <Input
                value={newService.type}
                onChange={(e) =>
                  setNewService({ ...newService, type: e.target.value })
                }
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Image URL</FormLabel>
              <Input
                value={newService.image}
                onChange={(e) =>
                  setNewService({ ...newService, image: e.target.value })
                }
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Link</FormLabel>
              <Input
                value={newService.link}
                onChange={(e) =>
                  setNewService({ ...newService, link: e.target.value })
                }
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddServiceSubmit}>
              Save
            </Button>
            <Button onClick={() => setIsAddModalOpen(false)}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Edit Service Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setEditService(null);
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Service</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={3}>
              <FormLabel>Title</FormLabel>
              <Input
                value={editService?.title || ""}
                onChange={(e) =>
                  setEditService({ ...editService, title: e.target.value })
                }
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Address</FormLabel>
              <Input
                value={editService?.address || ""}
                onChange={(e) =>
                  setEditService({ ...editService, address: e.target.value })
                }
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Price</FormLabel>
              <Input
                value={editService?.price || ""}
                onChange={(e) =>
                  setEditService({ ...editService, price: e.target.value })
                }
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Beds</FormLabel>
              <Input
                value={editService?.beds || ""}
                onChange={(e) =>
                  setEditService({ ...editService, beds: e.target.value })
                }
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Baths</FormLabel>
              <Input
                value={editService?.baths || ""}
                onChange={(e) =>
                  setEditService({ ...editService, baths: e.target.value })
                }
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Area</FormLabel>
              <Input
                value={editService?.area || ""}
                onChange={(e) =>
                  setEditService({ ...editService, area: e.target.value })
                }
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Type</FormLabel>
              <Input
                value={editService?.type || ""}
                onChange={(e) =>
                  setEditService({ ...editService, type: e.target.value })
                }
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Image URL</FormLabel>
              <Input
                value={editService?.image || ""}
                onChange={(e) =>
                  setEditService({ ...editService, image: e.target.value })
                }
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Link</FormLabel>
              <Input
                value={editService?.link || ""}
                onChange={(e) =>
                  setEditService({ ...editService, link: e.target.value })
                }
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleEditServiceSubmit}>
              Save
            </Button>
            <Button
              onClick={() => {
                setIsEditModalOpen(false);
                setEditService(null);
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default PropertyList;
