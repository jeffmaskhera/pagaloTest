import React, {useState,} from 'react';
import {validateForm} from "../tools/validationForm";
import {useDispatch, useSelector} from "react-redux";
import {buyProductsAction, cleanCar} from "../modules/actions/productActions";



const FormCheckout = ({formData, setForm, listItemSelected, totalArray, setStepCheckout}) => {
    const [errors, setErrors] = useState({});
    const { document, name, address, email, numberCard, cvvCode } = formData;
    const listProduct = useSelector((state) => state.product.products);
    const dispatch = useDispatch();


    
    const createUserSellerfn = () => {
        const errorsValidation = validateForm(formData);
        setErrors(errorsValidation);
        if (Object.keys(errorsValidation).length === 0) {
            let sendNewArray = [];
            for (let i = 0; i < listProduct?.length; i++) {
                let preData = listProduct[i]
                if (totalArray[i]) {
                    let interNewData = {'inventory': (listProduct[i].inventory - totalArray[i].quantity)}
                    let dataSend = {
                        ...preData,
                        ...interNewData
                    }
                    sendNewArray = [...sendNewArray, dataSend]
                } else {
                    sendNewArray = [...sendNewArray, listProduct[i]]
                }
            }
            dispatch(buyProductsAction(sendNewArray))
            dispatch(cleanCar())
            setStepCheckout(3)

        } else {
            console.log("falla en el envío")
        }
    };

    const maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(
                0,
                object.target.maxLength
            );
        }
    };

    return (
        <>
            <div className="grid-page">
                <div className="grid-form">

                    <div className="content-input">
                        <label className="labelForm" htmlFor="document">
                            Document Number
                        </label>
                        <input
                            type="number"
                            name="document"
                            value={document}
                            onChange={setForm}
                            maxLength="10"
                            onInput={maxLengthCheck}
                            required
                        />

                        {errors.document ?
                            <p className="contentInput__error">{errors.document}</p>
                            :
                            undefined
                        }
                    </div>

                    <div className="content-input">
                        <label className="labelForm" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={setForm}
                            required
                        />

                        {errors.name ?
                            <p className="contentInput__error">{errors.name}</p>
                            :
                            undefined
                        }
                    </div>

                    <div className="content-input">
                        <label className="labelForm" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={setForm}
                            required
                        />

                        {errors.email ?
                            <p className="contentInput__error">{errors.email}</p>
                            :
                            undefined
                        }
                    </div>

                    <div className="content-input">
                        <label className="labelForm" htmlFor="address">
                            Address
                        </label>
                        <input
                            type="text"
                            name="address"
                            value={address}
                            onChange={setForm}
                            required
                        />

                        {errors.address ?
                            <p className="contentInput__error">{errors.address}</p>
                            :
                            undefined
                        }
                    </div>

                    <div className="content-input">
                        <label className="labelForm" htmlFor="numberCard">
                            Number Card
                        </label>
                        <input
                            type="number"
                            name="numberCard"
                            value={numberCard}
                            onChange={setForm}
                            maxLength="10"
                            onInput={maxLengthCheck}
                            required
                        />

                        {errors.numberCard ?
                            <p className="contentInput__error">{errors.numberCard}</p>
                            :
                            undefined
                        }
                    </div>

                    <div className="content-input">
                        <label className="labelForm" htmlFor="cvvCode">
                            CVV CODE
                        </label>
                        <input
                            type="number"
                            name="cvvCode"
                            value={cvvCode}
                            onChange={setForm}
                            maxLength="3"
                            onInput={maxLengthCheck}
                            required
                        />

                        {errors.cvvCode?
                            <p className="contentInput__error">{errors.cvvCode}</p>
                            :
                            undefined
                        }
                    </div>


                </div>

                <div
                    className="btn-send"
                    onClick={() => createUserSellerfn()}
                >
                    BUY</div>
            </div>
        </>
    );
};

export default FormCheckout;

