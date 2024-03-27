// SkeletonComponent
import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

import SkeletonButton from "antd/es/skeleton/Button";

const SkeletonComponent = () => {
    return (
        <>
            <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-between"}
                rounded={"10px"}
                padding={"15px"}
                position={"relative"}
            >
                <Skeleton
                    height="200px"
                    width="200px"
                    bg="green.500"
                    color="white"
                    fadeDuration={1}
                />
                <SkeletonText
                    mt="4"
                    noOfLines={4}
                    spacing="4"
                    skeletonHeight="2"
                />
                <SkeletonButton />
            </Box>
        </>
    );
};

export default SkeletonComponent;
