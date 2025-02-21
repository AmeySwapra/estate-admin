import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Image,
  Text,
  VStack,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "@chakra-ui/react";
import Pagination from "../component/common/Pagination";

const ProductsList = ({ products }) => {
  const [productsData, setProductsData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });
  const [editProduct, setEditProduct] = useState(null);
  const toast = useToast();
  const itemsPerPage = 10;

  useEffect(() => {
    const shuffledProducts = [...products].sort(() => Math.random() - 0.5);
    setProductsData(shuffledProducts);
  }, [products]);

  const handleAddProduct = () => {
    if (
      !newProduct.name ||
      !newProduct.price ||
      !newProduct.category ||
      !newProduct.image
    ) {
      toast({
        title: "Please fill all fields",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setProductsData([...productsData, { ...newProduct, id: Date.now() }]);
    setIsModalOpen(false);
    setNewProduct({ name: "", price: "", category: "", image: "" });
  };

  const handleEditProduct = (product) => {
    setEditProduct(product);
    setIsEditModalOpen(true);
  };

  const handleUpdateProduct = () => {
    setProductsData(
      productsData.map((item) =>
        item.id === editProduct.id ? editProduct : item
      )
    );
    setIsEditModalOpen(false);
    setEditProduct(null);
  };

  const handleDeleteProduct = (id) => {
    setProductsData(productsData.filter((item) => item.id !== id));
    toast({
      title: "Product deleted",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productsData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(productsData.length / itemsPerPage);

  return (
    <Box p={5}>
      <Heading mb={4}>Products List</Heading>
      <Button
        bg="green.500"
        color="white"
        onClick={() => setIsModalOpen(true)}
        mb={4}
      >
        Add Product
      </Button>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} spacing={5}>
        {currentItems.map((product) => (
          <VStack
            key={product.id}
            p={5}
            borderWidth={1}
            borderRadius={5}
            boxShadow={'dark-lg'}
            spacing={3}
          >
            <Image
              src={product.image}
              alt={product.name}
              boxSize="150px"
              objectFit="cover"
            />
            <Text fontWeight="bold">{product.name}</Text>
            <Text>${product.price}</Text>
            <Text>Category: {product.category}</Text>
            <Button
              size="sm"
              bg="green.500"
              color="white"
              onClick={() => handleEditProduct(product)}
            >
              Edit
            </Button>
            <Button
              size="sm"
              colorScheme="red"
              onClick={() => handleDeleteProduct(product.id)}
            >
              Delete
            </Button>
          </VStack>
        ))}
      </SimpleGrid>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />

      {/* Add Product Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Product</ModalHeader>
          <ModalBody>
            <Input
              placeholder="Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              mb={3}
            />
            <Input
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              mb={3}
            />
            <Input
              placeholder="Category"
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
              mb={3}
            />
            <Input
              placeholder="Image URL"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleAddProduct}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Edit Product Modal */}
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Product</ModalHeader>
          <ModalBody>
            <Input
              placeholder="Name"
              value={editProduct?.name || ""}
              onChange={(e) =>
                setEditProduct({ ...editProduct, name: e.target.value })
              }
              mb={3}
            />
            <Input
              placeholder="Price"
              value={editProduct?.price || ""}
              onChange={(e) =>
                setEditProduct({ ...editProduct, price: e.target.value })
              }
              mb={3}
            />
            <Input
              placeholder="Category"
              value={editProduct?.category || ""}
              onChange={(e) =>
                setEditProduct({ ...editProduct, category: e.target.value })
              }
              mb={3}
            />
            <Input
              placeholder="Image URL"
              value={editProduct?.image || ""}
              onChange={(e) =>
                setEditProduct({ ...editProduct, image: e.target.value })
              }
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" onClick={handleUpdateProduct}>
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductsList;
