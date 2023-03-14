import React, { useState } from 'react';
import { GoChevronDown, GoChevronUp } from "react-icons/go";

function ProductQuantity() {
    const [quantity, setQuantity] = useState(0);

    const increment = () => setQuantity(quantity === 10 ? quantity : quantity + 1 )
    const decrement = () => setQuantity(quantity === 0 ? 0 : quantity - 1 )
    return (
        <div className="upDown">
            <GoChevronDown onClick={decrement} className="upDownIcon"/>
            <span className="quantity">{quantity}</span>
            <GoChevronUp onClick={increment} className="upDownIcon"/>
        </div>
    )
}

export default ProductQuantity;
