import { Text, Box, Flex, Heading, Image, Button, SimpleGrid } from "@chakra-ui/react";
import { items, orders } from "@/assets/db.js";
import styles from "@/styles/Browse_item.module.css";

export default function BrowseItem() {
    // Restaurant Information Component
    const restaurantInfo = (
        <Box className={styles.container}>
            <Image className={styles.restaurant_logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFyHhGekiYtDYCxBoJMla0eg68Hh03gYyoa-wdlzrVfA&s" width={100} height={100} alt="Restaurant Image" mx="auto" mb={4} />
            <Heading className={styles.restaurant_name} as="h1" size="xl">Guzman y Gomez</Heading>
            <Text className={styles.restaurant_location} mt={2}>Location: Address, City, Country</Text>
            <Text>Rating</Text>
        </Box>
    );
    return (
        <>
            {restaurantInfo}
            <SimpleGrid columns={2} spacing={8} maxW="1200px" mx="auto">
                {items && items.map(item => (
                    <Flex key={item.id} className={styles.item_card} p={5} shadow="md" borderWidth="1px" borderRadius="md">
                        {/* Image on the right */}
                        <Box className={styles.item_image} mr={4}>
                            <Image src={item.img} alt={item.title} height="100px" width="200px" objectFit="cover" />
                        </Box>

                        {/* Content */}
                        <Flex direction="column" justify="space-between">
                            {/* Header */}
                            <Box>
                                <Heading className={styles.item_title} as="h2" size="md">{item.title}</Heading>
                            </Box>

                            {/* Description */}
                            <Text className={styles.item_description} mt={2}>{item.description}</Text>

                            {/* Price */}
                            <Flex align="center" justify="space-between" mt={2}>
                                <Box>
                                    <Text className={styles.item_price} fontSize="lg" fontWeight="bold">${item.price}</Text>
                                </Box>
                                <Box className={styles.add_button}>
                                    <Button style={{ backgroundColor: "#83b67f", color: "white", width: "60px", borderRadius: "5px", height: "30px", borderColor: "#83b67f" }}>Add</Button>
                                </Box>
                            </Flex>
                        </Flex>
                    </Flex>
                ))}
            </SimpleGrid>
        </>
    );
}
