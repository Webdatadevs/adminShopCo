import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Img,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getCategories from "../../../fetch/getCategories";
import getProducts from "../../../fetch/getProduct";
import axios from "axios";
import AlertProducts from "./AlertProducts";
import UpdateProduct from "./UpdateProduct";
import AppContext from "../../../contextApp/AppContext";

const ProductCard = ({item}) => {
    const {categories} = useSelector(state => state.categories)
    const dispatch = useDispatch()
    const [selectDeleteId, setSelectDeleteId] = useState()
    const [open, setOpen] = useState(false);
    const {openSidebar, setOpenSidebar, colorMode, toggleColorMode} = useContext(AppContext)

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const {
        isOpen: isOpenDelete,
        onOpen: onOpenDelete,
        onClose: onClouseDelete,
    } = useDisclosure();

    useEffect(() =>{
        getCategories(dispatch)
        // getProducts(dispatch)
    } ,[])
    return (
        <>
                <Box display={'flex'} background={colorMode ==='light' ? '#fff' :'#101726'} 
                     flexDirection={'column'} justifyContent={'space-between'}
                     rounded={'10px'} padding={'15px'} position={'relative'}>

                    <Box display={'flex'} overflow={'hidden'} borderRadius={'10px'}>
                      <Img src={item.image} width={'100%'} transition={'all 0.4s'} _hover={{ transform: "scale(1.1)" }} borderRadius={'10px'} height={'100%'}/>
                        <Text position={'absolute'} top={'5px'} left={'5px'} borderRadius={'5px'}
                                  background={'#222'} opacity={'0.6'} padding={'5px'} textColor={'#fff'}>
                                {
                                    categories?.find(element => element.id == item.categoryId)?.title
                                }
                        </Text>
                    </Box>

                    <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                    </Box>
                        <Text fontSize={'14px'}>{item.title}</Text>
                        <Text fontSize={'18px'} fontWeight={'700'} marginTop={'15px'}> {item.price} so'm</Text>

                    <Box display={'flex'} width={'100%'} justifyContent={'space-between'} marginTop={'20px'}>
                        <Button
                            onClick={() => {
                                setSelectDeleteId(item.id)
                                showDrawer()
                            }} 
                            _active={{opacity:'0.5'}} _hover={{background:'dodgerblue'}} background={'dodgerblue'} textColor={'#fff'}>UPDATE</Button>
                        <Button
                            onClick={() =>{
                                setSelectDeleteId(() => item.id)
                                onOpenDelete()
                            }} 
                            _active={{opacity:'0.5'}} _hover={{background:'crimson'}} background={'crimson'} textColor={'#fff'}>DELETE</Button>
                    </Box>
                </Box>
                {selectDeleteId && <AlertProducts isOpen={isOpenDelete} onOpen={onOpenDelete} onClose={onClouseDelete} selectDeleteId={selectDeleteId}/>}
                {selectDeleteId &&  <UpdateProduct selectDeleteId={selectDeleteId} onClose={onClose} open={open}/>}
        </>
    );
};

export default ProductCard;
