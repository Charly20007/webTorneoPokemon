import { useContext } from "react";
import Layout from "../components/Layout"
import TicketCard from "../components/TicketCard"
import { CartContext } from "../context/CartContext";

const Tickets = () => {
    const { addItem, removeItem } = useContext(CartContext)

    const handleAddToCart = (type: string, price: string) => {
        addItem({ type, price,  quantity: 1 }); // Agrega el ticket al carrito
        console.log("Ticket comprado:", type, price);
    };

    const handleRemoveFromCart = (type: string) => {
        removeItem(type); // Quita el ticket del carrito
        console.log("Ticket quitado:", type);
    };
    
    return(
        <Layout>
            <div className="p-4">
                <h1 className="text-2xl font-bold">Entradas</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TicketCard 
                        type="Entrada General" 
                        price="$50" 
                        onAddToCart={() => handleAddToCart("Entrada General", "$50")} 
                        onRemoveFromCart={() => handleRemoveFromCart("Entrada General")}    
                    />
                    <TicketCard 
                        type="Entrada VIP" 
                        price="$100" 
                        onAddToCart={() => handleAddToCart("Entrada VIP", "$100")} 
                        onRemoveFromCart={() => handleRemoveFromCart("Entrada VIP")}
                    />
                </div>
            </div>
        </Layout>
    )
}

export default Tickets