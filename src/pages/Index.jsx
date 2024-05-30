import { Container, Text, VStack, Box, Image, Heading, SimpleGrid, Button, Input } from "@chakra-ui/react";
import { useState } from "react";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: "$699",
    imageUrl: "/images/smartphone.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for professionals",
    price: "$999",
    imageUrl: "/images/laptop.jpg",
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    price: "$199",
    imageUrl: "/images/headphones.jpg",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredProducts = sampleProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Welcome to Electronics Store</Heading>
        <Text fontSize="xl">Find the best electronics at unbeatable prices</Text>
        <Input
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearchChange}
          mb={6}
        />
        <SimpleGrid columns={[1, 2, 3]} spacing={10} width="100%">
          {filteredProducts.map((product) => (
          
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.imageUrl} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={2}>{product.name}</Heading>
                <Text mb={4}>{product.description}</Text>
                <Text fontSize="xl" fontWeight="bold" mb={4}>{product.price}</Text>
                <Button colorScheme="teal">Add to Cart</Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;