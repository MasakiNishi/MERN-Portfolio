import React from 'react';
import ProductRow from '../components/ProductRow.js';

function OrderPage({products}) {
    return (
        <>
            <h2 className="subpage">Order</h2>
            <article>
                <p>You can order a product from the product table.</p>
                <table>
                    <caption>Product Table</caption>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Choose Quantity {'(up to 10)'}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, i) => <ProductRow product={product} key={i} />)}
                    </tbody>
                </table>
            </article>
        </>
    )
}

export default OrderPage;
