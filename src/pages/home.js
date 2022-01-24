import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/productCard";
import Header from "../components/header";
import {readProducts, saveProductCarAction} from "../modules/actions/productActions";
import {dataInfo} from "../tools/data";

const Home = ({}) => {
    const dispatch = useDispatch();

    const listProduct = useSelector((state) => state.product.products);
    const listItemSelected = useSelector((state) => state.product.productInCurse);
    const infoData = dataInfo
    const [productSave, setProductSave] = useState(listItemSelected);

    const saveProduct =(value)=> {
        let valueId = value.id;
        let matchId = productSave.find((i)=>i.id === valueId);
        if (!matchId) {
            setProductSave([...productSave, value])
        }
    }

    useEffect(() => {
        if (listProduct.length > 0) {
            dispatch(readProducts(listProduct))
        } else {
            dispatch(readProducts(infoData))
        }
        dispatch(saveProductCarAction(productSave))
    }, [productSave]);



    return (
        <>
            <Header listItemSelected={productSave}/>
            <div className="content-page-products">
                <h1>Puede escoger su producto</h1>
                <div className="grid-product-list">
                    {!!listProduct && listProduct?.length>0 && listProduct.map((product, i) => (
                        <ProductCard product={product} saveProduct={saveProduct} key={product.id}/>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;

