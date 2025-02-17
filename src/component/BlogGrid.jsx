import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Text,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Textarea,
  useDisclosure,
  Image,
  FormControl,
  FormLabel,
  Flex,
} from "@chakra-ui/react";
import { FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa";

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

const BlogList = () => {
  // Initial blogs data
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Top 5 Tips for First-Time Home Buyers",
      image: h1,
      overview:
        "Buying your first home can be overwhelming. Here are 5 essential tips to help you navigate the process with confidence.",
      detailDescription:
        "Buying your first home is an exciting milestone, but it can also be overwhelming. To help you navigate the process, here are five essential tips: 1. **Determine Your Budget**: Before you start looking at homes, figure out how much you can afford. Use online calculators to estimate your monthly mortgage payments. 2. **Get Pre-Approved for a Mortgage**: A pre-approval letter shows sellers that you’re a serious buyer and can give you an edge in competitive markets. 3. **Work with a Real Estate Agent**: A good agent can guide you through the process, negotiate on your behalf, and help you find the right home. 4. **Research Neighborhoods**: Consider factors like schools, commute times, and future development when choosing a location. 5. **Don’t Skip the Home Inspection**: A professional inspection can uncover potential issues and save you from costly repairs down the road. By following these tips, you’ll be well-prepared to make one of the biggest financial decisions of your life.",
    },
    {
      id: 2,
      title: "How to Stage Your Home for a Quick Sale",
      image: h4,
      overview:
        "Staging your home can make it more appealing to buyers and help you sell faster. Learn the best staging tips here.",
      detailDescription:
        "Staging your home is one of the most effective ways to attract buyers and sell your property quickly. Start by decluttering and depersonalizing your space to help buyers envision themselves living there. Rearrange furniture to create an open and inviting layout, and add fresh coats of neutral paint to brighten up rooms. Don’t forget about curb appeal—clean up the exterior, trim the lawn, and add potted plants to create a welcoming entrance. Finally, consider hiring a professional stager to maximize your home’s potential. With these tips, you’ll be well on your way to a quick and successful sale.",
    },
    {
      id: 3,
      title: "The Pros and Cons of Investing in Rental Properties",
      image: h5,
      overview:
        "Investing in rental properties can be lucrative, but it’s not without risks. Here’s what you need to know before diving in.",
      detailDescription:
        "Investing in rental properties can provide a steady stream of passive income and long-term wealth-building opportunities. However, it’s not without its challenges. On the plus side, rental properties can generate consistent cash flow, offer tax benefits, and appreciate in value over time. On the downside, being a landlord comes with responsibilities like property maintenance, tenant management, and dealing with vacancies. Additionally, market fluctuations can impact your returns. Before investing, thoroughly research the market, crunch the numbers, and consider working with a property management company to handle day-to-day operations. With careful planning, rental properties can be a rewarding investment.",
    },
    {
      id: 4,
      title: "Understanding Mortgage Rates: Fixed vs. Adjustable",
      image: h9,
      overview:
        "Choosing between a fixed-rate and adjustable-rate mortgage can impact your finances for years. Learn the differences here.",
      detailDescription:
        "When it comes to mortgages, one of the biggest decisions you’ll face is choosing between a fixed-rate and an adjustable-rate mortgage (ARM). A fixed-rate mortgage offers stability, with the same interest rate and monthly payment for the life of the loan. This is ideal for buyers who plan to stay in their home long-term. On the other hand, an ARM typically starts with a lower interest rate that can fluctuate over time, based on market conditions. While this can save you money initially, it also introduces uncertainty. Consider your financial goals, risk tolerance, and how long you plan to stay in the home before making a decision. Consulting with a mortgage advisor can also help you choose the best option for your situation.",
    },
    {
      id: 5,
      title: "The Benefits of Green Homes in Real Estate",
      image: h7,
      overview:
        "Green homes are becoming increasingly popular. Discover the benefits of eco-friendly living and how it impacts real estate.",
      detailDescription:
        "Green homes are designed to be energy-efficient, environmentally friendly, and sustainable. They offer numerous benefits, including lower utility bills, improved indoor air quality, and reduced environmental impact. Features like solar panels, energy-efficient appliances, and sustainable building materials can increase a home’s value and appeal to eco-conscious buyers. Additionally, many governments offer incentives and tax credits for green home improvements. As more buyers prioritize sustainability, green homes are becoming a smart investment in the real estate market. Whether you’re buying or selling, incorporating eco-friendly features can set your property apart and contribute to a healthier planet.",
    },
    {
      id: 6,
      title: "How to Choose the Right Real Estate Agent",
      image: h10,
      overview:
        "A good real estate agent can make all the difference in your home-buying or selling experience. Here’s how to find the right one.",
      detailDescription:
        "Choosing the right real estate agent is crucial to a successful home-buying or selling experience. Start by asking for recommendations from friends, family, or colleagues who have recently worked with an agent. Look for someone with experience in your local market and a proven track record of success. Interview multiple agents to gauge their communication style, responsiveness, and knowledge. Don’t be afraid to ask for references or read online reviews. A good agent will listen to your needs, provide honest advice, and guide you through every step of the process. Taking the time to find the right agent can save you time, money, and stress in the long run.",
    },
    {
      id: 7,
      title: "The Impact of Location on Property Value",
      image: h2,
      overview:
        "Location is one of the most critical factors in determining property value. Learn why it matters and how to choose the right location.",
      detailDescription:
        "The location of a property plays a significant role in its value and desirability. Factors like proximity to schools, public transportation, shopping centers, and employment hubs can greatly influence a property’s price. Additionally, neighborhoods with low crime rates, good infrastructure, and future development potential tend to appreciate in value over time. When buying a property, consider not only your current needs but also the long-term potential of the location. A well-chosen location can provide a higher return on investment and a better quality of life.",
    },
    {
      id: 8,
      title: "The Rise of Smart Homes in Real Estate",
      image: h3,
      overview:
        "Smart homes are revolutionizing the real estate market. Discover how technology is changing the way we live and buy homes.",
      detailDescription:
        "Smart homes, equipped with advanced technology like automated lighting, security systems, and energy-efficient appliances, are becoming increasingly popular among buyers. These features not only enhance convenience and security but also reduce energy consumption and utility costs. As more buyers prioritize technology-driven living, smart homes are becoming a key selling point in the real estate market. Whether you’re buying or selling, incorporating smart home features can increase your property’s value and appeal to tech-savvy buyers.",
    },
    {
      id: 9,
      title: "The Importance of Home Insurance",
      image: h6,
      overview:
        "Home insurance is a crucial aspect of homeownership. Learn why it’s important and how to choose the right policy.",
      detailDescription:
        "Home insurance protects your property and belongings from unforeseen events like natural disasters, theft, and accidents. It also provides liability coverage in case someone is injured on your property. When choosing a policy, consider factors like coverage limits, deductibles, and additional riders for specific risks. A well-chosen home insurance policy can provide peace of mind and financial security, ensuring that you’re prepared for any unexpected events.",
    },
    {
      id: 10,
      title: "The Future of Real Estate: Trends to Watch",
      image: h8,
      overview:
        "The real estate industry is constantly evolving. Explore the latest trends shaping the future of real estate.",
      detailDescription:
        "The real estate industry is undergoing significant changes, driven by technology, sustainability, and shifting buyer preferences. Trends like virtual reality tours, blockchain-based transactions, and eco-friendly building materials are transforming the way we buy and sell homes. Additionally, the rise of remote work is influencing location preferences, with more buyers opting for suburban and rural areas. Staying informed about these trends can help you make smarter decisions and stay ahead in the ever-changing real estate market.",
    },
  ]);


  const {
    isOpen: isAddOpen,
    onOpen: onAddOpen,
    onClose: onAddClose,
  } = useDisclosure();
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();


  const [newBlog, setNewBlog] = useState({
    title: "",
    overview: "",
    image: "",
    detailDescription: "",
  });

  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleAddInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const handleAddBlog = () => {
    const newId = blogs.length ? Math.max(...blogs.map((b) => b.id)) + 1 : 1;
    const blogToAdd = { ...newBlog, id: newId };
    setBlogs([...blogs, blogToAdd]);
    
    setNewBlog({
      title: "",
      overview: "",
      image: "",
      detailDescription: "",
    });
    onAddClose();
  };

  
  const handleEditClick = (blog) => {
    setSelectedBlog(blog);
    onEditOpen();
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedBlog({ ...selectedBlog, [name]: value });
  };

  const handleEditBlog = () => {
    setBlogs(
      blogs.map((blog) => (blog.id === selectedBlog.id ? selectedBlog : blog))
    );
    setSelectedBlog(null);
    onEditClose();
  };

  const handleDeleteClick = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const currentBlogs = blogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const onPageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Box p={5}>
      {/* Add Blog Button */}
      <Button leftIcon={<FaPlus />} colorScheme="blue" mb={6} onClick={onAddOpen}>
        Add Blog
      </Button>

      {/* Blog Cards Grid */}
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
        {currentBlogs.map((blog) => (
          <Box
            key={blog.id}
            p={5}
            shadow="dark-lg"
            borderWidth="1px"
            borderRadius="lg"
            transition="transform 0.3s"
            _hover={{ transform: "scale(1.03)", boxShadow: "lg" }}
            bg="white"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              height="200px"
              width="100%"
              objectFit="cover"
              borderRadius="md"
            />
            <Box mt={4}>
              <Text fontSize="xl" fontWeight="bold">
                {blog.title}
              </Text>
              <Text mt={2} color="gray.600">
                {blog.overview}
              </Text>
            </Box>
            <Flex mt={4} justifyContent="flex-end">
              <IconButton
                icon={<FaEdit />}
                onClick={() => handleEditClick(blog)}
                mr={3}
                aria-label="Edit Blog"
                variant="outline"
                colorScheme="blue"
              />
              <IconButton
                icon={<FaTrashAlt />}
                onClick={() => handleDeleteClick(blog.id)}
                aria-label="Delete Blog"
                variant="outline"
                colorScheme="red"
              />
            </Flex>
          </Box>
        ))}
      </Grid>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />

      {/* Add Blog Modal */}
      <Modal isOpen={isAddOpen} onClose={onAddClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Blog</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>Title</FormLabel>
              <Input
                name="title"
                value={newBlog.title}
                onChange={handleAddInputChange}
                placeholder="Enter blog title"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Overview</FormLabel>
              <Textarea
                name="overview"
                value={newBlog.overview}
                onChange={handleAddInputChange}
                placeholder="Enter a brief overview"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Image URL</FormLabel>
              <Input
                name="image"
                value={newBlog.image}
                onChange={handleAddInputChange}
                placeholder="Enter image URL"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Detail Description</FormLabel>
              <Textarea
                name="detailDescription"
                value={newBlog.detailDescription}
                onChange={handleAddInputChange}
                placeholder="Enter the detailed description"
              />
            </FormControl>
            <Button colorScheme="blue" onClick={handleAddBlog} width="100%">
              Add Blog
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Edit Blog Modal */}
      <Modal isOpen={isEditOpen} onClose={onEditClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Blog</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedBlog && (
              <>
                <FormControl mb={4}>
                  <FormLabel>Title</FormLabel>
                  <Input
                    name="title"
                    value={selectedBlog.title}
                    onChange={handleEditInputChange}
                    placeholder="Enter blog title"
                  />
                </FormControl>
                <FormControl mb={4}>
                  <FormLabel>Overview</FormLabel>
                  <Textarea
                    name="overview"
                    value={selectedBlog.overview}
                    onChange={handleEditInputChange}
                    placeholder="Enter a brief overview"
                  />
                </FormControl>
                <FormControl mb={4}>
                  <FormLabel>Image URL</FormLabel>
                  <Input
                    name="image"
                    value={selectedBlog.image}
                    onChange={handleEditInputChange}
                    placeholder="Enter image URL"
                  />
                </FormControl>
                <FormControl mb={4}>
                  <FormLabel>Detail Description</FormLabel>
                  <Textarea
                    name="detailDescription"
                    value={selectedBlog.detailDescription}
                    onChange={handleEditInputChange}
                    placeholder="Enter the detailed description"
                  />
                </FormControl>
                <Button colorScheme="blue" onClick={handleEditBlog} width="100%">
                  Save Changes
                </Button>
              </>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default BlogList;
