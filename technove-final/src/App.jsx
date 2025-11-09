import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import CartView from './containers/CartView/CartView';

/**
 * Componente principal que define la estructura y el enrutamiento de la aplicación.
 * Utiliza BrowserRouter para habilitar la navegación entre vistas.
 *
 * @returns {JSX.Element} El layout y las rutas de la aplicación.
 */
function App() {
    return (
        <BrowserRouter>
            {/* La barra de navegación se mantiene visible en todas las rutas */}
            <NavBar />
            
            {/* Contenedor principal del contenido */}
            <main className="container mx-auto p-4 md:p-8 min-h-screen bg-gray-50">
                <Routes>
                    {/* 1. Ruta de inicio: Muestra todos los productos */}
                    <Route path="/" element={<ItemListContainer greeting="Bienvenido a TechnoVe - Tu tienda de tecnología" />} />

                    {/* 2. Ruta de categoría: Muestra productos filtrados (Ej: /category/celulares) */}
                    <Route path="/category/:categoryId" element={<ItemListContainer greeting="Productos por Categoría" />} />

                    {/* 3. Ruta de detalle: Muestra un producto individual (Ej: /item/ax123) */}
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />

                    {/* 4. Ruta del carrito: Vista de checkout */}
                    <Route path="/cart" element={<CartView />} />

                    {/* Manejo de rutas no encontradas (404) */}
                    <Route path="*" element={
                        <div className="text-center p-10 bg-white shadow-lg rounded-lg mt-10">
                            <h1 className="text-4xl font-bold text-red-600">404 - Página no encontrada</h1>
                            <p className="mt-4 text-gray-700">Lo sentimos, la dirección a la que intentas acceder no existe.</p>
                            <a href="/" className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                                Ir a la página principal
                            </a>
                        </div>
                    } />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
