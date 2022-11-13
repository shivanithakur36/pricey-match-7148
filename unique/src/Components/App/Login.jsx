import {Flex,Box,Image,Text,Input,Button} from "@chakra-ui/react";
import {useContext} from 'react';
import AuthContext from "../../Context/AppContext";


export default function Login() {
  // const { login} = useContext(AuthContext);

  const Login = useContext(AuthContext);


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
    
    margin= "8px 0px 0px 60px"  border="1px solid grey"/>
                    <Text fontWeight="medium" margin="30px 0px 0px -290px">Password</Text>
                    <Input    
 w="340px" backgroundColor=" #FFFFFF" height= "25px"
    padding= "10px"
    borderRadius= "4px"
    margin= "8px 0px 0px 60px"  border="1px solid grey" />
                    <Button   bg="rgb(44,75,255)"     margin= "20px 0px 0px 58px" 
 color="white" _hover={{bg:"rgb(31, 53, 179)"}} fontWeight="bold" height= "45px"   w="365px" border="none" onClick={Login} borderRadius="5px">Log In</Button>
                
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
            <Box border="2px solid green" w="65%">
                <Image src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAAuAEADASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAAUEBgcDAgH/xAAzEAACAQMDAwEFBQkAAAAAAAABAgMEBREAEiEGMUFRFCJxgdEHEzIzYRYjJEJTgpGSsf/EABsBAAEFAQEAAAAAAAAAAAAAAAUAAQIDBAYH/8QAKREAAQIFAgQHAQAAAAAAAAAAAQACAwQREiFBUQUxYZETFCNxgaHhsf/aAAwDAQACEQMRAD8A0tRk4yB+pOvRjwPxx/7ajVW72d9n3u7jH3WN3fxnjS1BVs/5l1XGeCsOPP1+GvO4TWFpup3RVxNU40aSKa0thnuao6mMgxxZVieHB8ee+QNdIJqpare0NyaM5JjYRbQSTwPOBn18DTGAdwlcm+jRo1QpI0aNGkkvMgYoQvfxzjUYQzgfiGcf1G1L0ak15amIXD2c4/Mcf3H66+NEAeZ2GB23H667syoMsQo9ScayvqeilqOsHpKuuqmpm/eJGpLBMIdvHYZdTk9+D8iHD5bzbyC6lOirivsGAtOpqinlLpBMsjIcOA2Sp9D6fDXfWafZ7cJKeuuyzFGd4zLDTpwXWPPI54zuXUGf7Sb7WwySUFLbqSOMAuHYyPz4BJAzjPj/AJrRF4NGMcshZApknf8AQdFFscFtSr3Xz1st0mp1rXpYYgjD7sINysO7FgcchhxjtpNUXOkt9zgQT1vtQqUVjPPI64LhHBBJA4LHGByAdU+53i73my2e4x08twqZJJKWshpE5dkxJHlQDnCu2RjGpn7MdWXunVobQ9ICu4vVlITH8QSGBxj+XR6Uk4YlvDLRdkE0Htz59VU5zS66q1vSfqqoqqS0SVFHIUdCM7Rk4z9M6caiXamWrt1RTsdokTbuAztzxnXGy5AjNrutooCKrO7tWk2O33KK5VklROzCaIqUWIc4PHB7D1zn9NMOp7FXdQ+xVVsqII4pqYLIJC2HwQU4VST3Y/Iai0VmgqSkSyzOTkDkRqfiACfPrp9fonsdmpIZJJI1iliSRaWU+8jHYBluTgsDzrqGPBiNsxpvp+BWTkKyGLt0m6S6NPTl1hra28NJLtZBA0SwiTPj3mJPIGMAc6rMfSt3opbhUxJQU9HHUSRCaq95nRWKKEAVmH+R+urBepKimu9LBHMV2sJNmNysm4MASeeAcYB8fPXTqe0rLcqiuqKyRKYBGRFi3uhZVyVywAOVJ8/iOisq4NmfVdgg6bEUH2UIe02i0KL0XUG3tUiCT2ox1UM6RQyPEWL5gcFuTjLqflq3VtfdDcqSghp7ZT1syF4jVhqhhgE4EjEc4DEAr2VvTVM6RW01d6lgt01zNW8Rp5J6ophUdWdSgXsQ0annWj11uWvrLdWVUn8Tb5WkgljQBveUqVJOfdIPbjkD01mm+IS8rMPDsA0I7U/or8qTYRe3C//Z"></Image>
            </Box>
        </Flex>
    )
}