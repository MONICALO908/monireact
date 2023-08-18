import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import {  useNavigate } from "react-router-dom";

export function AppHeader(){
    const navigate = useNavigate();
    return <Flex backgroundSize={"cover"} backgroundImage={"url('https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_1280.jpg')"} w={"full"} h={"72"} direction={"column"} alignItems={"center"} justifyContent={"center"}>
        <Text fontSize={"40"}fontWeight={"bold"} fontFamily={"heading"} color={"teal"}>DOMINA TU TIEMPO</Text>
        <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme="teal" size="md" onClick={()=>navigate("/")}>
            Home
        </Button>
        <Button colorScheme="teal" size="md" onClick={()=>navigate("/about")}>
            About
        </Button>
        <Button colorScheme="teal" size="md" onClick={()=>navigate("/taskList")}>
            TaskList
        </Button>
        </Stack>
    </Flex>
}