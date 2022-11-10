import React from "react";
import { Box, Flex, Image, Text, Menu, MenuItem, MenuList, MenuButton, Button, Grid, GridItem } from "@chakra-ui/react";
import {TriangleDownIcon, ArrowBackIcon, ArrowForwardIcon} from "@chakra-ui/icons"




function GetStartedPage(){
    
    return (
        <Box>
            <Flex w="100vw" borderBottom="1px solid #ccc" h="10px" justifyContent="space-between" alignItems="center" p="30px" >
                <Flex>
                    <Image src="https://i.ibb.co/F7kVsKF/Screenshot-2022-09-28-071955.png" padding="30px 0 0 0" w="9rem" h="2rem" />
                    <Text  padding="20px 10px 30px 10px" fontWeight="bold" color="grey" cursor="pointer" _hover={{color:"rgb(44, 75, 255)", bgColor:"rgb(245, 245, 245)"}}>Publishing</Text>
                    <Text padding="20px 10px 30px 10px" fontWeight="bold" color="grey" cursor="pointer" _hover={{color:"rgb(44, 75, 255)", bgColor:"rgb(245, 245, 245)"}}>Analytics</Text>
                    <Text padding="20px 10px 30px 10px" fontWeight="bold" color="grey" cursor="pointer" _hover={{color:"rgb(44, 75, 255)", bgColor:"rgb(245, 245, 245)"}}>Engagement</Text>
                    <Text padding="20px 10px 30px 10px" fontWeight="bold" color="grey" cursor="pointer" _hover={{color:"rgb(44, 75, 255)", bgColor:"rgb(245, 245, 245)"}}>Start Page</Text>
                </Flex>
                <Grid templateColumns="repeat(4, 150px)">
                    <Text fontWeight="light" color="rgb(44, 75, 255)" >Invite Your Team</Text>
                    <Menu>
                        <MenuButton _hover={{bgColor:"rgb(245, 245, 245)" ,color:"black"}} color="grey" bgColor="white" border="none">
                            <Text w="100px"   cursor="pointer" fontWeight="bold" fontSize="14px">Apps<TriangleDownIcon /></Text>
                        </MenuButton>
                        <MenuList padding="10px" borderRadius="10px" bgColor="white" width="200px" border="1px solid grey">
                            <MenuItem borderRadius="5px" _hover={{bgColor:"rgb(245, 245, 245)"}} fontWeight="bold" border="none" bgColor="white" padding="10px">Buffer for IOS</MenuItem>
                            <MenuItem borderRadius="5px" _hover={{bgColor:"rgb(245, 245, 245)"}} fontWeight="bold" border="none" bgColor="white"  padding="10px">Buffer for Android</MenuItem>
                            <MenuItem borderRadius="5px" _hover={{bgColor:"rgb(245, 245, 245)"}} fontWeight="bold" border="none" bgColor="white"  padding="10px">Remix by Buffer</MenuItem>
                            <MenuItem borderRadius="5px" _hover={{bgColor:"rgb(245, 245, 245)"}} fontWeight="bold" border="none" bgColor="white"  padding="10px">Integrations</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton _hover={{bgColor:"rgb(245, 245, 245)" ,color:"black"}} color="grey" bgColor="white" border="none">
                            <Text w="100px"   cursor="pointer" fontWeight="bold" fontSize="14px">Help<TriangleDownIcon /></Text>
                        </MenuButton>
                        <MenuList padding="10px" borderRadius="10px" bgColor="white" width="200px" border="1px solid grey">
                            <MenuItem borderRadius="5px" _hover={{bgColor:"rgb(245, 245, 245)"}} fontWeight="bold" border="none" bgColor="white" padding="10px">Visit Help Center</MenuItem>
                            <MenuItem borderRadius="5px" _hover={{bgColor:"rgb(245, 245, 245)"}} fontWeight="bold" border="none" bgColor="white" padding="10px">Quick Help</MenuItem>
                            <MenuItem borderRadius="5px" _hover={{bgColor:"rgb(245, 245, 245)"}} fontWeight="bold" border="none" bgColor="white" padding="10px">Status</MenuItem>
                            <MenuItem borderRadius="5px" _hover={{bgColor:"rgb(245, 245, 245)"}} fontWeight="bold" border="none" bgColor="white" padding="10px">Pricing & Plans</MenuItem>
                            <MenuItem borderRadius="5px" _hover={{bgColor:"rgb(245, 245, 245)"}} fontWeight="bold" border="none" bgColor="white" padding="10px">Wishlists</MenuItem>
                            <MenuItem borderRadius="5px" _hover={{bgColor:"rgb(245, 245, 245)"}} fontWeight="bold" border="none" bgColor="white" padding="10px">Changelog</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton _hover={{bgColor:"grey" ,color:"black"}} color="grey" bgColor="white" border="none">
                            <TriangleDownIcon />
                        </MenuButton>
                        <MenuList padding="10px" borderRadius="10px" width="200px" border="1px solid grey">
                            <MenuItem borderRadius="5px" _hover={{bgColor:"grey"}} fontWeight="bold" border="none" bgColor="white" padding="10px">Account</MenuItem>
                            <MenuItem borderRadius="5px" _hover={{bgColor:"grey"}} fontWeight="bold" border="none" bgColor="white" padding="10px">My Prefrences</MenuItem>
                            <MenuItem borderRadius="5px" _hover={{bgColor:"grey"}} fontWeight="bold" border="none" bgColor="white" padding="10px">Channels</MenuItem>
                            <MenuItem borderRadius="5px" _hover={{bgColor:"grey"}} fontWeight="bold" border="none" bgColor="white" padding="10px">Team</MenuItem>
                            <MenuItem borderRadius="5px" _hover={{bgColor:"grey"}} fontWeight="bold" border="none" bgColor="white" padding="10px">Invite Your Team</MenuItem>
                            <MenuItem borderRadius="5px" _hover={{bgColor:"grey"}} fontWeight="bold" border="none" bgColor="white" padding="10px" >Logout</MenuItem>
                        </MenuList>
                    </Menu>
                </Grid>
            </Flex>
            <Flex>
                <Flex h="90vh" borderRight="1px solid #ccc" p="30px" direction="column" gap="20px" as="b" color="rgb(149, 149, 149)" alignItems="flex-start" >
                    <Text borderRadius="5px" color="black" _hover={{bgColor:"rgb(245, 245, 245)"}} padding="10px 90px 10px 20px" cursor="pointer" >Calender</Text>
                    <Text borderRadius="5px" color="black" _hover={{bgColor:"rgb(245, 245, 245)"}} padding="10px 90px 10px 20px" cursor="pointer">Campaigns</Text>
                    <Text borderRadius="5px" color="black" _hover={{bgColor:"rgb(245, 245, 245)"}} padding="10px 90px 10px 20px" cursor="pointer">Queues</Text>
                </Flex>
                <Box>
                    <Flex padding="20px" justifyContent="space-between">
                        <Flex w="30%" justifyContent="space-evenly" alignItems="center">
                            <ArrowBackIcon border="1px solid #ccc" fontSize="20px" borderRadius="2px"/>
                            <Text>Today</Text>
                            <ArrowForwardIcon border="1px solid #ccc" fontSize="20px" borderRadius="2px"/>
                            <Text fontSize="24px" as="b">Oct 2 - 8, 2022</Text>
                        </Flex>
                        <Flex justifyContent="space-evenly" w="40%" alignItems="center">
                            <Text color="grey" fontWeight="bold">GMT+5:30</Text>
                            <Menu>
                                <MenuButton color="grey" fontWeight="bold" padding="10px 30px 10px 10px" border="1px solid grey" borderRadius="5px">
                                    All Posts <TriangleDownIcon />
                                </MenuButton>
                                <MenuList padding="10px" borderRadius="10px" bgColor="white" width="200px" border="1px solid grey">
                                    <MenuItem  borderRadius="5px" _hover={{bgColor:"rgb(245, 245, 245)"}} fontWeight="bold" border="none" bgColor="white" padding="10px">All Posts</MenuItem>
                                    <MenuItem  borderRadius="5px" _hover={{bgColor:"rgb(245, 245, 245)"}} fontWeight="bold" border="none" bgColor="white" padding="10px">Drafts</MenuItem>
                                    <MenuItem  borderRadius="5px" _hover={{bgColor:"rgb(245, 245, 245)"}} fontWeight="bold" border="none" bgColor="white" padding="10px">Scheduled</MenuItem>
                                    <MenuItem  borderRadius="5px" _hover={{bgColor:"rgb(245, 245, 245)"}} fontWeight="bold" border="none" bgColor="white" padding="10px">Sent Posts</MenuItem>
                                    <MenuItem  borderRadius="5px" _hover={{bgColor:"rgb(245, 245, 245)"}} fontWeight="bold" border="none" bgColor="white" padding="10px">Pending Aproval</MenuItem>
                                </MenuList>
                            </Menu>

                            <Menu>
                                <MenuButton color="grey" fontWeight="bold" padding="10px 30px 10px 10px" border="1px solid grey" borderRadius="5px">
                                    Week  Month 
                                </MenuButton>
                                
                            </Menu>
                            <Button fontWeight="bold" borderRadius="5px" border="none" padding="10px" bg="rgb(44, 75, 255)" color="white">Create Post</Button>
                        </Flex>
                    </Flex>
                    <Grid h="100vh" w="80vw" padding="20px" overflow="auto" templateColumns="repeat(7,1fr)" templateRows="repeat(24,60px)">
                        <GridItem border="1px solid #ccc" fontWeight="bold" textAlign="center" fontSize="13px" color="grey">Sunday 2</GridItem>
                        <GridItem border="1px solid #ccc" fontWeight="bold" textAlign="center" fontSize="13px" color="grey">Monday 3</GridItem>
                        <GridItem border="1px solid #ccc" fontWeight="bold" textAlign="center" fontSize="13px" color="grey">Tuesday 4</GridItem>
                        <GridItem border="1px solid #ccc" fontWeight="bold" textAlign="center" fontSize="13px" color="grey">Wednesday 5</GridItem>
                        <GridItem border="1px solid #ccc" fontWeight="bold" textAlign="center" fontSize="13px" color="grey">Thursday 6</GridItem>
                        <GridItem border="1px solid #ccc" fontWeight="bold" textAlign="center" fontSize="13px" color="grey">Friday 7</GridItem>
                        <GridItem border="1px solid #ccc" fontWeight="bold" textAlign="center" fontSize="13px" color="grey">Saturday 8</GridItem>
                        <GridItem  border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
    
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>


        
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                    
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>

                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        <GridItem border="1px solid #ccc" bgColor="rgb(245, 245, 245)"></GridItem>
                        
                        
                    
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>


                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        <GridItem border="1px solid #ccc"></GridItem>
                        
                    </Grid>

                </Box>



            </Flex>
        </Box>
    )
}

export default GetStartedPage;