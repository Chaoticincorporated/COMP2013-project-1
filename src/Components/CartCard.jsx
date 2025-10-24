export default function CartCard({
    id,
    product,
    quantity,
    productPrice,
    handleRemoveFromCart,
}) {
    return (
        <div className="CartCard">
            <h2>{product}</h2>
            <p>Quantity: {quantity}</p>
            <p>Total Price: ${(quantity * productPrice).toFixed(2)}</p>
            <button onClick={()=>(
                handleRemoveFromCart({id, product, quantity, productPrice})
            )}>
                Remove Item
            </button>
        </div>
    );
}