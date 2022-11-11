
import {Flex,Box,Image,Text,Input,Button} from "@chakra-ui/react";

export default function Signup(){
    return(
        <Box >
        <Flex   border="1px solid red" w="100%" h="635px">
            <Box marginLeft="230px" border="2px solid yellow" w="65%">
            <Image margin="20px 0px -40px -500px" src="https://i.ibb.co/5FdKVzp/Screenshot-2022-09-29-215519.png"/>
            <Flex mt="40px" direction="column" >
                    <Text fontWeight="bold" fontFamily="Poppins, sans-serif" margin="40px 0px 0px -190px" fontSize="30px">Let's get your account set up</Text>
                    <Text fontWeight="medium" margin="30px 0px 0px -260px">Email Address</Text>
                    <Input   w="450px" backgroundColor=" #FFFFFF" height= "25px"
    padding= "10px"
    borderRadius= "4px"
    margin= "8px 0px 0px 60px"  border="1px solid grey"/>
                    <Text fontWeight="medium" margin="30px 0px 0px -290px">Password</Text>
                    <Input w="450px" backgroundColor=" #FFFFFF" height= "25px"
    padding= "10px"
    borderRadius= "4px"
    margin= "8px 0px 0px 60px"  border="1px solid grey" />
                    <Button   bg="rgb(44,75,255)"     margin= "20px 0px 0px 58px" 
 color="white" _hover={{bg:"rgb(31, 53, 179)"}} fontWeight="bold" height= "45px" w="470px" border="none" borderRadius="5px">Sign Up</Button>
                
                
                <Flex fontWeight="bold" fontSize="12px" color="grey" margin="-40px 0px 0px 70px" w="360px" h="50px"  justifyContent="space-between">
                    <Text>I agree to Buffer's Terms of Service</Text>
                    <Text>Already have an account?</Text>
                </Flex>
                {/* <Text fontWeight="medium" fontSize="14px" color="grey" margin="25px 0px 0px 60px" h="70px"  w="360px">We no longer support social sign on. Please click here to set your password and access your account.</Text> */}
                
                
                


                </Flex>
            </Box>
            <Box border="2px solid green" w="35%"></Box>
        </Flex>
        </Box>
    )
}