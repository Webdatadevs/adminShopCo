import { Box, Button, Img, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProducts from "../../../fetch/getProduct";


const BannerProducts = () => {
    const {products} = useSelector(state => state.products);
    const dispatch = useDispatch()
    useEffect(() =>{
        getProducts(dispatch)
      }, [])
  return (
    <>
        <Box width={'90%'} marginX={'auto'} marginTop={'20px'} display={'grid'} 
                 gridTemplateColumns={"repeat(auto-fit, minmax(250px, 1fr))"} padding={'10px'} background={'rgba(58, 37, 144, 0.8)'}
                 alignItems={'center'} justifyContent={'center'} >
                <Box>
                  <Text textColor={'white'} fontSize={'20px'}>PRODUCTS</Text>
                  <Text textColor={'white'} fontSize={'18px'}>quantity: {products.length}</Text> 
                </Box>
                <Box display={'flex'} flexWrap={'wrap'}>
                  {
                    products.map(item => (
                      <Img  key={item.id} borderRadius={'10px'} width={'100px'} height={'100px'} src={item.image}/>
                    ))
                  }
                </Box>
        </Box>
    </>
  )
}

export default BannerProducts