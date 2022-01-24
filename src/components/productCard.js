import React from 'react';


const ProductCard = ({ product, saveProduct }) => {


    return (
        <div className="box-product">
            <div className="grid-top-product">
                <h2>{product?.name}</h2>
                <div className="img-product">
                    <img src={product.picture} alt={product.name} />
                </div>
                <p>{product?.description}</p>
                {
                    product.inventory <= 0 ?
                        undefined
                        :
                        <p>stock {product.inventory}</p>
                }
            </div>

            {
                product.inventory <= 0 ?
                    <div className="btn-empty">
                       Producto Agotado
                    </div>
                    :
                    <div className="btn-product" onClick={()=>saveProduct(product)}>
                        Agregar al carrito
                    </div>
            }

        </div>
    );
};

export default ProductCard;

