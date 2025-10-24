import CartContainer from "./CartContainer";
import ProductContainer from "./ProductsContainer";

export default function GroceriesAppContainer({ products}) {
    const handleAddQuantity = (productId) => {
        const newProductQuantity = productQuantity.map((prod)=>{
            if(prod.id===productId&&prod.quantity>0)
            {
                return {...prod, quantity: prod.quantity + 1};
            }
            setProductQuantity(newProductQuantity);
            return prod;
        });
    };
    const handleRemoveQuantity = (productId) => {
        const newProductQuantity = productQuantity.map((prod)=>{
            if(prod.id===productId&&prod.quantity>0)
            {
                return {...prod, quantity: prod.quantity - 1};
            }
            setProductQuantity(newProductQuantity);
            return prod;
        });
    };
    const handleAddToCart = (productToAdd)=>{
        const currentProduct = data.find((prod)=>prod.id===productToAdd.id);
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
    return (
        <div>
            <div>
                <ProductContainer
                products={products}
                productQuantity={productQuantity}
                handleAddToCart={handleAddToCart}
                handleAddQuantity={handleAddQuantity}
                handleRemoveQuantity={handleRemoveQuantity}
                />
            </div>
            <div></div>
        </div>
    );
}