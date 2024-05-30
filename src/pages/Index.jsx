import { Container, Text, VStack, Box, Image, Heading, SimpleGrid, Button, Input, Select, Checkbox, CheckboxGroup, Stack, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from "@chakra-ui/react";
import { useState } from "react";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: 699,
    imageUrl: "/images/smartphone.jpg",
    category: "Electronics",
    brand: "BrandA"
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for professionals",
    price: 999,
    imageUrl: "/images/laptop.jpg",
    category: "Electronics",
    brand: "BrandB"
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    price: 199,
    imageUrl: "/images/headphones.jpg",
    category: "Accessories",
    brand: "BrandC"
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleBrandChange = (value) => {
    setSelectedBrands(value);
  };

  const handlePriceRangeChange = (value) => {
    setPriceRange(value);
  };

  const filteredProducts = sampleProducts.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchQuery) &&
      (selectedCategory === "" || product.category === selectedCategory) &&
      (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
    );
  });

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
        <Select placeholder="Select category" onChange={handleCategoryChange} mb={6}>
          <option value="Electronics">Electronics</option>
          <option value="Accessories">Accessories</option>
        </Select>
        <CheckboxGroup colorScheme="teal" onChange={handleBrandChange} mb={6}>
          <Stack spacing={5} direction="row">
            <Checkbox value="BrandA">BrandA</Checkbox>
            <Checkbox value="BrandB">BrandB</Checkbox>
            <Checkbox value="BrandC">BrandC</Checkbox>
          </Stack>
        </CheckboxGroup>
        <RangeSlider
          aria-label={['min', 'max']}
          defaultValue={[0, 1000]}
          min={0}
          max={1000}
          onChangeEnd={handlePriceRangeChange}
          mb={6}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
        <SimpleGrid columns={[1, 2, 3]} spacing={10} width="100%">
          {filteredProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.imageUrl} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={2}>{product.name}</Heading>
                <Text mb={4}>{product.description}</Text>
                <Text fontSize="xl" fontWeight="bold" mb={4}>${product.price}</Text>
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