import QuantityCounter from "./QuantityCounter";

export default function CartCard({
    id,
    name,
    product,
    quantity,
    productPrice,
    handleRemoveFromCart,
    handleRemoveQuantity,
    handleAddQuantity,
}) {
    return (
        <div className="CartCard">
            <h2>{name}</h2>
            <div>
            <QuantityCounter 
                id={id}
                mode={"cart"}
                productQuantity={quantity}
                handleAddQuantity={handleAddQuantity}
                handleRemoveQuantity={handleRemoveQuantity}
            />
            </div>
            <div>
                <p>Total Price: ${(quantity * productPrice).toFixed(2)}</p>
            </div>
            <div>
                <button onClick={()=>(
                handleRemoveFromCart({id, product, quantity, productPrice})
            )}>
                Remove Item
            </button>
            </div>
        </div>
    );
}