import QuantityCounter from "./QuantityCounter";

export default function CartCard({
    id,
    product,
    quantity,
    productPrice,
    handleRemoveFromCart,
    handleRemoveQuantity,
    handleAddQuantity,
}) {
    return (
        <div className="CartCard">
            <h2>{product}</h2>
            <QuantityCounter 
                id={id}
                mode={"cart"}
                productQuantity={quantity}
                handleAddQuantity={handleAddQuantity}
                handleRemoveQuantity={handleRemoveQuantity}
            />
            <p>Total Price: ${(quantity * productPrice).toFixed(2)}</p>
            <button onClick={()=>(
                handleRemoveFromCart({id, product, quantity, productPrice})
            )}>
                Remove Item
            </button>
        </div>
    );
}