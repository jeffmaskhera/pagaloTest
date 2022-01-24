import React, {useState, useEffect,} from 'react';
import { useForm } from "react-hooks-helper";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/productCard"
import ItemCheckout from "../components/itemCheckout";
import { validateForm } from "../tools/validationForm";

import { NavLink } from "react-router-dom";
import img from '../tools/images'
import FormCheckout from "../components/form";


const Checkout = ({}) => {

    const listItemSelected = useSelector((state) => state.product.productInCurse);
    const [isRender, setIsRender]=useState(false);
    const [totalArray, setTotalArray]=useState([]);
    const [totalCheckout, setTotalCheckout]=useState(0);
    const [stepCheckout, setStepCheckout]=useState(1);

    const defaultData = {
        document: "",
        name: "",
        address: "",
        email: "",
        numberCard: "",
        cvvCode: "",
    };

    const [formData, setForm] = useForm(defaultData);


    const modifyTotal =(item)=> {
        let objCreate = {
            'id': item.id,
            'price': item.price,
            'quantity': 1,
        }
        setTotalArray([...totalArray, objCreate])
    }


    useEffect(() => {
        setIsRender(true)
    }, []);


    useEffect(() => {
        var valuesArray = totalArray;
        var sum = 0;
        for (let i = 0; i < valuesArray?.length; i++) {
            sum = sum + valuesArray[i].price
        }
        setTotalCheckout(sum)
    }, [totalArray]);




    return (
        <div className="checkoutPage">
            <h1>checkout</h1>

            <>
                {
                    stepCheckout === 1 ?
                        <>
                            {
                                !!isRender ?
                                    <>
                                        {
                                            listItemSelected.length > 0 ?
                                                <>
                                                    <div className="grid-checkout">
                                                        {!!listItemSelected && listItemSelected?.length>0 && listItemSelected.map((item, i) => (
                                                            <div key={item.id} onLoad={()=>modifyTotal(item)}>
                                                                <ItemCheckout item={item} id={item.id} totalArray={totalArray} setTotalArray={setTotalArray}/>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="totalCheck">
                                                        <h3>total de su compra {totalCheckout}</h3>
                                                        <div className="btn-next" onClick={()=>setStepCheckout(2)}>
                                                        Siguiente
                                                        </div>
                                                    </div>
                                                </>
                                                :
                                                <h2>No hay productos en el carrito</h2>
                                        }
                                    </>
                                    :
                                    undefined
                            }
                        </>
                        :
                        undefined
                }
            </>

            <>
                {
                    stepCheckout === 2 ?
                        <FormCheckout
                            formData={formData}
                            setForm={setForm}
                            listItemSelected={listItemSelected}
                            totalArray={totalArray}
                            setStepCheckout={setStepCheckout}
                        >
                        </FormCheckout>
                        :
                        undefined
                }
            </>

            <>
                {
                    stepCheckout === 3 ?
                        <div>
                            <h2>Gracias por tu compra</h2>
                            <div></div>
                            <NavLink to={"/"} className="btn-next">
                                Regresar al home
                            </NavLink>
                        </div>
                        :
                        undefined
                }
            </>



        </div>
    );
};

export default Checkout;

