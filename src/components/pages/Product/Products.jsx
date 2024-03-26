import React, { useEffect } from "react";
import getProducts from "../../../fetch/getProduct";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import MainLayout from "../MainLayout";

const Products = () => {
    const { products } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        getProducts(dispatch);
    }, []);
    return (
        <>
            <MainLayout>
                {products.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </MainLayout>
        </>
    );
};

export default Products;
