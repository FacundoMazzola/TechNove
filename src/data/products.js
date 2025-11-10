// src/data/products.js
import mouseG305 from '../assets/image/mouse-logitech-g305.webp';
import tecladoKumara from '../assets/image/teclado-kumara-redragon.webp';
import auricularesRazer from '../assets/image/auriculares-razer.webp';
import monitorSamsung from '../assets/image/monitor-samsung-odisea.webp';
import modpadHyperex from '../assets/image/modpad-hyperex.webp';

export const products = [
    {
        id: 1,
        title: "Mouse Logitech G305",
        price: 29999,
        category: "perifericos",
        image: mouseG305,
        description: "Mouse gamer inalámbrico con sensor HERO y diseño ergonómico.",
        stock: 10
    },
    {
        id: 2,
        title: "Teclado Redragon Kumara",
        price: 25999,
        category: "perifericos",
        image: tecladoKumara,
        description: "Teclado mecánico compacto con switches Redragon Blue.",
        stock: 8
    },
    {
        id: 3,
        title: "Auriculares Razer Kraken",
        price: 39999,
        category: "audio",
        image: auricularesRazer,
        description: "Auriculares gaming con sonido envolvente y micrófono retráctil.",
        stock: 6
    },
    {
        id: 4,
        title: "Monitor Samsung Odyssey",
        price: 199999,
        category: "monitores",
        image: monitorSamsung,
        description: "Monitor curvo QHD de 27 pulgadas con 144 Hz.",
        stock: 4
    },
    {
        id: 5,
        title: "Joystick HyperEX Modpad",
        price: 17999,
        category: "perifericos",
        image: modpadHyperex,
        description: "Joystick ergonómico compatible con PC y consolas.",
        stock: 7
    }
];
