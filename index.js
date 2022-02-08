let card = document.querySelectorAll('.card');
for (cards of card) {
    cards.addEventListener('mouseover', function (event) {
        if (event.target.id === "Kopi Aceh Gayo Arabica, Sumatera") {
            event.target.setAttribute("src", "assets/image/kopiacehgayoarabica.jpg");
            return;
        } else if (event.target.id === "Kopi Arabika Kintamani, Bali") {
            event.target.setAttribute("src", "assets/image/kopiarabicakintamanibali.jpg");
            return;
        }
    });

    cards.addEventListener('mouseout', function (event) {
        if (event.target.id === "Kopi Aceh Gayo Arabica, Sumatera") {
            event.target.setAttribute("src", "assets/image/kopiacehgayoarabica.jpg");
            return;
        }
        if (event.target.id === "ragam") {
            event.target.setAttribute("src", "assets/image/kopiarabicakintamanibali.jpg");
            return;
        }
    });
}
