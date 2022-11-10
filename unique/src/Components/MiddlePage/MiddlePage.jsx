
import {Box,Flex,Text,Button,Image} from "@chakra-ui/react";


export default function MiddlePage(){
    return(
        <Box>
            <Flex>
                <Flex direction="column">
                    <Text fontFamily="sans-serif" fontSize="35px">Grow your audience on social and beyond</Text>
                    <Text>Buffer helps you build an audience organically. We’re a values-driven company that provides affordable, intuitive, marketing tools for ambitious people and teams.</Text>
                <Flex>
                    <Button fontFamily="sans-serif"></Button>
                    <Button fontFamily="sans-serif"></Button>

                </Flex>
                </Flex>
                <Image mt={{base:"20px",lg:"0"}} src="https://buffer.com/static/illustrations/all-channels-3.webp"w={{base:"90%",lg:"50%"}}/>

            </Flex>
        </Box>
    )
}