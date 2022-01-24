import React, {useState} from 'react';
import img from "../tools/images";


const ItemCheckout = ({ item, totalArray, setTotalArray, id}) => {

    const price = item.price;
    const maxValue = item.inventory;

    const [quantity, setQuantity]=useState(1);
    const [totalPrice, setTotalPrice]=useState(price);

    const sumAction =()=> {
        if (quantity < maxValue) {
            setQuantity(quantity+1)
            setTotalPrice(price * (quantity+1))
            let matchId = totalArray.find((i)=>i.id === id);
            if (!!matchId) {
                let arraySet = totalArray.filter((i)=>i.id !== id)
                let newAction = {"id": id, "price": price * (quantity+1), 'quantity': (quantity+1)}
                let sendArray = [...arraySet, newAction]
                setTotalArray(sendArray)
            }
        }
    }

    const restAction =()=> {
        if (quantity > 1) {
            setQuantity(quantity-1)
            setTotalPrice(price * (quantity-1))
            let matchId = totalArray.find((i)=>i.id === id);
            if (!!matchId) {
                let arraySet = totalArray.filter((i)=>i.id !== id)
                let newAction = {"id": id, "price": price * (quantity-1), 'quantity': (quantity-1)}
                let sendArray = [...arraySet, newAction]
                setTotalArray(sendArray)
            }
        }
    }

    return (
        <div className="item-checkout" key={item.id}>
            <img src={item.picture} alt={item.name} />
            <div>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>stock {item.inventory}</p>
            </div>
            <div className="content-values">
                <div className="spinner-btns">
                    <div className="btn-quantity" onClick={restAction}>-</div>
                    {quantity}
                    <div className="btn-quantity" onClick={sumAction}>+</div>
                </div>
                <div className="value-public">{totalPrice}</div>
            </div>
        </div>
    );
};

export default ItemCheckout;

