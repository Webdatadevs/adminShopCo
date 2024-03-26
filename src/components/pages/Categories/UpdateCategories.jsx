import { Box, Button, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import getCategories from "../../../fetch/getCategories";

const UpdateCategories = ({open, onClose, selectDeleteId}) => {
    const {categories} = useSelector(state => state.categories)
    const dispatch = useDispatch()
    const toast = useToast()
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    
    async function updateCategories(e){
        e.preventDefault()
        let data = {
          title: title,
          image: image
        }
        await axios.put(`https://datab-3.onrender.com/categories/${selectDeleteId}`, data)
        .then((data) => {
            toast({
              title: 'Category updated.',
              description: "Success",
              status: 'success',
              duration: 9000,
              isClosable: true,
              position: 'top-right',
            })
          })
          .catch((err) => {
            toast({
                title: 'error.',
                description: "error",
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top-right',
              })
          })
        //   setTitle("")
        //   setImage("")
          onClose()
          getCategories(dispatch)
    }
    useEffect(() =>{
        setTitle(`${categories?.find(item => item.id === selectDeleteId)?.title}`)
        setImage(`${categories?.find(item => item.id === selectDeleteId)?.image}`)
  } ,[selectDeleteId])
    return (
        <>
        <Drawer title="Creat categories" onClose={onClose} open={open}>
            <Box width={'90%'} marginX={'auto'}>
                <form onSubmit={(e) => updateCategories(e)}>
                    <Box display={'grid'} gridTemplateColumns={"repeat(auto-fit, minmax(250px, 1fr))"} alignItems={'flex-end'} gap={'20px'}>
                      <FormControl marginTop={'20px'}>
                          <FormLabel textColor={'#222'}>Enter categories name</FormLabel>
                          <Input border={'1px solid rgb(58, 37, 144)'} textColor={'#222'}
                              required
                              value={title} onChange={(e) =>setTitle(e.target.value) }
                               type="text" placeholder="categories name" />
                      </FormControl>
                      <FormControl marginTop={'20px'}>
                          <FormLabel textColor={'#222'}>Enter categories image</FormLabel>
                          <Input border={'1px solid rgb(58, 37, 144)'} textColor={'#222'}
                              required
                              value={image} onChange={(e) => setImage(e.target.value)} 
                               type="url" placeholder="categories image" />
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

export default UpdateCategories;
