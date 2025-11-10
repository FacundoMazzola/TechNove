import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products as localProducts } from "../../data/products";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        // Simula la carga desde una API o Firestore
        setTimeout(() => {
            const filtered = categoryId
                ? localProducts.filter((p) => p.category === categoryId)
                : localProducts;
            setProducts(filtered);
            setLoading(false);
        }, 800); // efecto de carga
    }, [categoryId]);

    return (
        <main style={styles.main}>
            <h2 style={styles.greeting}>
                {greeting} {categoryId ? `(${categoryId.toUpperCase()})` : "Catálogo Completo"}
            </h2>

            {loading && <p style={styles.statusMessage}>Cargando productos... 🔄</p>}

            {!loading && products.length > 0 && <ItemList products={products} />}

            {!loading && products.length === 0 && (
                <p style={styles.statusMessage}>No hay productos disponibles.</p>
            )}
        </main>
    );
};

const styles = {
    main: {
        textAlign: "center",
        padding: "20px",
        minHeight: "calc(100vh - 80px)",
    },
    greeting: {
        fontSize: "2.5em",
        color: "#333",
        marginBottom: "30px",
        borderBottom: "2px solid #61dafb",
        display: "inline-block",
        paddingBottom: "5px",
    },
    statusMessage: {
        fontSize: "1.5em",
        color: "#555",
        marginTop: "50px",
    },
};

export default ItemListContainer;
