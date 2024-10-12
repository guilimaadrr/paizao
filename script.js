document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript carregado e funcionando!");

  // Exemplo de script: animação no hover dos botões do swiper
  const swiperButtons = document.querySelectorAll(
    ".swiper-button-next, .swiper-button-prev"
  );

  swiperButtons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      button.style.transform = "scale(1.1)";
    });

    button.addEventListener("mouseleave", function () {
      button.style.transform = "scale(1)";
    });
  });

  // Exemplo de interação com o botão de WhatsApp
  const whatsappButton = document.querySelector(".whatsapp-button");
  whatsappButton.addEventListener("click", function () {
    console.log("Botão do WhatsApp clicado");
  });
});
