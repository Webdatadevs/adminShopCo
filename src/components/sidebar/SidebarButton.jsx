import { Button, Icon, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { useDispatch } from "react-redux";
import AppContext from "../../contextApp/AppContext";
const SidebarButton = ({ element }) => {
    const {openSidebar, setOpenSidebar} = useContext(AppContext)
    const dispatch = useDispatch()
    return (
        <>
            <Text
                display={element.title ? "block" : "none"}
                textColor={"#9e9d9d"}
                fontSize={"14px"}
                marginTop={"10px"}
                marginBottom={"10px"}
            >
                {element.title}
            </Text>

            <NavLink  to={element.path}>
                <Button
                    width={"100%"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"start"}
                    gap={"10px"}
                    _hover={{background:'rgba(166, 167, 248, 0.6)'}}
                    background={'none'}
                    onClick={() => setOpenSidebar(false)}
                >
                    <Icon fontSize={"18px"} as={element.icon} />
                    <Text fontSize={"14px"}>{element.name}</Text>
                </Button>
            </NavLink>
        </>
    );
};

export default SidebarButton;
