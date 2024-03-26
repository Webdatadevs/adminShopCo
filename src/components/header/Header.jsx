import { BsFillSunFill } from "react-icons/bs"; 
import { GiHamburgerMenu } from "react-icons/gi"; 
import { BiMoon } from "react-icons/bi"; 
import { IoMdNotificationsOutline } from "react-icons/io"; 
import { Box, Icon, IconButton, Image, Input, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import AppContext from "../../contextApp/AppContext";
import sidebarElementsData from "../sidebar/sidebarElements";
import { useLocation } from "react-router-dom";

const Header = () => {
    const {openSidebar, setOpenSidebar, colorMode, toggleColorMode} = useContext(AppContext)
    const {pathname} = useLocation()
    return (
        <>
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} background={colorMode === 'light' ?'#fff' :'#101726' }

            className="flex items-center justify-between bg-[#fff] px-[15px] py-[15px] rounded-[10px]">
                <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                    <IconButton display={{base:'flex', md:'none'}} icon={<GiHamburgerMenu />} onClick={() =>setOpenSidebar(true)}/>
                    <Box display={'flex'} alignItems={'center'} gap={'10px'} padding={'10px'}>
                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} background={'rgb(58, 37, 144)'}  
                        padding={'5px'} borderRadius={'5px'}>
                        <Icon textColor={'#fff'} 
                            as={sidebarElementsData.find(element => element.path === pathname).icon}/>
                        </Box>
                        <Text fontWeight={'700'}>{sidebarElementsData.find(element => element.path === pathname).name}</Text>
                    </Box>
                    {/* <Input type="search" placeholder="Search..."/> */}
                </Box>
                <ul className="flex items-center gap-5">
                    <li className="text-[24px]"><IoMdNotificationsOutline /></li>
                    <li className="text-[24px]">
                        <IconButton 
                            onClick={() => toggleColorMode()} icon={colorMode==='light' ?<BiMoon />  : <BsFillSunFill />}/>
                    </li>
                    {/* <li><Image src="https://picsum.photos/400" borderRadius={'full'} width={'40px'} height={'40px'}/></li> */}
                </ul>
            </Box>
        </>
    );
};

export default Header;
