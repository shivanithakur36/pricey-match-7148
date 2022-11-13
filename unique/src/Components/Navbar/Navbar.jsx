import React from "react";
import Tools from "./Tools";

import { Image, Text, Flex,Button,Box, HStack,Center} from "@chakra-ui/react";
import Channels from "./Channels";

function Navbar(){
    
    


    return (
        <Flex  position="sticky"
        // border="2px solid red"
        >
                    {/* first image flex */}

        <Flex justifyContent="space-evenly" width="100%" 
        // border="2px solid green"  
           alignItems="center"
           marginTop="40px"
           marginBottom="50px"
           >
            <Center>
                <Image src="https://i.ibb.co/F7kVsKF/Screenshot-2022-09-28-071955.png" w="9rem" h="2rem"/>
            </Center>
            {/* <NavbarMiddlePart/> */}

            

            <HStack width="60%"  justifyContent="space-evenly">
            
            <Tools/>
            <Channels/> 
         <Text  fontSize="xl" className="btn">Pricing</Text>
        <Text fontSize="xl"  className="btn">Blog</Text>
        <Text fontSize="xl"  className="btn">About</Text>
        <Text fontSize="xl"  className="btn">Customers</Text>
         </HStack>

         <Box justifyContent="space-evenly">
            <HStack>
            <Text  color="rgb(77, 103, 255)" cursor="pointer" fontSize='xl' className="loginbtn" >Log in</Text>
            <Button fontWeight="bold" borderRadius="5px" border="none" marginLeft="20px" padding="20px" bg="rgb(44, 75, 255)" color="white">Get Started now</Button>

            </HStack>
            
            </Box>
                      
        </Flex>

        {/* <Flex display={{base:"none",lg:"flex",}}>
        
            <Tools/>
            <Channels/> 

        

        </Flex>
         */}

     

         

         
        
    </Flex>






    )
    }

export default Navbar;