import React, { useState } from 'react';
import { Box, Grid, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, Textarea, useDisclosure, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import profile from '../assets/profile.png';
import Pagination from './common/Pagination';

const TestimonialGrid = () => {
  const [testimonials, setTestimonials] = useState([
    { name: "John Doe", avatar: "https://via.placeholder.com/50", description: "Great service and reliable!" },
    { name: "Jane Smith", avatar: "https://via.placeholder.com/50", description: "A very professional experience!" },
    { name: "Mike Johnson", avatar: "https://via.placeholder.com/50", description: "Highly recommend for anyone looking for a new property." },
    { name: "Emily Davis", avatar: "https://via.placeholder.com/50", description: "Amazing team, they helped me find the perfect home." },
    { name: "Chris Lee", avatar: "https://via.placeholder.com/50", description: "Fantastic customer service, made buying easy." },
    { name: "Sarah Brown", avatar: "https://via.placeholder.com/50", description: "Knowledgeable and friendly agents." },
    { name: "David Wilson", avatar: "https://via.placeholder.com/50", description: "A seamless process from start to finish." },
    { name: "Laura Miller", avatar: "https://via.placeholder.com/50", description: "The best real estate experience I've had!" },
    { name: "James Anderson", avatar: "https://via.placeholder.com/50", description: "Trustworthy agents with great advice." },
    { name: "Olivia Taylor", avatar: "https://via.placeholder.com/50", description: "Very happy with my new home, thank you!" }
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Box ml={'10px'}>
      <Button onClick={onOpen} colorScheme="teal" mb={4}>Add Testimonial</Button>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {currentTestimonials.map((item, index) => (
          <Box
            key={index}
            p={5}
            borderWidth="1px"
            borderRadius="lg"
            bgGradient="linear(to-r, teal.500, blue.500)"
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
            <Button colorScheme="teal" onClick={handleAddTestimonial}>Add Testimonial</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default TestimonialGrid;
