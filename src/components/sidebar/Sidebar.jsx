import { AiOutlineClose } from "react-icons/ai";
import { CgGlobeAlt } from "react-icons/cg";
import { Box, IconButton, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import SidebarButton from "./SidebarButton";
import sidebarElementsData from "./sidebarElements";
import AppContext from "../../contextApp/AppContext";

const Sidebar = () => {
    const {openSidebar, setOpenSidebar, colorMode, toggleColorMode} = useContext(AppContext)

    return (
        <Box height={"100vh"} background={colorMode==='light' ? "#fff" : '#101726'} paddingTop={"15px"}>
            <Box
                display={"flex"}
                justifyContent={'space-between'}
                alignItems={'center'}
                padding={'20px'}
            >
                <Box
                    display={"flex"}
                    // padding={'20px'}
                    alignItems={"center"}
                    gap={"10px"}
                    // marginTop={"10px"}
                >
                    <Text textColor={"blueviolet"} fontSize={"30px"}>
                        <CgGlobeAlt />
                    </Text>
                    <Text
                        fontSize={"16px"}
                        fontWeight={"600"}
                    >
                        SHOP.CO ADMIN
                    </Text>
                </Box>
                <IconButton
                    display={{ base: "flex", md: "none" }}
                    icon={<AiOutlineClose />}
                    size={"sm"}
                    onClick={() => setOpenSidebar(false)}
                />
            </Box>
            <Box
                padding={"10px"}
                display={"flex"}
                flexDirection={"column"}
                gap={"5px"}
            >
                {sidebarElementsData.map((element) => (
                    <SidebarButton key={element.id} element={element} 
                    
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Sidebar;
