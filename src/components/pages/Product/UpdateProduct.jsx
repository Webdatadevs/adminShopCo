import React, { useEffect, useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, useToast, Textarea } from "@chakra-ui/react";
import { Drawer } from "antd";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Select, Space } from "antd";
import getCategories from "../../../fetch/getCategories";
import getProducts from "../../../fetch/getProduct";

const UpdateProduct = ({open, onClose, selectDeleteId}) => {

    const {categories} = useSelector(state => state.categories)
    const {products} = useSelector(state => state.products)
    const dispatch = useDispatch()
    const toast = useToast()
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState("")
    const [categoryId, setSelectId] = useState("")
    const [description, setDescription] = useState("")
    
    async function updateProducts(e) {
      e.preventDefault();
      let data = {
          title,
          image,
          price,
          description,
          categoryId
      };
      try {
          await axios.put(`https://datab-3.onrender.com/products/${selectDeleteId}`, data);
          toast({
              title: 'Product updated.',
              description: "Success",
              status: 'success',
              duration: 9000,
              isClosable: true,
              position: 'top-right',
          });
          await getProducts(dispatch);
          await getCategories(dispatch);
          onClose();
      } catch (error) {
          console.error("Error updating product:", error);
          toast({
            title: 'error.',
            description: "error",
            status: 'error',
            duration: 9000,
            isClosable: true,
            position: 'top-right',
          })
      }
  }
  
      useEffect(() =>{
            setTitle(`${products?.find(item => item.id === selectDeleteId)?.title}`)
            setImage(`${products?.find(item => item.id === selectDeleteId)?.image}`)
            setPrice(`${products?.find(item => item.id === selectDeleteId)?.price}`)
            setSelectId(`${products?.find(item => item.id === selectDeleteId)?.categoryId}`)
            setDescription(`${products?.find(item => item.id === selectDeleteId)?.description}`)
      } ,[selectDeleteId])
    return (
        <>
        <Drawer title="Creat categories" onClose={onClose} open={open}>
            <Box width={'90%'} marginX={'auto'}>
                <form onSubmit={(e) => updateProducts(e)}>
                    <Box display={'grid'} gridTemplateColumns={"repeat(auto-fit, minmax(250px, 1fr))"} alignItems={'flex-end'} gap={'20px'}>
                      <FormControl marginTop={'20px'}>
                          <FormLabel textColor={'#222'}>Enter product name</FormLabel>
                          <Input border={'1px solid rgb(58, 37, 144)'} textColor={'#222'}
                                required
                              value={title} onChange={(e) =>setTitle(e.target.value) }
                              background={'#fff'} type="text" placeholder="categories name" />
                      </FormControl>
                      <FormControl marginTop={'20px'}>
                          <FormLabel textColor={'#222'}>Enter product image</FormLabel>
                          <Input border={'1px solid rgb(58, 37, 144)'} textColor={'#222'}
                                required
                              value={image} onChange={(e) => setImage(e.target.value)} 
                              background={'#fff'} type="url" placeholder="categories image" />
                      </FormControl>
                      <FormControl>
                        <FormLabel textColor={'#222'}>
                          Enter product price
                        </FormLabel>
                        <Input border={'1px solid rgb(58, 37, 144)'} textColor={'#222'}
                              required 
                              value={price} onChange={(e) => setPrice(e.target.value)}
                              background={'#fff'} type="number" placeholder="Enter price"/>
                      </FormControl>
                      <FormControl>
                        <FormLabel textColor={'#222'}>
                          Enter your product description
                        </FormLabel>
                        <Textarea border={'1px solid rgb(58, 37, 144)'} textColor={'#222'}
                              required
                              value={description} onChange={(e) => setDescription(e.target.value)} 
                              background={'#fff'} resize={"none"} placeholder="Enter description"/>
                      </FormControl>
                      <FormControl>
                        <Box>
                          Enter product categories
                        </Box>
                        {/* <Select required background={'#fff'} onChange={(e) => {
                          setSelectId(e.target.value)
                          console.log(e.target.value)
                        } } value={categoryId}>
                          {
                              categories.map((element) => (
                                <option key={element.id} value={element.id}>{element.title}</option>
                              ))
                          }
                        </Select> */}
                        <Space wrap>
                          <Select
                            defaultValue=""
                            style={{
                              width: 120,
                            }}
                            onChange={setSelectId}
                            options={[
                              ...categories.map((element) => (
                                {
                                  value: element.id,
                                  label: element.title,
                                }
                                ))
                              ]}
                          />
                        </Space>
                      </FormControl>
                      <FormControl>
                          <Button marginTop={'20px'} _hover={{background:'rgb(58, 37, 144)'}} _active={{opacity:'0.5'}} 
                                    background={'rgb(58, 37, 144)'} textColor={'#fff'} type="submit" size={'lg'}>SEND</Button>
                      </FormControl>
                    </Box>
                </form>
            </Box>
        </Drawer>
        </>
    );
};

export default UpdateProduct;
