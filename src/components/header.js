import React, {useState} from 'react';

import { NavLink } from "react-router-dom";

import img from '../tools/images'


const Header = ({listItemSelected}) => {

    const [isDrop, setIsDrop] = useState(false);

    const showCar =()=> {
        setIsDrop(!isDrop)
    }


    return (
        <>
            <header className="header">
                <div></div>
               <div className="relative">
                   <div className="car" onClick={showCar}>
                       {
                           listItemSelected.length > 0 ?
                               <div className="itemNotification">
                                   {listItemSelected.length}
                               </div>
                               :
                               undefined
                       }
                       <img src={img.Car}/>
                   </div>

                   {
                       !!isDrop ?
                           <div className="content-car">
                               <div className="displayItemHeader">
                                   {
                                       listItemSelected.length !== 0 ?
                                           <>
                                               {!!listItemSelected && listItemSelected?.length>0 && listItemSelected.map((product, i) => (
                                                   <div className="item" key={product.id}>
                                                       <img src={product.picture} alt={product.name} />
                                                       <div className="grid-inter-info-items">
                                                           <h3>{product.name}</h3>
                                                           <p>{product.description}</p>
                                                       </div>

                                                   </div>
                                               ))}
                                           </>
                                           :
                                           <div className="noneItems">No tienes productos en el carrito</div>
                                   }
                               </div>

                               <NavLink to={"/checkout"} className="btn-continue">
                                   Comprar
                               </NavLink>
                           </div>
                           :
                           undefined
                   }
               </div>
                {
                    !!isDrop ?
                        <div className="absolute-close" onClick={showCar}></div>
                        :
                        undefined
                }

            </header>
            <div className="space-header"></div>
        </>
    );
};

export default Header;

