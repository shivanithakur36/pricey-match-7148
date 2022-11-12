import {Flex,Box,Image,Text,Input,Button} from "@chakra-ui/react";
import {AppContext} from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";
import {useState,} from 'react';
import {useContext} from 'react';


export default function Login(){


    const [userData, setUserData] = useState({});
    const { state, loginUser } = useContext(AppContext);
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      let email = e.target.email;
      let value = e.target.value;
      setUserData({
        ...userData,
        [email]: value,
      });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
        loginUser(userData, navigate);
        e.target.reset();
      };


    return(
        <Flex border="1px solid red" w="100%" h="635px">
            <Box border="2px solid yellow" w="35%">
            <Image margin="20px 0px -40px -260px" src="https://i.ibb.co/5FdKVzp/Screenshot-2022-09-29-215519.png"/>
            <Flex mt="40px" direction="column" >
                    <Text fontWeight="bold" fontFamily="Poppins, sans-serif" margin="30px 0px 0px -270px" fontSize="30px">Log in</Text>
                    <Text fontWeight="medium" margin="30px 0px 0px -260px">Email Address</Text>
                    <Input   w="340px" backgroundColor=" #FFFFFF" height= "25px"
    padding= "10px"
    borderRadius= "4px"
    onChange={handleChange}
    margin= "8px 0px 0px 60px"  border="1px solid grey"/>
                    <Text fontWeight="medium" margin="30px 0px 0px -290px">Password</Text>
                    <Input     onChange={handleChange}
 w="340px" backgroundColor=" #FFFFFF" height= "25px"
    padding= "10px"
    borderRadius= "4px"
    margin= "8px 0px 0px 60px"  border="1px solid grey" />
                    <Button   bg="rgb(44,75,255)"     margin= "20px 0px 0px 58px" 
 color="white" _hover={{bg:"rgb(31, 53, 179)"}} fontWeight="bold" height= "45px" onClick={handleSubmit}  w="365px" border="none" borderRadius="5px">Log In</Button>
                
                <Flex fontWeight="bold" fontSize="12px" color="grey" margin="10px 0px 0px 60px" w="360px" h="50px"  justifyContent="space-between">
                    <Text>Create Your account</Text>
                    <Text>Forgot your password</Text>
                </Flex>

                <Text fontWeight="medium" fontSize="14px" color="grey" margin="25px 0px 0px 60px" h="70px"  w="360px">We no longer support social sign on. Please click here to set your password and access your account.</Text>
                
                <Text margin="30px 0px 0px -10px"  color="grey">Terms of Service
    •      Privacy Policy
•  Security</Text>
                
                </Flex>
            </Box>
            <Box border="2px solid green" w="65%"></Box>
        </Flex>
    )
}