import { useContext } from "react";
import Layout from "../components/Layout"
import TicketCard from "../components/TicketCard"
import { CartContext } from "../context/CartContext";

const Tickets = () => {
    const { addItem, removeItem } = useContext(CartContext)

    const handleAddToCart = (type: string, price: string) => {
        addItem({ type, price,  quantity: 1 }); // Agrega el ticket al carrito
    };

    const handleRemoveFromCart = (type: string) => {
        removeItem(type); // Quita el ticket del carrito
    };
    
    return(
        <Layout>
            <div className="p-4">
                <h1 className="text-2xl font-bold text-center">Tipos de Entradas Disponibles</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <TicketCard 
                        type="Entrada Básica" 
                        price="$30" 
                        onAddToCart={() => handleAddToCart("Entrada Básica", "$30")} 
                        onRemoveFromCart={() => handleRemoveFromCart("Entrada Básica")}
                    />
                    <TicketCard 
                        type="Entrada Estándar" 
                        price="$40" 
                        onAddToCart={() => handleAddToCart("Entrada Estándar", "$40")} 
                        onRemoveFromCart={() => handleRemoveFromCart("Entrada Estándar")}
                    />
                    <TicketCard 
                        type="Entrada General" 
                        price="$50" 
                        onAddToCart={() => handleAddToCart("Entrada General", "$50")} 
                        onRemoveFromCart={() => handleRemoveFromCart("Entrada General")}    
                    />
                    <TicketCard 
                        type="Entrada Preferencial" 
                        price="$75" 
                        onAddToCart={() => handleAddToCart("Entrada Preferencial", "$75")} 
                        onRemoveFromCart={() => handleRemoveFromCart("Entrada Preferencial")}
                    />
                    <TicketCard 
                        type="Entrada VIP" 
                        price="$100" 
                        onAddToCart={() => handleAddToCart("Entrada VIP", "$100")} 
                        onRemoveFromCart={() => handleRemoveFromCart("Entrada VIP")}
                    />
                    <TicketCard 
                        type="Entrada Platino" 
                        price="$150" 
                        onAddToCart={() => handleAddToCart("Entrada Platino", "$150")} 
                        onRemoveFromCart={() => handleRemoveFromCart("Entrada Platino")}
                    />
                    <TicketCard 
                        type="Entrada Oro" 
                        price="$200" 
                        onAddToCart={() => handleAddToCart("Entrada Oro", "$200")} 
                        onRemoveFromCart={() => handleRemoveFromCart("Entrada Oro")}
                    />
                    <TicketCard 
                        type="Entrada Diamante" 
                        price="$250" 
                        onAddToCart={() => handleAddToCart("Entrada Diamante", "$250")} 
                        onRemoveFromCart={() => handleRemoveFromCart("Entrada Diamante")}
                    />
                </div>
            </div>
        </Layout>
    )
}

export default Tickets