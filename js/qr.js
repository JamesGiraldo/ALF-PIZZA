new QRious({
    element: document.querySelector("#codigo"),
    value: "https://alf-pizza.vercel.app/", // La URL o el texto
    size: 200,
    backgroundAlpha: 0, // 0 para fondo transparente
    foreground: "#fff", // Color del QR
    level: "H", // Puede ser L,M,Q y H (L es el de menor nivel, H el mayor)
});