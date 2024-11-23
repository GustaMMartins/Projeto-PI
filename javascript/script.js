$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav_item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        console.log(scrollPosition);

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });
});

var prevScrollpos = window.pageYOffset;

/* Get the header element and it's position */
var headerDiv = document.querySelector("header");
var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  /* if scrolling down, let it scroll out of view as normal */
  if (prevScrollpos <= currentScrollPos ){
      headerDiv.classList.remove("fixedToTop");
      headerDiv.style.top ="-7.2rem";
  }
  /* otherwise if we're scrolling up, fix the nav to the top */
  else{  
      headerDiv.classList.add("fixedToTop");
      headerDiv.style.top = "0";
  }

  prevScrollpos = currentScrollPos;
}

  const commentButton = document.getElementById('commentButton');
  const confirmationMessage = document.getElementById('confirmationMessage');

  commentButton.addEventListener('click', () => {
    const commentInput = document.getElementById('commentInput').value.trim();
    if (commentInput) {
      confirmationMessage.style.display = 'block';
      confirmationMessage.textContent = 'Comentário enviado com sucesso!';
    } else {
      confirmationMessage.style.display = 'block';
      confirmationMessage.textContent = 'Por favor, escreva algo antes de enviar!';
    }

    // Limpa o campo de comentário
    setTimeout(() => {
      confirmationMessage.style.display = 'none';
    }, 3000); // Oculta a mensagem após 3 segundos
  });

