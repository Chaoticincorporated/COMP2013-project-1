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
                productQuantity={productQuantity.quantity
                    .replace(" ", "").replace("g", "")
                    .replace("lb", "").replace("mL", "")
                    .replace("kg", "").replace("L", "")}
                type={productQuantity.quantity
                    .replace(" ", "").replace("1", "")
                    .replace("2", "").replace("3", "")
                    .replace("4", "").replace("5", "")
                    .replace("6", "").replace("7", "")
                    .replace("8", "").replace("9", "")
                    .replace("0", "")}
                handleAddQuantity={handleAddQuantity}
                handleRemoveQuantity={handleRemoveQuantity}
            />
            <p>Price: ${price.replace("$", "")}</p>
            <button onClick={()=>handleAddToCart(productQuantity)}>Add to Cart</button>
        </div>
    );
}