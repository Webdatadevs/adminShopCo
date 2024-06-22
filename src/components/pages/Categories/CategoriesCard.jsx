import { Box, Button, Img, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import AlertCategories from './AlertCategories';
import getCategories from '../../../fetch/getCategories';
import { useDispatch } from 'react-redux';
import getProducts from '../../../fetch/getProduct';
import UpdateCategories from './UpdateCategories';

const CategoriesCard = ({item}) => {
    const dispatch = useDispatch()  
    const [selectDeleteId, setSelectDeleteId] = useState()

    const {
        isOpen: isOpenDelete,
        onOpen: onOpenDelete,
        onClose: onClouseDelete,
    } = useDisclosure();

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        (true);
    };

    const onClose = () => {
        setOpen(false);
    };setOpen
    
    useEffect(() =>{
      getCategories(dispatch)
      getProducts(dispatch)
    } ,[])

  return (
    <>
              <Box display={'flex'} background={'rgba(58, 37, 144, 0.1)'} 
                     flexDirection={'column'} justifyContent={'space-between'}
                     rounded={'10px'} padding={'15px'} >
                    <Box display={'flex'} overflow={'hidden'} borderRadius={'10px'}>
                      <Img src={item.image} width={'100%'} transition={'all 0.4s'} _hover={{ transform: "scale(1.1)" }}
                           borderRadius={'10px'} height={'100%'}/>
                    </Box>

                    <Box display={'flex'} flexDirection={'column'} gap={'20px'} marginTop={'15px'}>
                        <Text  fontWeight={'600'} fontSize={'18px'} textAlign={'center'}>{(item.title).toUpperCase()}</Text>
                        {/* <Text>{item.price}</Text> */}
                    </Box>

                    <Box display={'flex'} width={'100%'} justifyContent={'space-between'} marginTop={'20px'}>
                        <Button
                        onClick={() => {
                          setSelectDeleteId(item.id)
                          showDrawer()
                        }} 
                            _active={{opacity:'0.5'}} _hover={{background:'dodgerblue'}} background={'dodgerblue'} textColor={'#fff'}>UPDATE</Button>
                        <Button
                            onClick={() => {
                              setSelectDeleteId(item.id)
                              onOpenDelete()
                            }} 
                            _active={{opacity:'0.5'}} _hover={{background:'crimson'}} background={'crimson'} textColor={'#fff'}>DELETE</Button>
                    </Box>
                </Box>
                <AlertCategories isOpen={isOpenDelete} onOpen={onOpenDelete} onClose={onClouseDelete} selectDeleteId={selectDeleteId}/>
                <UpdateCategories open={open} showDrawer={showDrawer} onClose={onClose} selectDeleteId={selectDeleteId}/>
    </>
  )
}

export default CategoriesCard