import axios from "axios";
import React, { useEffect, useState } from "react";
import Namecard from "./Card";

const Product = () => {
    const [productData, setProductData] = useState([]);

    const apiFun = async () => {
        const myData = await axios.get("https://fakestoreapi.com/products");
        console.log(await myData)
        setProductData(myData.data);
    };
    useEffect(() => {
        apiFun();
    }, []);

    return (
        <>
            {productData.map((product) => {
                return <Namecard key={product.id} product={product} />;
            })}
        </>
    );
}

export default Product