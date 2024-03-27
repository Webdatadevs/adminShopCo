import React, { useEffect } from "react";
import getProducts from "../../../fetch/getProduct";
import { useDispatch, useSelector } from "react-redux";
import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import MainLayout from "../MainLayout";
import SkeletonComponent from "./SkeletonComponent";

const Products = () => {
    const { products, isLoading } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const data = [1, 2, 3, 4, 5]
    useEffect(() => {
        getProducts(dispatch);
    }, []);
    return (
        <>
            <MainLayout>
                {isLoading && products.length===0 ? 
                //  <Box padding='6' boxShadow='lg' bg='white'>
                //     <SkeletonCircle size='10' />
                //     <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                // </Box>
                data.map(item => (
                    <SkeletonComponent key={item}/>
                ))
                :
                products.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </MainLayout>
        </>
    );
};

export default Products;
