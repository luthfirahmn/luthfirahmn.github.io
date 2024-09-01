window.addEventListener('scroll', function () {
    var navbar = document.querySelector('nav.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white-nav');
    } else {
        navbar.classList.remove('bg-white-nav');
    }
});



jQuery(function ($) {

    var doAnimations = function () {
        var windowHeight = $(window).height(),
            scrollTop = $(window).scrollTop(),
            offset = scrollTop + windowHeight,
            $animatables = $('.animatable');

        if ($animatables.length == 0) {
            $(window).off('scroll', doAnimations);
        }

        $animatables.each(function (i) {
            var $animatable = $(this),
                elementTop = $animatable.offset().top,
                elementHeight = $animatable.height(),
                triggerPoint = (window.innerWidth <= 768) ? 700 : 300;

            if ((elementTop + elementHeight - triggerPoint) < offset) {
                $animatable.removeClass('animatable').addClass('animated');
            }
        });
    };

    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');

});


function toggleSearch() {
    var searchBox = document.getElementById('searchBox');
    if (searchBox.classList.contains('active')) {
        searchBox.classList.remove('active');
        $('#main-section').css('display', 'block');
        $('#search-result').html('');
    } else {
        searchBox.classList.add('active');
    }
}


$(document).ready(function () {
    function updateButton(language) {
        var selectedItem = $('.lang-item[data-lang="' + language + '"]');
        if (selectedItem.length) {
            var newImageSrc = selectedItem.find('img').attr('src');
            var newAltText = selectedItem.find('img').attr('alt');

            $('#languageDropdown')
                .find('img')
                .attr('src', newImageSrc)
                .attr('alt', newAltText);
        }
    }

    var activeLanguage = localStorage.getItem('activeLanguage');
    if (activeLanguage) {
        $('.lang-item').removeClass('active');
        $('.lang-item[data-lang="' + activeLanguage + '"]').addClass('active');
        updateButton(activeLanguage);
    }

    $('.lang-item').on('click', function (event) {
        event.preventDefault();

        var selectedLanguage = $(this).data('lang');

        $('.lang-item').removeClass('active');

        $(this).addClass('active');

        localStorage.setItem('activeLanguage', selectedLanguage);

        updateButton(selectedLanguage);
    });
});


$(document).ready(function () {
    $('.carousel').each(function () {
        var minPerSlide = $(this).data('min-per-slide') || 3;

        $(this).find('.carousel-item').each(function () {
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));

            for (var i = 0; i < minPerSlide; i++) { // Start from 1 because the first clone is already appended
                next = next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
                next.children(':first-child').clone().appendTo($(this));
            }
        });
    });
});