import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  VStack,
  Text,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "@chakra-ui/react";

const DiscountManagement = () => {
  const toast = useToast();
  const [discounts, setDiscounts] = useState([
    { id: 1, code: "SAVE10", percentage: 10, description: "Get 10% off on all orders" },
    { id: 2, code: "WELCOME15", percentage: 15, description: "15% off for new users" },
    { id: 3, code: "FESTIVE20", percentage: 20, description: "Special 20% off on festivals" },
    { id: 4, code: "SPRING25", percentage: 25, description: "Spring Sale - 25% discount" },
    { id: 5, code: "FLASH30", percentage: 30, description: "Limited-time 30% discount" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newDiscount, setNewDiscount] = useState({ code: "", percentage: "", description: "" });
  const [editDiscount, setEditDiscount] = useState(null);

  const gradientColors = [
    "linear(to-r, teal.400, blue.500)",
    "linear(to-r, purple.400, pink.500)",
    "linear(to-r, orange.400, red.500)",
    "linear(to-r, green.400, yellow.500)",
    "linear(to-r, cyan.400, purple.500)",
  ];

  
  const handleAddDiscount = () => {
    if (!newDiscount.code || !newDiscount.percentage || !newDiscount.description) {
      toast({ title: "Please fill all fields", status: "warning", duration: 3000, isClosable: true });
      return;
    }
    setDiscounts([...discounts, { ...newDiscount, id: Date.now() }]);
    setIsModalOpen(false);
    setNewDiscount({ code: "", percentage: "", description: "" });
    toast({ title: "Discount added successfully", status: "success", duration: 3000, isClosable: true });
  };

  
  const handleEditDiscount = (discount) => {
    setEditDiscount(discount);
    setIsEditModalOpen(true);
  };

 
  const handleUpdateDiscount = () => {
    setDiscounts(discounts.map((d) => (d.id === editDiscount.id ? editDiscount : d)));
    setIsEditModalOpen(false);
    setEditDiscount(null);
    toast({ title: "Discount updated successfully", status: "success", duration: 3000, isClosable: true });
  };

  
  const handleDeleteDiscount = (id) => {
    setDiscounts(discounts.filter((d) => d.id !== id));
    toast({ title: "Discount deleted", status: "error", duration: 3000, isClosable: true });
  };

  return (
    <Box p={5}>
      <Heading mb={4} textAlign="center">
        Discount Management
      </Heading>
      <Button color='white' bg='green.500' onClick={() => setIsModalOpen(true)} mb={4}>
        Add Discount
      </Button>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
        {discounts.map((discount, index) => (
          <VStack
            key={discount.id}
            p={5}
            borderRadius="lg"
            spacing={3}
            boxShadow="md"
            bgGradient={gradientColors[index % gradientColors.length]} 
            color="white"
            textAlign="center"
          >
            <Text fontWeight="bold" fontSize="lg">
              {discount.code}
            </Text>
            <Text fontSize="xl">{discount.percentage}% Off</Text>
            <Text fontSize="sm">{discount.description}</Text>
            <Button size="sm" color='white' bg='green.500' onClick={() => handleEditDiscount(discount)}>
              Edit
            </Button>
            <Button size="sm" colorScheme="red" onClick={() => handleDeleteDiscount(discount.id)}>
              Delete
            </Button>
          </VStack>
        ))}
      </SimpleGrid>

      {/* Add Discount Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Discount</ModalHeader>
          <ModalBody>
            <Input placeholder="Code" value={newDiscount.code} onChange={(e) => setNewDiscount({ ...newDiscount, code: e.target.value })} mb={3} />
            <Input placeholder="Percentage" type="number" value={newDiscount.percentage} onChange={(e) => setNewDiscount({ ...newDiscount, percentage: e.target.value })} mb={3} />
            <Input placeholder="Description" value={newDiscount.description} onChange={(e) => setNewDiscount({ ...newDiscount, description: e.target.value })} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleAddDiscount}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Edit Discount Modal */}
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Discount</ModalHeader>
          <ModalBody>
            <Input placeholder="Code" value={editDiscount?.code || ""} onChange={(e) => setEditDiscount({ ...editDiscount, code: e.target.value })} mb={3} />
            <Input placeholder="Percentage" type="number" value={editDiscount?.percentage || ""} onChange={(e) => setEditDiscount({ ...editDiscount, percentage: e.target.value })} mb={3} />
            <Input placeholder="Description" value={editDiscount?.description || ""} onChange={(e) => setEditDiscount({ ...editDiscount, description: e.target.value })} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" onClick={handleUpdateDiscount}>
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default DiscountManagement;
