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
  Select,
} from "@chakra-ui/react";

const OrderManagement = () => {
  const toast = useToast();
  const [orders, setOrders] = useState([
    { id: 1, customer: "John Doe", amount: "$120.00", status: "Pending" },
    { id: 2, customer: "Jane Smith", amount: "$250.00", status: "Shipped" },
    { id: 3, customer: "Alice Brown", amount: "$80.00", status: "Delivered" },
    { id: 4, customer: "Robert Wilson", amount: "$300.00", status: "Pending" },
    { id: 5, customer: "Michael Johnson", amount: "$500.00", status: "Cancelled" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newOrder, setNewOrder] = useState({ customer: "", amount: "", status: "Pending" });
  const [editOrder, setEditOrder] = useState(null);

  const gradientColors = [
    "linear(to-r, teal.400, blue.500)",
    "linear(to-r, purple.400, pink.500)",
    "linear(to-r, orange.400, red.500)",
    "linear(to-r, green.400, yellow.500)",
    "linear(to-r, cyan.400, purple.500)",
  ];

  
  const handleAddOrder = () => {
    if (!newOrder.customer || !newOrder.amount) {
      toast({ title: "Please fill all fields", status: "warning", duration: 3000, isClosable: true });
      return;
    }
    setOrders([...orders, { ...newOrder, id: Date.now() }]);
    setIsModalOpen(false);
    setNewOrder({ customer: "", amount: "", status: "Pending" });
    toast({ title: "Order added successfully", status: "success", duration: 3000, isClosable: true });
  };


  const handleEditOrder = (order) => {
    setEditOrder(order);
    setIsEditModalOpen(true);
  };

 
  const handleUpdateOrder = () => {
    setOrders(orders.map((o) => (o.id === editOrder.id ? editOrder : o)));
    setIsEditModalOpen(false);
    setEditOrder(null);
    toast({ title: "Order updated successfully", status: "success", duration: 3000, isClosable: true });
  };


  const handleDeleteOrder = (id) => {
    setOrders(orders.filter((o) => o.id !== id));
    toast({ title: "Order deleted", status: "error", duration: 3000, isClosable: true });
  };

  return (
    <Box p={5}>
      <Heading mb={4} textAlign="center">
        Order Management
      </Heading>
      <Button color='white' bg='green.500' onClick={() => setIsModalOpen(true)} mb={4}>
        Add Order
      </Button>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
        {orders.map((order, index) => (
          <VStack
            key={order.id}
            p={5}
            borderRadius="lg"
            spacing={3}
            boxShadow="md"
            bgGradient={gradientColors[index % gradientColors.length]}
            color="white"
            textAlign="center"
          >
            <Text fontWeight="bold" fontSize="lg">
              {order.customer}
            </Text>
            <Text fontSize="xl">{order.amount}</Text>
            <Text fontSize="md">Status: {order.status}</Text>
            <Button size="sm" color='white' bg='green.500' onClick={() => handleEditOrder(order)}>
              Edit
            </Button>
            <Button size="sm" colorScheme="red" onClick={() => handleDeleteOrder(order.id)}>
              Delete
            </Button>
          </VStack>
        ))}
      </SimpleGrid>

      {/* Add Order Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Order</ModalHeader>
          <ModalBody>
            <Input placeholder="Customer Name" value={newOrder.customer} onChange={(e) => setNewOrder({ ...newOrder, customer: e.target.value })} mb={3} />
            <Input placeholder="Amount" value={newOrder.amount} onChange={(e) => setNewOrder({ ...newOrder, amount: e.target.value })} mb={3} />
            <Select value={newOrder.status} onChange={(e) => setNewOrder({ ...newOrder, status: e.target.value })}>
              <option value="Pending">Pending</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleAddOrder}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Edit Order Modal */}
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Order</ModalHeader>
          <ModalBody>
            <Input placeholder="Customer Name" value={editOrder?.customer || ""} onChange={(e) => setEditOrder({ ...editOrder, customer: e.target.value })} mb={3} />
            <Input placeholder="Amount" value={editOrder?.amount || ""} onChange={(e) => setEditOrder({ ...editOrder, amount: e.target.value })} mb={3} />
            <Select value={editOrder?.status || "Pending"} onChange={(e) => setEditOrder({ ...editOrder, status: e.target.value })}>
              <option value="Pending">Pending</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" onClick={handleUpdateOrder}>
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default OrderManagement;
