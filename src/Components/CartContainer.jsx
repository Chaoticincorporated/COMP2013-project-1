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
                productPrice={item.price.replace("$", "")}
                quantity={item.quantity.replace(" ", "").replace("g", "")
                    .replace("lb", "").replace("mL", "")
                    .replace("kg", "").replace("L", "")}
                type={item.quantity
                    .replace(" ", "").replace("1", "")
                    .replace("2", "").replace("3", "")
                    .replace("4", "").replace("5", "")
                    .replace("6", "").replace("7", "")
                    .replace("8", "").replace("9", "")
                    .replace("0", "")}
                {...item}
                handleRemoveFromCart={handleRemoveFromCart}
                handleAddQuantity={handleAddQuantity}
                handleRemoveQuantity={handleRemoveQuantity}
                />
            ))}
        </div>
    );
}