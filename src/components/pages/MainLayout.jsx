import { Box } from "@chakra-ui/react";
import React from "react";

const MainLayout = ({ children }) => {
    return (
        <>
            <Box
                width={"100%"}
                display={"grid"}
                padding={"20px"}
                justifyContent={"center"}
                alignItems={"stretch"}
                gridTemplateColumns={"repeat(auto-fit, minmax(250px, 1fr))"}
                gap={"10px"}
            >
                {children}
            </Box>
        </>
    );
};

export default MainLayout;
