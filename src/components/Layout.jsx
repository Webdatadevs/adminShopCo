import { Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Sidebar from "./sidebar/Sidebar";
import AppContext from "../contextApp/AppContext";

const Layout = () => {
    const { openSidebar, setOpenSidebar } = useContext(AppContext);

    return (
        <>
            <Box
                display={"flex"}
                width={"100%"}
                background={"rgba(50, 71, 92, 0.09)"}
            >
                <Box
                    width={"250px"}
                    position={{ base: "absolute", md: "relative" }}
                    zIndex={{ base: "22" }}
                    marginLeft={{
                        base: openSidebar ? "0px" : "-250px",
                        md: "0px",
                    }}
                    transition={"all 0.3s"}
                >
                    <Sidebar />
                </Box>
                <Box width={{ base: "100%", md: "calc(100% - 250px)" }}>
                    <Box padding={"15px"}>
                        <Header />
                    </Box>
                    <Main />
                </Box>
            </Box>
        </>
    );
};

export default Layout;
