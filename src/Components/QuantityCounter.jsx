export default function QuantityCounter({
    productQuantity,
    type,
    handleAddQuantity,
    handleRemoveQuantity,
    id,
    mode,
}) {
    return (
        <div className="ProductQuantityDiv">
            <div>
                <button onClick={() => handleRemoveQuantity(id,mode)} >-</button>
            </div>
            <p>{productQuantity} {type}</p>
            <div>
                <button onClick={() => handleAddQuantity(id)} >+</button>
            </div>
        </div>
    );
}