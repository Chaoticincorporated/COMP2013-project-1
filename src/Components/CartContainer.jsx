import CartCard from "./CartCard";

export default function CartContainer({
    cart, 
    handleRemoveFromCart,
    handleRemoveQuantity,
    handleAddQuantity,
}){
    return (
        <div className="CartContainer">
            {cart.map((item)=>(
                <CartCard
                key={item.id}
                name={item.productName}
                {...item}
                handleRemoveFromCart={handleRemoveFromCart}
                handleAddQuantity={handleAddQuantity}
                handleRemoveQuantity={handleRemoveQuantity}
                />
            ))}
        </div>
    );
}