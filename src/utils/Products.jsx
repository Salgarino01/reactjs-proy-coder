const productos = [
    //combustible
    {
        id: 1,
        title: "Limpia inyectores de combustible concentrado",
        description: "Destapa los inyectores de combustible sucios y restablece el rendimiento, remuebe los depositos de carbon generados por la combustion.",
        stock: 24,
        type: "combustible",
        imageProduct: {
            firtsImage: "https://stpimagecdn.imgix.net/wp-content/uploads/sites/3/product-images/E302911200_01.png?auto=format%2Ccompress&fit=crop&w=600&max-h=600",
            secondImage: "https://stpimagecdn.imgix.net/wp-content/uploads/sites/3/product-images/E302911200_01.png?auto=format%2Ccompress&fit=crop&w=600&max-h=600"
        },
        price: 15000,
    },

    {
        id: 2,
        title: "Tratamiento para gasolina",
        description: "Mejora la calidad de la gasolina y ayuda a mantener limpios los inyectores, prolongando la vida util del inyector, y las valvulas mejorando asi el rendimiento del motor.",
        stock: 12,
        type: "combustible",
        imageProduct: {
            firtsImage: "https://stpimagecdn.imgix.net/wp-content/uploads/sites/3/product-images/E301995000_01.png?auto=format%2Ccompress&fit=crop&w=600&max-h=600",
            secondImage: "https://stpimagecdn.imgix.net/wp-content/uploads/sites/3/product-images/E301995000_01.png?auto=format%2Ccompress&fit=crop&w=600&max-h=600"
        },
        price: 22000,
    },

    {
        id: 3,
        title: "Limpiador de sistema de alimentación diesel",
        description: "Diseñado para limpiar y proteger todo el sistema de combustible y restablecer el rendimiento. Ayuda a eliminar los depósitos de los inyectores, las válvulas y la cámara de combustión.",
        stock: 24,
        type: "combustible",
        imageProduct: {
            firtsImage: "https://stpimagecdn.imgix.net/wp-content/uploads/sites/3/product-images/E302007300_01.png?auto=format%2Ccompress&fit=crop&w=600&max-h=600",
            secondImage: "https://stpimagecdn.imgix.net/wp-content/uploads/sites/3/product-images/E302007300_01.png?auto=format%2Ccompress&fit=crop&w=600&max-h=600"
        },
        price: 24000,
    },

    //motor 
    {
        id: 4,
        title: "Tratamiento para aceite",
        description: "Tratamiento de Aceite Gasolina STP® refuerza el aceite de motor con una medida extra de aditivos que incluye un mejorador de la viscosidad y agentes anti desgaste, antifricción y anti oxidación.",
        stock: 12,
        type: "motor",
        imageProduct: {
            firtsImage: "https://stpimagecdn.imgix.net/wp-content/uploads/sites/3/product-images/E302892600_01.png?auto=format%2Ccompress&fit=crop&w=600&max-h=600",
            secondImage: "https://stpimagecdn.imgix.net/wp-content/uploads/sites/3/product-images/E302892600_01.png?auto=format%2Ccompress&fit=crop&w=600&max-h=600"
        },
        price: 65000,      
    },

    {
        id: 5,
        title: "Tratamiento anti-humo",
        description: "El Tratamiento Anti-Humo STP® está diseñado específicamente para reducir esos problemas, reduce el humo del caño de escape y disminuye el contacto entre partes de metal con una capa gruesa de aceite.",
        stock: 6,
        type: "motor",
        imageProduct: {
            firtsImage: "https://stpimagecdn.imgix.net/wp-content/uploads/sites/3/product-images/17054_01.png?auto=format%2Ccompress&fit=crop&w=600&max-h=600",
            secondImage: "https://stpimagecdn.imgix.net/wp-content/uploads/sites/3/product-images/17054_01.png?auto=format%2Ccompress&fit=crop&w=600&max-h=600"
        },
        price: 32000,      
    },

    //otros
    {
        id: 6,
        title: "Líquido para dirección hidráulica anti fugas",
        description: "LDiseñado científicamente para reducir la pérdida de fluido causada por las juntas que gotean debido al desgaste o la contracción. Contiene un agente antidesgaste ZDDP.",
        stock: 12,
        type: "otros",
        imageProduct: {
            firtsImage: "https://stpimagecdn.imgix.net/wp-content/uploads/sites/3/product-images/E301988700_01.png?auto=format%2Ccompress&w=850",
            secondImage: "https://stpimagecdn.imgix.net/wp-content/uploads/sites/3/product-images/E301988700_01.png?auto=format%2Ccompress&w=850"
        },
        price: 13000,      
    },

    {
        id: 7,
        title: "Líquido de Frenos Sintético",
        description: "Diseñado científicamente para lograr un rendimiento óptimo de los sistemas de frenos ABS, de disco o de tambor de los coches y camiones actuales. Cumple las normas US FMVSS116 DOT 3, SAE J 1703 e ISO 4925 (clase 3).",
        stock: 6,
        type: "otros",
        imageProduct: {
            firtsImage: "https://stpimagecdn.imgix.net/wp-content/uploads/sites/3/product-images/E303208300_01.png?auto=format%2Ccompress&fit=crop&w=600&max-h=600",
            secondImage: "https://stpimagecdn.imgix.net/wp-content/uploads/sites/3/product-images/E303208300_01.png?auto=format%2Ccompress&fit=crop&w=600&max-h=600"
        },
        price: 22000,      
    },

    {
        id: 8,
        title: "Limpia radiadores",
        description: "Diseñado para limpiar el sistema de refrigeración de forma rápida y eficaz. Despeja los canales de agua obstruidos que pueden causar sobrecalentamiento, eliminando el óxido y los sedimentos. ",
        stock: 6,
        type: "otros",
        imageProduct: {
            firtsImage: "https://stpimagecdn.imgix.net/wp-content/uploads/sites/3/product-images/E303223200_01.png?auto=format%2Ccompress&fit=crop&w=600&max-h=600",
            secondImage: "https://stpimagecdn.imgix.net/wp-content/uploads/sites/3/product-images/E303223200_01.png?auto=format%2Ccompress&fit=crop&w=600&max-h=600"
        },
        price: 17000,      
    },

]

export default productos;