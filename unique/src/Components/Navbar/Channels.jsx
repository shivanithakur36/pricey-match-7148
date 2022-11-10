import { Flex,useDisclosure,MenuItem,Menu,MenuButton,MenuList, Image,Text } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import "./tools.css"


function Channels(){
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <Menu isOpen={isOpen}>
            <MenuButton
                            _hover={{ bg:"none" }}
                            className="button"

                variant="ghost"
                mx={1}
                borderRadius={5}
                aria-label="Courses"
                px={4}
                py={[1, 2, 2]}
                border="none"
                bg="white"
                size='lg'
                font-fontFamily=" Roboto, sans-serif"

                onMouseLeave={onClose}

                onMouseEnter={onOpen}

                fontSize='16px'
                fontWeight="normal"

            >
                Channels {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList bg="white" onMouseEnter={onOpen} onMouseLeave={onClose} w="300px" p="10px">
                <MenuItem p="10px" borderRadius="5px" border="none">
                    <Flex gap="10px">
                        <Image src="https://i.ibb.co/QDb78By/1.png" w="2rem" h="2rem"/>
                        <Text as='b'>Facebook</Text>
                    </Flex>
                </MenuItem>
                <MenuItem p="10px" border="none">
                    <Flex gap="10px">
                        <Image src="https://i.ibb.co/KNnFScS/2.png" w="2rem" h="2rem"/>
                        <Text as='b'>Google Business Profile</Text>
                    </Flex>
                </MenuItem>
                <MenuItem p="10px" border="none">
                    <Flex gap="10px">
                        <Image src="https://i.ibb.co/W58qWXR/3.png" w="2rem" h="2rem"/>
                        <Text as='b'>Instagram</Text>
                    </Flex>
                </MenuItem>
                <MenuItem p="10px" border="none">
                    <Flex gap="10px">
                        <Image src="https://i.ibb.co/8mmZfny/4.png" w="2rem" h="2rem"/>
                        <Text as='b'>LinkedIn</Text>
                    </Flex>
                </MenuItem>
                <MenuItem p="10px" border="none">
                    <Flex gap="10px">
                        <Image src="https://i.ibb.co/h9bFQmC/5.png" w="2rem" h="2rem"/>
                        <Text as='b'>Pinterest</Text>
                    </Flex>
                </MenuItem>
                <MenuItem p="10px" border="none">
                    <Flex gap="10px">
                        <Image  h="2rem" w="2rem" src="https://i.ibb.co/YTwrjBW/6.png" />
                        <Text as='b'>Shopify</Text>
                    </Flex>
                </MenuItem>
                <MenuItem p="10px" border="none">
                    <Flex gap="10px">
                        <Image h="2rem" src="https://i.ibb.co/nCN7jWZ/7.png" w="2rem" />
                        <Text as='b'>TikTok</Text>
                    </Flex>
                </MenuItem>
                <MenuItem p="10px"  border="none" borderRadius="5px">
                    <Flex gap="10px">
                        <Image src="https://i.ibb.co/rk28yHY/8.png"  h="2rem" w="2rem"/>
                        <Text as='b'>Twitter</Text>
                    </Flex>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default Channels;