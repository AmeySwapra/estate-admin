import React from 'react';
import PropertyGrid from '../component/ProductsList';
import { Box, Flex } from '@chakra-ui/react';
import Header from '../component/common/Header';
import Sidebar from '../component/common/Sidebar';

import pic1 from "../assets/products/pic1.jpg";
import pic2 from "../assets/products/pic2.jpg";
import pic3 from "../assets/products/pic3.jpg";
import pic4 from "../assets/products/pic4.jpg";
import pic5 from "../assets/products/pic5.jpg";
import pic6 from "../assets/products/pic6.jpg";
import pic7 from "../assets/products/pic7.jpg";
import pic8 from "../assets/products/pic8.jpg";
import pic9 from "../assets/products/pic9.jpg";
import pic10 from "../assets/products/pic10.jpg";
import pic11 from "../assets/products/pic11.jpg";
import pic12 from "../assets/products/pic12.jpg";
import pic13 from "../assets/products/pic13.jpg";
import pic14 from "../assets/products/pic14.jpg";
import pic15 from "../assets/products/pic15.jpg";
import pic16 from "../assets/products/pic16.jpg";


const products = [
  { id: 1, name: "Almonds", price: 499, category: "Nuts", image: pic1 },
  { id: 2, name: "Cashews", price: 599, category: "Nuts", image: pic2 },
  { id: 3, name: "Walnuts", price: 699, category: "Nuts", image: pic3 },
  { id: 4, name: "Pistachios", price: 799, category: "Nuts", image: pic4 },
  { id: 5, name: "Raisins", price: 399, category: "Dried Fruits", image: pic5 },
  { id: 6, name: "Dates", price: 499, category: "Dried Fruits", image: pic6 },
  { id: 7, name: "Figs", price: 599, category: "Dried Fruits", image: pic7 },
  { id: 8, name: "Apricots", price: 699, category: "Dried Fruits", image: pic8 },
  { id: 9, name: "Hazelnuts", price: 899, category: "Nuts", image: pic9 },
  { id: 10, name: "Pine Nuts", price: 999, category: "Nuts", image: pic10 },
  { id: 11, name: "Brazil Nuts", price: 799, category: "Nuts", image: pic11 },
  { id: 12, name: "Macadamia Nuts", price: 1299, category: "Nuts", image: pic12 },
  { id: 13, name: "Pecans", price: 1099, category: "Nuts", image: pic13 },
  { id: 14, name: "Cranberries", price: 499, category: "Dried Fruits", image: pic14 },
  { id: 15, name: "Prunes", price: 599, category: "Dried Fruits", image: pic15 },
  { id: 16, name: "Goji Berries", price: 899, category: "Dried Fruits", image: pic16 },
  { id: 17, name: "Blueberries", price: 699, category: "Dried Fruits", image: pic1 },
  { id: 18, name: "Cherries", price: 799, category: "Dried Fruits", image: pic2 },
  { id: 19, name: "Mango Slices", price: 499, category: "Dried Fruits", image: pic3 },
  { id: 20, name: "Pineapple Chunks", price: 599, category: "Dried Fruits", image: pic4 },
  { id: 21, name: "Coconut Flakes", price: 399, category: "Dried Fruits", image: pic5 },
  { id: 22, name: "Banana Chips", price: 299, category: "Dried Fruits", image: pic6 },
  { id: 23, name: "Papaya Chunks", price: 499, category: "Dried Fruits", image: pic7 },
  { id: 24, name: "Kiwi Slices", price: 699, category: "Dried Fruits", image: pic8 },
  { id: 25, name: "Peaches", price: 799, category: "Dried Fruits", image: pic9 },
  { id: 26, name: "Apples", price: 499, category: "Dried Fruits", image: pic10 },
  { id: 27, name: "Pears", price: 599, category: "Dried Fruits", image: pic11 },
  { id: 28, name: "Strawberries", price: 899, category: "Dried Fruits", image: pic12 },
  { id: 29, name: "Raspberries", price: 999, category: "Dried Fruits", image: pic13 },
  { id: 30, name: "Blackberries", price: 899, category: "Dried Fruits", image: pic14 },
  { id: 31, name: "Guava Slices", price: 499, category: "Dried Fruits", image: pic15 },
  { id: 32, name: "Jackfruit Chips", price: 699, category: "Dried Fruits", image: pic16 },
  { id: 33, name: "Dragon Fruit Slices", price: 1299, category: "Dried Fruits", image: pic1 },
  { id: 34, name: "Star Fruit Slices", price: 899, category: "Dried Fruits", image: pic2 },
  { id: 35, name: "Mulberries", price: 799, category: "Dried Fruits", image: pic3 },
  { id: 36, name: "Currants", price: 499, category: "Dried Fruits", image: pic4 },
  { id: 37, name: "Elderberries", price: 699, category: "Dried Fruits", image: pic5 },
  { id: 38, name: "Golden Raisins", price: 599, category: "Dried Fruits", image: pic6 },
  { id: 39, name: "Sultanas", price: 499, category: "Dried Fruits", image: pic7 },
  { id: 40, name: "Dried Apricots", price: 699, category: "Dried Fruits", image: pic8 },
  { id: 41, name: "Dried Figs", price: 799, category: "Dried Fruits", image: pic9 },
  { id: 42, name: "Dried Mango", price: 899, category: "Dried Fruits", image: pic10 },
  { id: 43, name: "Dried Papaya", price: 499, category: "Dried Fruits", image: pic11 },
  { id: 44, name: "Dried Pineapple", price: 599, category: "Dried Fruits", image: pic12 },
  { id: 45, name: "Dried Coconut", price: 399, category: "Dried Fruits", image: pic13 },
  { id: 46, name: "Dried Banana", price: 299, category: "Dried Fruits", image: pic14 },
  { id: 47, name: "Dried Guava", price: 499, category: "Dried Fruits", image: pic15 },
  { id: 48, name: "Dried Kiwi", price: 699, category: "Dried Fruits", image: pic16 },
  { id: 49, name: "Dried Peach", price: 799, category: "Dried Fruits", image: pic1 },
  { id: 50, name: "Dried Pear", price: 599, category: "Dried Fruits", image: pic2 },
];

function ProductPage() {
    return (
        <Flex height="100vh">
            <Sidebar />
            <Box flex="1" display="flex" flexDirection="column">
                <Header />
                <Box flex="1"  overflowY="auto">
                    <PropertyGrid products={products} />
                </Box>
            </Box>
        </Flex>
    );
}

export default ProductPage;
