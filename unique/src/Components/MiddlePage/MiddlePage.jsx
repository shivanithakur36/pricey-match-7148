

import {Box,Flex,Text,Button,Image,Grid,GridItem,Heading} from "@chakra-ui/react";


export default function MiddlePage(){
    return(
        <Box 
        // border="6px solid red"  
         height="auto" width="90%" margin="auto">
            <Flex
            //  border="6px solid blue"
              justifyContent="space-between">
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
            {/* <Box alignItems='center'>
            <Image h="50px" w="100%"
             border="5px solid yellow"
             />

            </Box> */}

            
            



            <Heading alignItems='center' h="50px" w="80%"    margin="30px 0px 50px 150px"   
                    //  border="2px solid pink"
             as='h1' size='xl'>Grow your following without draining your time</Heading>


<Text alignItems='center' h="50px" w="40%"    margin="0px 0px 70px 390px"   
    //    border="2px solid pink"
            >Social media can be the fastest and cheapest way to build your following and grow your business. But it can also take up all your time. Here are four ways Buffer can help.</Text>

            <Grid width="100%" height="300px"
            //  border="4px solid green" 
             templateColumns='repeat(4, 1fr)' gap={6}>
  <GridItem
//    border="1px solid yellow"
    w='90%' h='250px' bg='blue.500' >
    <Flex direction="column">
        <Image h="70px" w="70px" src="https://s3.amazonaws.com/iconbros/icons/icon_svgs/000/017/413/original/paper-plane_5756880.svg?1640724891"></Image>
        <Heading as='h4' size='lg'>
        Schedule your content  </Heading>
        <Text>Plan and publish content across all major social media channels effortlessly.</Text>
    </Flex>
  </GridItem >

  <GridItem 
//   border="1px solid yellow"
   w='90%' h='250px' bg='blue.500' >
    <Flex direction="column">
        <Image h="70px" w="70px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA9CAMAAAApvJHbAAAAYFBMVEX///8AAADf3981NTWfn5+Ojo7R0dHi4uIpKSlVVVXm5uYtLS34+PiFhYVHR0fb29vs7OzIyMinp6d6enq/v7+vr6+VlZVeXl4aGhpubm47OztlZWVMTEwUFBS5ubkjIyPEPeD0AAABCklEQVRIie3U23aDIBAFUE+kXjAiqFGJJv3/v+wAaWqy0lUyD33iPCG6lzBcsiwlJSVEaibURswLBA8L+FieNrXoBqDhaYrGecWRqzcUAgUTTzRpwy2bAWjwF54ugY7324CvbNwBPRuPP/gY8gamXTJ+t5ew56JrYBZ8lvenHNZahUOcPdRAu3vOad2yPk4XM3B+GKXXIkKXoiI7PnZG6fI6NFSc1Ty/iNKK6Hx6sTBR+tT/cpii572L7nwkT9/upZarh2lq8cHVtOiSrwt3St/S8tK4KKYOtaq42p2PJul/1fR5lle3vabvOupm2q+3j9c+EVqr2mWl4765xkaXuvVdSv6tU1JS9vkCFEQLemUE50cAAAAASUVORK5CYII="></Image>
        <Heading as='h4' size='lg'>
        Measure your performance </Heading>
        <Text>Track what’s working and create custom reports all from one analytics dashboard.</Text>
    </Flex>
  </GridItem >

  <GridItem 
//   border="1px solid yellow"
   w='90%' h='250px' bg='blue.500' >
    <Flex direction="column">
        <Image h="70px" w="70px" src="https://www.jaanetwork.org/img/icon-testimonial.png"></Image>
        <Heading as='h4' size='lg'>
        Engage your audience
  </Heading>
        <Text>See and reply to all of your social comments directly from your Buffer dashboard.</Text>
    </Flex>
  </GridItem >

  <GridItem 
//   border="1px solid yellow"
   w='90%' h='250px' bg='blue.500' >
    <Flex direction="column">
        <Image h="70px" w="70px" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAA6AEADASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAABgAFBwQC/8QANhAAAAUCAgUJBwUAAAAAAAAAAAECAwQFBhESFiFSVpEHExQxdZKUstIiMjVBUWGBFUJxcvD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7fkTslwFkTslwH0BSL8lSXpKabalWmssSFsG+0pokqUk8DwxViAZ5E7JcBZE7JcAP0zrG49b7zPqFplWNxq33mvUAYZE7JcBZE7JcAP0yrG41b7zXqFplWNxq33mvUAYZE7JcBZE7JcBjWpcSLjhSX0wn4bkaSuM8w/lzJWnDHqMy+Y2wEOMwEzZ0SRFbt+rzGIldflIkQZbbRKWSz9lRKPEy/xDswIcmfwmqdry/OAILptQWl8tFLoLnqkVQVhU2NSy/aWvUj7df3CzSy4txan4lj1BkIBgUCt1WpS1s1C25lMaS2aieeebUlR4l7OCTM8dZn+B56pcdbhz3o8W0Z8xlCsESG5DRJcLDrIjVjxCcQAPyVvOSItwvPx1x3XK3JUtlZkZtmeBmkzLViR6vwHAG8m/vXP2/L8xBkAgN5OG0u0SrNrxyrq0xJ4fQ1hkCHJn8Jqna8vzgDSKbeLrTVHe6QmnKeKlrUSjzdHbMldIzfLOgjRj19XzHsrbV3Uiq1M6Ay9IhsudPZbxM+kKcIkKZLHHUkyU5h9yHSBAOdT7fuKlHTIlAlPGcmAUWXKUo1c042ZuJc17RmtJ/wBi+mAR2OxUP0lyoVlpbFQqLypD0dSjPmepKUFj1YJSkIhABvJv71z9vy/MQZAbyb+9c/b8vzEGQCAqPZlWgOSipV0yIsd+Q5I5korasqlniesw1EAIaNXNvpJ8G0LRq5t9JPg2gvEAIaNXNvpJ8G0LRq5t9JPg2gvEAwrSt5VvRJbTk1c16XKXKdeWgkma14Y6i/gbohAP/9k="></Image>
        <Heading as='h4' size='lg'>
        Manage from anywhere
  </Heading>
        <Text>Manage your social media strategy on Buffer and our iOS/Android apps.</Text>
    </Flex>
  </GridItem >
  
</Grid>

<Flex direction="columns">
<Heading as='h3' size='lg' marginLeft="400px">An official marketing partner of the industry leaders
</Heading>
</Flex>


<GridItem margin="auto"
//  border="1px solid yellow" 
w='40%' h='auto'  bg='blue.500' >
    
    <Flex direction="rows" justifyContent="space-between" margin="20px 0px 40px 0px">
        <Image src="https://buffer.com/static/ui/meta-business-partner@2x-2.png" height="60px" w="100px"/>
        <Image src="https://buffer.com/static/ui/pinterest-marketing-partner@2x-2.png" height="60px" w="120px"/>
        <Image src="https://buffer.com/static/ui/linkedin-marketing-partner@2x-2.png" height="60px" w="140px"/>

    </Flex>
  </GridItem >

  <Flex >
                    <Image src="https://i.ibb.co/xLtffhB/Screenshot-2022-09-29-172846.png" display={{base:"none",lg:"flex"}}/>
                    <Flex w="100%" h={{base:"400px", lg:"500px"}} bg="rgb(44, 75, 255)" direction="column" alignItems="center" justifyContent="center">
                        <Text w={{base:"90%", lg:"70%"}} mb="40px" fontSize={{base:"24px", lg:"30px"}} fontFamily="Poppins, sans-serif" color="white">140,000+ people like you use Buffer to build their brand on social media every month</Text>
                        <Button border="none" borderRadius="5px" fontSize='18px' padding="30px" h="100px" w="200px" fontFamily="Poppins, sans-serif" bg="rgb(233,114,132)" _hover={{bg:"rgb(229, 87, 108)"}} color="white">Get started now</Button>
                    </Flex>
                    <Image src="https://i.ibb.co/ZKt9pmq/Screenshot-2022-09-29-172926.png" display={{base:"none",lg:"flex"}}/>
                </Flex>

  {/* <Image h="300px" w="100%" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAAUAEADASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAEDAgUGBP/EACwQAAEEAQMCBQIHAAAAAAAAAAEAAgMRBAUhMRJBEyIyUWEGI3GBgpHB0vD/xAAZAQADAAMAAAAAAAAAAAAAAAAAAQIDBQf/xAAiEQACAgEDBAMAAAAAAAAAAAABAgADEQQSIhMxcdFBUZH/2gAMAwEAAhEDEQA/AOcLSxxEjXNI7EUR7LFdT9Z6rp+fDjxYbxNMx5c6UDZra9N999/ivlcsuh6S17qhY6lSfgzWXVrW5VTkfc92BpxzWkxzU5ppzRC93TzRNAjele3QsgnzPA42EExIv9HwVqSAeQtro+JJkwyeHkY8IDqIlhY4nYdyEtTZ0VNjPgePUdNTWtsQZMxbouQb846QLJEE39FTnae/Ca10sgt4trTFIwu966mjjb9wvTrOLLBDGZcnHmBfsIomto1zt+C1IAHApGntF6ixWyPHuF1TUtscYMs8T7PhdDPV1ddebiqv2VjMR8kIkY5p5tvt/A/OlQptvS2gQ8E269q2ratu/fv2rfM6tjgcH9kIVB5DMNAIN/7YqERWO8mFBAPIBRE4oAA4AClERCEREQn/2Q=="/> */}


        </Box>
    )
}