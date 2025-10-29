import { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductContainer({
    products,
    productQuantity,
    handleAddQuantity,
    handleRemoveQuantity,
    handleAddToCart,
}) {
    return(
        <div className="ProductsContainer">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    img={product.image}
                    name={product.productName}
                    price={product.price}
                    {...product}
                    productQuantity={productQuantity.find(
                        (prod) => prod.id == product.id
                    )}
                    handleAddQuantity={handleAddQuantity}
                    handleRemoveQuantity={handleRemoveQuantity}
                    handleAddToCart={handleAddToCart}
                />
            ))}
        </div>
    );
}