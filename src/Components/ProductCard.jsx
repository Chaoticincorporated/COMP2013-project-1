import QuantityCounter from "./QuantityCounter";

export default function ProductCard({
    img,
    name,
    price,
    product,
    productQuantity,
    handleAddQuantity,
    handleRemoveQuantity,
    handleAddToCart,
}){
    return (
        <div className="ProductCard">
            <img src={img} alt=""/>
            <h3>{name}</h3>
            <QuantityCounter 
                id={productQuantity.id}
                mode={"product"}
                productQuantity={productQuantity.quantity}
                handleAddQuantity={handleAddQuantity}
                handleRemoveQuantity={handleRemoveQuantity}
            />
            <p>Price: ${price.replace("$", "")}</p>
            <button onClick={()=>handleAddToCart(productQuantity)}>Add to Cart</button>
        </div>
    );
}