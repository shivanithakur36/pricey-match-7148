


import { Image,  Text,Flex } from "@chakra-ui/react";



function Footer(){

    return (
        

        <Flex  margin="auto" gap="70px"   justifyContent={{base:"center",lg:"space-between"}} w="90%" direction={{ lg:"row",base:"column"}}>
            <Flex direction="column" alignItems={{lg:"flex-start",base:"center"}}>

                {/* //buffer image */}

                <Image mb={{lg:"100px",base:"30px"}}  src="https://i.ibb.co/bP2rsZM/Screenshot-2022-09-29-182705.png" w="140px" />
                <br /><br /><br /><br /><br /><br /><br />

                {/* //social media images */}

                <Image   mb={{ lg:"10px",base:"20px"}} src="https://i.ibb.co/QmQwksC/Screenshot-2022-09-29-182432.png"/>
                <Text fontFamily="Poppins, sans-serif">Download</Text>
                <Flex direction={{lg:"row",base:"column" }}>
   

              {/* //download footer images */}

                    <Image src="https://i.ibb.co/P4WH6rZ/Screenshot-2022-09-29-182942.png"/>
                    <Image src="https://i.ibb.co/JQRqnQx/Screenshot-2022-09-29-183011.png"/>
                </Flex>
                <Text fontSize="14px" mt={{ lg:"10px",base:"10px"}} color="rgb(130, 130, 130)">Copyright ©2022 Buffer | Privacy | Terms | Security</Text>
            </Flex>
            <Flex direction={{ lg:"row",base:"column", }} gap="18px">

                {/* //flex for text */}
                <Flex direction="column" fontSize="18px" alignItems={{margin:"100px" , lg:"flex-start" ,base:"center",}}>
                    <Text fontFamily="Poppins, sans-serif">Tools</Text>
                    <Text>Publishing</Text>
                    <Text>Analytics</Text>

                    <Text>Engagement</Text>
                    <Text>Start Page</Text>

                    <Text>Extras</Text>
                </Flex>
                                {/* //flex for text */}

                <Flex fontSize="18px"
                 direction="column" gap="10px" 
                  alignItems={{ lg:"flex-start" ,base:"center"}} >
                    <Text fontFamily="Poppins, sans-serif">Resources</Text>
                    <Text>Blog</Text>
                    <Text>Content Library</Text>

                    <Text>Browser Extension</Text>

                    <Text>Free Image Editor</Text>
                </Flex>
            </Flex>

                            {/* //flex for text */}

            <Flex direction={{base:"column", lg:"row",lg:"row"}} gap="70px">
                <Flex direction="column" gap="10px" fontSize="18px" alignItems={{ lg:"flex-start",base:"center"}}>
                    <Text fontFamily="Poppins, sans-serif">Support</Text>
                    <Text>Help Center</Text>
                    <Text>Status</Text>
                    <Text>Changelog</Text>
                    <Text>Product Roadmap</Text>
                </Flex>
                                {/* //flex for text */}

                <Flex  fontSize="18px" alignItems={{lg:"flex-start",base:"center"}} direction="column" gap="10px">
                    <Text fontFamily="Poppins, sans-serif">Company</Text>
                    <Text>About</Text>
                    <Text>Transparency</Text>
                    <Text>Careers</Text>
                    <Text>Accessibility</Text>
                    <Text>Press</Text>
                    <Text>Sitemap</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}




export default Footer;