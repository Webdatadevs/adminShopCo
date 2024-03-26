import axios from "axios";
import React, { useEffect } from "react";
import getCategories from "../../../fetch/getCategories";
import getProducts from "../../../fetch/getProduct";
import { useDispatch } from "react-redux";
import { Button, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, useToast } from "@chakra-ui/react";

const AlertProducts = ({isOpen, onClose, onOpen, selectDeleteId}) => {
    const dispatch = useDispatch()
    const toast = useToast()
    async function deleteProducts(id){
        await axios.delete(`https://datab-3.onrender.com/products/${id}`)
        .then((data) => {
            onClose()
            // console.log(data)
            toast({
                title: 'product deleted.',
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
        getProducts(dispatch)
    }
    useEffect(() =>{
        getCategories(dispatch)
    } ,[])
    return (
        <>
            <Modal
                closeOnOverlayClick={false}
                isOpen={isOpen}
                onClose={onClose}
            >
                {/* <ModalOverlay /> */}
                <ModalContent>
                    <ModalHeader>DELETE PRODUCT</ModalHeader>
                    <ModalCloseButton />

                    <ModalFooter>
                        <Button
                        background={'crimson'}
                        _hover={{background:'crimson'}}
                        onClick={() => {
                            deleteProducts(selectDeleteId)
                            
                        }} 
                        colorScheme="blue" mr={3}>
                            DELETE
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AlertProducts;
