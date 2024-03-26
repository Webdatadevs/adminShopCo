import axios from "axios";
import React, { useEffect } from "react";
import getCategories from "../../../fetch/getCategories";
import getProducts from "../../../fetch/getProduct";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, useToast } from "@chakra-ui/react";
import deleteProductsIdNull from "./deleteIdNullProducts";

const AlertCategories = ({isOpen, onClose, onOpen, selectDeleteId}) => {
    const {products} = useSelector(state => state.products);
    const {categories} = useSelector(state => state.products)
    const dispatch = useDispatch()
    const toast = useToast()
    

    async function deleteCategories(id){
        await axios.delete(`https://datab-3.onrender.com/categories/${id}`)
        .then((data) => {
            toast({
                title: 'Category deleted.',
                description: "Success",
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top-right',
            })
            deleteProductsIdNull()
            // console.log(data)
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
        onClose()
    }
    useEffect(() =>{
        getCategories(dispatch)
        getProducts(dispatch)
    } , [])
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
                            deleteCategories(selectDeleteId)
                            
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

export default AlertCategories;
