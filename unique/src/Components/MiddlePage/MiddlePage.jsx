
import {Box,Flex,Text,Button,Image} from "@chakra-ui/react";


export default function MiddlePage(){
    return(
        <Box border="6px solid red"   height="800px" width="90%" margin="auto">
            <Flex border="6px solid blue" justifyContent="space-between">
                <Flex  height="500px" width="40%"  margin="80px 0px 0px 0px" direction="column">
                    <Text fontWeight="bold" fontFamily="sans-serif" fontSize="35px">Grow your audience on social and beyond</Text>
                    <Text>Buffer helps   you build an audience organically. We’re a values-driven company that provides affordable, intuitive, marketing tools for ambitious people and teams.</Text>
                <Flex margin="30px 0px 0px 40px" h="60px" w="400px"  justifyContent="space-between">
                    <Button h="30px" w="190px" padding="30px" borderRadius="5px" border="none" bgColor="blue" color="white" fontSize="16px" fontFamily="sans-serif">Get Started now</Button>
                    <Button h="30px" w="190px" padding="30px" borderRadius="5px" border="1px solid blue" fontSize="16px" color="blue" bgColor="white" src="https://buffer.com/static/animation/SocialMedia.mp4" fontFamily="sans-serif">Watch Video</Button>

                </Flex>
                </Flex>
                <Image  height="50%" width="500px" src="https://buffer.com/static/illustrations/all-channels-3.webp"w={{base:"90%",lg:"50%"}}/>

            </Flex>
            <Image h="50px" w="50px" border="2px solid yellow"/>

        </Box>
    )
}