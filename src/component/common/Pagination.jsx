import { HStack, Button, Text } from '@chakra-ui/react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <HStack spacing="4" justifyContent="center" mt="8">
      <Button
        isDisabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        color="white"
          bg='green.500'
      >
        Previous
      </Button>
      <Text>
        Page {currentPage} of {totalPages}
      </Text>
      <Button
        isDisabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        color="white"
          bg='green.500'
      >
        Next
      </Button>
    </HStack>
  );
};

export default Pagination;