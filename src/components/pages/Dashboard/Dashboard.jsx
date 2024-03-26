import { Box, Button, Img, Text } from "@chakra-ui/react";
import React, {useState } from "react";
import DrawerCreatCategories from "./DrawerCreatCategories";
import DrawerCreatProducts from "./DrawerCreatProducts";
import BannerProducts from "./BannerProducts";
import BannerCategories from "./BannerCategories";

const Dashboard = () => {
    const [open, setOpen] = useState(false)
    const [openProducts, setOpenProducts] = useState(false)
    const showDrawer = () => {
        setOpen(true);
      };
      const onClose = () => {
        setOpen(false);
      };
      const showDrawerProducts = () => {
        setOpenProducts(true);
      };
      const onCloseProducts = () => {
        setOpenProducts(false);
      };
    return (
        <>
            <Box width={'90%'} marginX={'auto'}>
                <Box display={'flex'} flexWrap={'wrap'} alignItems={'center'} gap={'15px'} marginTop={'10px'}>
                    <Button padding={'15px'} borderRadius={'5px'}
                        onClick={showDrawer} 
                        textColor={'#fff'} _active={{opacity:'0.5'}} _hover={{background:'rgb(58, 37, 144)'}} background={'rgb(58, 37, 144)'} >CREAT A NEW CATEGORIES</Button>
                    <Button onClick={showDrawerProducts} padding={'15px'} borderRadius={'5px'} textColor={'#fff'} _active={{opacity:'0.5'}} _hover={{background:'rgb(58, 37, 144)'}} background={'rgb(58, 37, 144)'} >CREAT A NEW PRODUCTS</Button>
                </Box>
            </Box>
            <BannerProducts/>
            <BannerCategories />
            <DrawerCreatCategories open={open} showDrawer={showDrawer} onClose={onClose}/>
            <DrawerCreatProducts open={openProducts} showDrawer={showDrawerProducts} onClose={onCloseProducts}/>
        </>
    );
};

export default Dashboard;
