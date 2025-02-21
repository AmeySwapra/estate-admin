import React, { useState } from 'react';
import { Box, Grid, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, Textarea, useDisclosure, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import profile from '../assets/profile.png';
import Pagination from './common/Pagination';

const gradients = [
  "linear(to-r, orange.400, yellow.300)",
  "linear(to-r, red.400, pink.300)",
  "linear(to-r, green.500, yellow.500)",
  "linear(to-r, teal.400, cyan.300)",
  "linear(to-r, purple.400, blue.300)"
];

const TestimonialGrid = () => {
  const [testimonials, setTestimonials] = useState([
    { name: "Amit Sharma", avatar: "https://via.placeholder.com/50", description: "The best quality dry fruits I've ever had! Fresh and delicious!" },
    { name: "Priya Kapoor", avatar: "https://via.placeholder.com/50", description: "Amazing nuts and great packaging. Highly recommend MyStore!" },
    { name: "Rahul Verma", avatar: "https://via.placeholder.com/50", description: "Premium quality almonds and cashews at the best prices!" },
    { name: "Sneha Mehta", avatar: "https://via.placeholder.com/50", description: "Super fresh and tasty dry fruits. Love their customer service!" },
    { name: "Vikram Malhotra", avatar: "https://via.placeholder.com/50", description: "Best pistachios and walnuts I've ever purchased!" },
    { name: "Neha Singh", avatar: "https://via.placeholder.com/50", description: "Their dried figs are just amazing. So fresh and natural!" },
    { name: "Arjun Patel", avatar: "https://via.placeholder.com/50", description: "Great variety and top-notch quality. Always my go-to store!" },
    { name: "Rohit Desai", avatar: "https://via.placeholder.com/50", description: "Healthy and delicious dry fruits at reasonable prices!" }
  ]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [testimonial, setTestimonial] = useState({ name: "", avatar: "", description: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleAddTestimonial = () => {
    setTestimonials([...testimonials, testimonial]);
    onClose();
  };

  const handleDeleteTestimonial = (index) => {
    const updatedTestimonials = testimonials.filter((_, idx) => idx !== index);
    setTestimonials(updatedTestimonials);
  };

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const currentTestimonials = testimonials.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Box ml={'10px'}>
      <Button onClick={onOpen} colorScheme="orange" mb={4}>Add Testimonial</Button>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {currentTestimonials.map((item, index) => (
          <Box
            key={index}
            p={5}
            borderWidth="1px"
            borderRadius="lg"
            bgGradient={gradients[index % gradients.length]}
            color="white"
            position="relative"
          >
            <IconButton
              icon={<DeleteIcon />}
              position="absolute"
              top="10px"
              right="10px"
              size="sm"
              colorScheme="red"
              onClick={() => handleDeleteTestimonial(index)}
            />
            <Box mb={3} display="flex" alignItems="center">
              <img src={profile} alt={item.name} width={50} height={50} style={{ borderRadius: '50%' }} />
              <Box ml={3}>
                <Box fontWeight="bold">{item.name}</Box>
              </Box>
            </Box>
            <Box>{item.description}</Box>
          </Box>
        ))}
      </Grid>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Testimonial</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={3}>
              <FormLabel>Name</FormLabel>
              <Input
                value={testimonial.name}
                onChange={(e) => setTestimonial({ ...testimonial, name: e.target.value })}
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Avatar URL</FormLabel>
              <Input
                value={testimonial.avatar}
                onChange={(e) => setTestimonial({ ...testimonial, avatar: e.target.value })}
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Description</FormLabel>
              <Textarea
                value={testimonial.description}
                onChange={(e) => setTestimonial({ ...testimonial, description: e.target.value })}
              />
            </FormControl>
            <Button colorScheme="orange" onClick={handleAddTestimonial}>Add Testimonial</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default TestimonialGrid;
