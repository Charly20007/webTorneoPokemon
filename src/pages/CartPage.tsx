import Cart from "../components/Cart"
import Layout from "../components/Layout"

const CartPage = () => {
    return(
        <Layout>
            <div className="p-4">
                <h1 className="text-2xl font-bold">Tu Carrito</h1>
                <Cart />
            </div>
        </Layout>
    )
}

export default CartPage