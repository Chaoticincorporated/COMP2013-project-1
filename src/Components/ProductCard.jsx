import QuantityCounter from "./QuantityCounter";

export default function ProductCard({
    img,
    product,
    productQuantity,
    handleAddQuantity,
    handleRemoveQuantity,
    handleAddToCart,
}){
    return (
        <div className="ProductCard">
            <img src={img} alt=""/>
            <h3>{product}</h3>
            <QuantityCounter 
                id={productQuantity.id}
                mode={"product"}
                productQuantity={productQuantity.quantity}
                handleAddQuantity={handleAddQuantity}
                handleRemoveQuantity={handleRemoveQuantity}
            />
            <p>Price: ${product.price}</p>
            <button onClick={()=>handleAddToCart(productQuantity)}></button>
        </div>
    );
}