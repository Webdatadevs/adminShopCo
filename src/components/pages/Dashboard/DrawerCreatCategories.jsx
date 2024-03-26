import { Box, Button, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { Drawer } from "antd";

const DrawerCreatCategories = ({open, onClose}) => {
    const toast = useToast()
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    async function creatCategories(e){
        e.preventDefault()
        let data = {
          title: title,
          image: image
        }
        await axios.post("https://datab-3.onrender.com/categories", data)
        .then((data) => {
            toast({
              title: 'Category created.',
              description: "Success",
              status: 'success',
              duration: 9000,
              isClosable: true,
              position: 'top-right',
            })
          })
          .catch((err) => {
            toast({
                title: 'error',
                description: "error",
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top-right',
              })
          })
          setTitle("")
          setImage("")
          onClose()
    }
    return (
        <>
        <Drawer title="Creat categories" onClose={onClose} open={open}>
            <Box width={'90%'} marginX={'auto'}>
                <form onSubmit={(e) => creatCategories(e)}>
                    <Box display={'grid'} gridTemplateColumns={"repeat(auto-fit, minmax(250px, 1fr))"} alignItems={'flex-end'} gap={'20px'}>
                      <FormControl marginTop={'20px'}>
                          <FormLabel textColor={'#222'}>Enter categories name</FormLabel>
                          <Input border={'1px solid rgb(58, 37, 144)'}
                              required
                              value={title} onChange={(e) =>setTitle(e.target.value) }
                              background={'#fff'} type="text" placeholder="categories name" />
                      </FormControl>
                      <FormControl marginTop={'20px'}>
                          <FormLabel textColor={'#222'}>Enter categories image</FormLabel>
                          <Input
                              border={'1px solid rgb(58, 37, 144)'}
                              required
                              value={image} onChange={(e) => setImage(e.target.value)} 
                              background={'#fff'} type="url" placeholder="categories image" />
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

export default DrawerCreatCategories;
