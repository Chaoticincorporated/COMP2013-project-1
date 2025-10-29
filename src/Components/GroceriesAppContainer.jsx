import { useState } from "react";
import CartContainer from "./CartContainer";
import ProductContainer from "./ProductsContainer";
import NavBar from "./NavBar";

export default function GroceriesAppContainer({products,}) {
    const [productQuantity, setProductQuantity] = useState(
        products.map((prod) => {
            return {id: prod.id,quantity: prod.quantity,productPrice: prod.price,};
        })
    );
    const [cart, setCart] = useState([]);
    const handleAddQuantity = (productId) => {
        const newProductQuantity = productQuantity.map((prod)=>{
            if(prod.id===productId)
            {
                return {...prod, quantity: prod.quantity + 1};
            }
            return prod;
        });
        setProductQuantity(newProductQuantity);
        
    };
    const handleRemoveQuantity = (productId, mode) => {
        const newProductQuantity = productQuantity.map((prod)=>{
            if (mode === "product")
            {
                if(prod.id===productId&&prod.quantity>0)
                {
                    return {...prod, quantity: prod.quantity - 1};
                }
            } else {
                if(prod.id===productId&&prod.quantity>1)
                {
                    return {...prod, quantity: prod.quantity - 1};
                }
            }
            return prod;
        });
        setProductQuantity(newProductQuantity);
        
    };
    const handleAddToCart = (productToAdd)=>{
        const currentProduct = products.find((prod)=>prod.id===productToAdd.id);
        const productInCart = cart.find((item)=>item.id===productToAdd.id);
        if (productToAdd.quantity === 0)
        {
            alert("please add quantity before adding to cart");
            return;
        }
        if (!productInCart){
            setCart((prevCart)=>{
                return [
                    ...prevCart,
                    {
                        ...currentProduct,
                        quantity:productToAdd.quantity,
                        productPrice:productToAdd.price,
                    },
                ];
            });
        } else {
            alert("Item already exist in cart");
        }
    }
    const handleRemoveFromCart = (cartItem) => {
        const filteredCart = cart.filter((item) => item.id !== cartItem.id);
        setCart(filteredCart);
    };
    return (
        <div>
            <div>
                <NavBar
                username={"Maxwell"}
                />
            </div>
            <div>
                <ProductContainer
                products={products}
                productQuantity={productQuantity}
                handleAddToCart={handleAddToCart}
                handleAddQuantity={handleAddQuantity}
                handleRemoveQuantity={handleRemoveQuantity}
                />
            </div>
            <div>
                <h1>Cart Items: {cart.length}</h1>
                <p>{cart.length === 0 && "Cart is empty"}</p>
                <CartContainer
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                handleAddQuantity={handleAddQuantity}
                handleRemoveQuantity={handleRemoveQuantity}
                />
            </div>
        </div>
    );
}