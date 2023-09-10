import React from "react";
import '../style/CartWidget.css'

const CartWidget = () => {
    return(
        <>
            <div className="contenedor-imgCarrito">
                < img style={{marginRight: 40}} src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="carrito de compras" width={40} />
                0
            </div>
        </>
    );
};

export default CartWidget;