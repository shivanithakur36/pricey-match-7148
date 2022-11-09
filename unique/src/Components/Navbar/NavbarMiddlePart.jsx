import { Flex, Text,Box } from "@chakra-ui/react";
import Channels from "./Channels";
import Tools from "./Tools"
function NavbarMiddlePart(){

    return (
        
        <Flex alignItems="center" display={{base:"none",lg:"flex"}}>
            <Box display={{base:"none",lg:"flex"}} ><Tools/><Channels/></Box>


             <Box display={{base:"none",lg:"flex"}}>
             <Text  fontSize="xl" mr="3.7rem" className="btn">Pricing</Text>
            <Text fontSize="xl" mr="3.7rem" className="btn">Blog</Text>
            <Text fontSize="xl" mr="3.7rem" className="btn">About</Text>
            <Text fontSize="xl" mr="3.7rem" className="btn">Customers</Text>
             </Box>
            
        </Flex>
    )
}

export default NavbarMiddlePart;