$(document).ready(function() {


//=============================Часть 1===================================


    //----------------выбрать все селекторы---------------
    var allSelector = $('*');
    // console.log(allSelector);

    //----------------выбрать по атрибуту--------------------
    // var atributsSelector = $('a[id]');
    // var atributsSelector = $('img[width]');
    var atributsSelector = $('div[class = "post-info"]');
    // console.log(atributsSelector);

    //-----------------выбрать элементы формы------------
    // var formSelector = $('input');
    var formSelector = $('button');
    // console.log(formSelector);

    //-----------------выборки по состоянию-----------------
    // var stateSelector = $( "input:checked" );
    // var stateSelector = $( "input:enabled" );
    // var stateSelector = $( "input:disabled" );
    var stateSelector = $( "input:hidden" );
    // console.log(stateSelector);

    //-----------------выбрать всех прямых потомков элемента-----------------
    // var childrenSelector = $('.footer-block > ul');
    var childrenSelector = $('.social').children();
    // console.log(childrenSelector);

    //-----------------выбрать по классу, id----------------------
    var classSelector = $('.plans__item');
    var idSelector = $('#button2');
    // console.log(idSelector);

    //-----------------селекторы с несколькими атрибутами-----------------
    // var atrSelector = $('img[width = "220"][height]');
    var atrSelector = $('input[type = "text"][name]');
    // console.log(atrSelector);

    //-----------------несколько селекторов сразу--------------------
    var severalSelecotr = $('.steps, .features');
    // console.log(severalSelecotr);

    $('#button7').on('click', function (e) {
        e.preventDefault();
        console.log("I've found!");
    });

    $('#button13').on('click', function (e) {
        e.preventDefault();
        console.log("You've been subscribed!");
    });

    $('#button1, #button2, #button3').on('click', function (e) {
        e.preventDefault();
        // alert('Хаюшки');
    });

    $('#button4, #button5, #button6').on('click', function (e) {
        e.preventDefault();
        prompt('Как ваши дела?');
    });

    $('#button8, #button9, #button10').on('click', function (e) {
        e.preventDefault();
        confirm('Соглашайтесь!');
    });

    $('#button12').on('click', function (e) {
        e.preventDefault();
        var headerOffset = $('#header').offset().top;

        $('html, body').animate({
            scrollTop: headerOffset
        }, 1000);
    });


    //=================================Часть 2==============================


    //--------------------Сформировать любую выборку из всех картинок на макете. --------------------
    // - первый элемент в выборке
    // - последний элемент в выборке

    var images = $('img.post-photo:first');
    var images = $('img.post-photo:last');
    // console.log(images);

    //---------------------Выбрать все элементы с классом .container. Исключить блоки, не имеющие поля ввода--------------------------------

    var container = $('.container:not(:has(input))');
    // console.log(container);

    //----------------------активный пункт меню---------------------

    $('.nav__item').on('click', function(e) {

        e.preventDefault();

        $('.nav__item').removeClass('nav__item--active');
        $(this).addClass('nav__item--active');

    });

    //----------------------скролл меню--------------------------

    $('.nav a').on("click", function (e) {

        e.preventDefault();

        var currentBlock = $(this).attr('href'); //путь до блока
        var currentBlockOffset = $(currentBlock).offset().top; //расстояние до нужного блока

        $('html, body').animate({
            scrollTop: currentBlockOffset - 20 //с небольшим отступом
        }, 1000);
    });

    //-------------------------фиксация меню------------------------

    $(document).on("scroll", function () {

        var documentScroll = $(this).scrollTop(), //сколько проскроллили в пикселях
               headerHeight = $('#header').height(), //высота хедера
               navHeight = $('.nav-container').innerHeight(); //высота блока меню с границей, паддингами и тд.

        if (documentScroll > headerHeight) {
            $('.nav-container').addClass('fixed');
            $('#header').css('paddingTop', navHeight); //добавляем паддинг у хедера, чтобы блок под меню не прыгал
        } else {
            $('.nav-container').removeClass('fixed');
            $('#header').removeAttr('style');
        }

    });
    // $(document).on("scroll", onScroll);

    //-------------------------------модальное окно Login--------------------------

    //рассчитываем центральное положение окна margin-left
    $(".js-modal").each(function () { //для всех можальных окон

        var modalWidth = $(this).innerWidth() / 2;

        $(this).css({
            "marginLeft": "-" + modalWidth + "px"
        });

    });

    //прописать айди модального окно в href кнопки
    $('.js-show-modal').on('click', function (e) {

        e.preventDefault();

        var currentModal = $(this).attr('href'); //именно нужное модальное окно через айди

        // $(currentModal + ', #js-overlay').fadeIn(700);//1 вариант
        $(currentModal).fadeIn(700);
        // $('body').addClass('open-modal'); //скрываем вертикaльный скролл/ 1 вариант
        if($('.overlay').length <= 0) {
            $('body').append("<div class='overlay' id='js-overlay'></div>").addClass('open-modal');//добавляем разметку подложки модального окна, скрываем вертикaльный скролл
        }

    });

    // $('.js-modal-close, #js-overlay').on('click', function (e) { //1 var
    $('.js-modal-close').on('click', function (e) {

        e.preventDefault();

        // $('.js-modal, #js-overlay').fadeOut(100); //1 вариант
        $('.js-modal').fadeOut(100);
        $('body').removeClass('open-modal');
        $("#js-overlay").remove(); //удаляем подложку во 2 варианте

    });

    //2 variant
    $("body").on("click", "#js-overlay", function() {

        $('.js-modal').fadeOut(100);
        $('body').removeClass('open-modal');
        $("#js-overlay").remove();

    });

    //----------------------валидация формы поиска search-form--------------------------

    $('.js-search-form').submit(function(e) {
        e.preventDefault();
        var email = $('.js-search-input').val();

        $(".error").remove();

         if (email.length< 1) {
            $('.js-search-form').after('<span class="error">This field is required</span>');
        } else {
            var regEx = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
                   validEmail = regEx.test(email);

            if (!validEmail) {
                $('.js-search-form').after('<span class="error">Enter a valid email</span>');
            } else {
                $('.js-search-form').after('<span class="valid">Email is OK</span>');
            }
        }
    });

    //убираем сообщение валидации
    $('.js-search-form').focusout( function () {
        if($(".error").length > 0 || $(".valid").length > 0) {
            $(".error").remove();
            $(".valid").remove();
        }
    });

    //-------------Изменить текст в заголовке сайта с помощью jQuery-------------------------

    // $('.main-title').text('New title on jQuery');

    //-----------------все четные и нечетные элементы главного меню-------------------------

    // console.log($('.nav__item:even')); //нечетные
    // console.log($('.nav__item:odd')); //четные

    //-----------------Выбрать в футере один из списков. Вернуть все родительские и дочерние элементы--------------------------

    // console.log($('.footer-nav:first'));
    var parent = $('.footer-nav:first').parent();
    var children = $('.footer-nav:first').children();
    // console.log(parent);
    // console.log(children);

    //--------------вырезать блок с картой, перетащить перед блоком testimonials----------------

    $(".map").insertBefore($("#testimonials"));

    //------------------Удалить в футере блок с телефоном и копирайтом------------------------------

    $(".footer-contacts-block").remove();


    //================================Часть 3======================================


    //--------------------------accordion------------------------

    $('.js-faq-title').on('click', function (e) {

        e.preventDefault();

        var $this = $(this);
        // var answerId = $this.attr("href"); //2 вариант

        if(!$this.hasClass("title--active")) { //есть ли у ссылки класс актив
            $(".faq-content").slideUp(); //скрывам у всех контент
            $(".js-faq-title").removeClass("title--active"); //у всех удалем класс актив
        }

        $this.toggleClass("title--active");
        $this.siblings().slideToggle();
        // answerId.siblings().slideToggle(); //2 вариант
        // $(this).next().slideDown(); //вариант вместо siblings

    });

    //-------------------------слайдер slick.js https://github.com/kenwheeler/slick--------------------------

    $('#js-testimonials-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true
    });

    //-------------------------слайдер owl carousel https://github.com/OwlCarousel2/OwlCarousel2--------------------------

    // if($('.owl-carousel').length > 0) {
    //     $('.owl-carousel').owlCarousel({
    //         items: 1,
    //         nav: true,
    //         loop: true,
    //         navText: [
    //             '<span class="owl-nav-prev"></span>',
    //             '<span class="owl-nav-next"></span>'
    //         ]
    //     });
    // }

    //-------------------------слайдер bxslider4 https://github.com/stevenwanderski/bxslider-4--------------------------

    // $('.bx-slider').bxSlider({
    //     controls: true
    // });

    //-------------------------яндекс карта--------------------------

    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [52.27397178, 104.31959694],
            zoom: 17
        }),
            myPlacemark = new ymaps.Placemark([52.27397178, 104.31959694],
                {
                    hintContent: 'Это мой дом',
                    balloonContent: 'Балунчик'
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'i/map-pin.png',
                    iconImageSize: [40, 51],
                    iconImageOffset: [-20, -47],
                },
            );

        myMap.behaviors.disable('scrollZoom'); //убрать скролл на карте
        myMap.geoObjects.add(myPlacemark);
    }

    //----------------------------счетчик цифр Counter up https://github.com/bfintal/Counter-Up----------------------------

    $('.js-counter').counterUp({
        delay: 10, //задержка между переключением цифры
        time: 2000
    });


    //----------------------------всплывающая подсказка-------------------------

    //отчего-то при повторном наведении подсказка улетает куда-то влево!!!!!
    $(".js-popup-hover").hover(function(){

        var $this = $(this),
            titleId = $this.attr("href");

        $(titleId).fadeIn();

    }, function () { //функция после запятой выполняется после основной функции

        $(".js-popup").fadeOut();

    }, 200); //hover delay

    //-------------------------------Заглушки к формам 3 штуки--------------------------

    $(".js-modal").each(function () { //для всех модальных окон

        var modalWidth = $(this).innerWidth() / 2;

        $(this).css({
            "marginLeft": "-" + modalWidth + "px"
        });

    });

    $('.js-show-popup').on('click', function (e) {//для подписки и поиска домена

        e.preventDefault();

        var currentModal = $(this).attr('href');

        $(currentModal).fadeIn(700);

        if($('.overlay').length <= 0) {
            $('body').append("<div class='overlay' id='js-overlay'></div>").addClass('open-modal');
        }

    });

    $('.js-button').on('click', function (e) {//для кнопки в форме регистрации

        e.preventDefault();

        $("#js-login-modal4").fadeIn(700);

        if($('.overlay2').length <= 0) {
            $('body').append("<div class='overlay2' id='js-overlay2' style='z-index: 102'></div>").addClass('open-modal');
        }

    });

    $('.js-modal-close').on('click', function (e) {//для подписки и поиска домена

        e.preventDefault();

        $('#js-login-modal3').fadeOut(100);
        $('body').removeClass('open-modal');
        $("#js-overlay").remove();

    });

    $('.js-modal-close2').on('click', function (e) {//для кнопки в форме регистрации

        e.preventDefault();

        $('#js-login-modal4').fadeOut(100);
        $('body').removeClass('open-modal');
        $("#js-overlay2").remove();

    });

    $("body").on("click", "#js-overlay", function() {//для подписки и поиска домена

        $('#js-login-modal3').fadeOut(100);
        $('body').removeClass('open-modal');
        $("#js-overlay").remove();

    });

    $("body").on("click", "#js-overlay2", function() {//для кнопки в форме регистрации

        $('#js-login-modal4').fadeOut(100);
        $('body').removeClass('open-modal');
        $("#js-overlay2").remove();

    });

    //------------------------------wow.js https://github.com/matthieua/WOW------------------------------

    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       150,          // distance to the element when triggering the animation (default is 0)
            mobile:       false,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();

    //--------------------------------автонабор текста typed js https://github.com/mattboldt/typed.js------------------------------

    var typed = new Typed("#typed", {
        strings: ["<i>First</i> sentence.", "Strength in equality.The power of dreams"]
    });

    //------------------------------Стилизовать чекбоксы iCheck https://github.com/fronteed/icheck-----------------------------

    $('input').iCheck({
        checkboxClass: 'icheckbox_flat-red',
        radioClass: 'iradio_flat-red'
    });

    $('.js-rules').on('ifChecked', function(event){
        $('.js-rules-btn').removeAttr('disabled');
    });

    $('.js-rules').on('ifUnchecked', function(event){
        $('.js-rules-btn').attr('disabled', 'disabled');
    });

    //check all
    // $('.js-check-all').on('ifClicked', function(event){
    //
    //     if($(this).is(':checked')) {
    //         $('.js-filter-group input').iCheck('uncheck'); //логика проверки наоборот из-за плагина
    //     } else {
    //         $('.js-filter-group input').iCheck('check');
    //     }
    //
    // });
    //
    // $('.js-filter-group input').on('ifUnchecked', function(event){
    //     $('.js-check-all').iCheck('uncheck');
    // });
    //check all конец

    //--------------------------------input range https://github.com/andreruffert/rangeslider.js-------------------------------

    var rangeS = $("#js-range"),
        rangeV = $(".js-range-value"),
        step = parseInt(rangeS.attr("step")), //обязательно число
        min = rangeS.attr("min"),
        max = rangeS.attr("max");

    rangeS.rangeslider({
        polyfill: false, //включение стилизованного ползунка
        onInit: function() {
            rangeV.text(rangeS.val()); //атрибут value вставляем как текст в спан, изначальная позиция
        },
        onSlide: function(position, value) {
            rangeV.text(value); //вставляем текущее значение value при слайде
        }
    });

    $(".js-btn").on("click", function() {

        var currentVal = parseInt(rangeS.val()); //обязательно число

        if($(this).hasClass("minus")) {
            if(currentVal > min) {
                rangeS.val(currentVal - step).rangeslider('update', true); //уменьшаем на шаг
            }
        } else {
            if(currentVal < max) {
                rangeS.val(currentVal + step).rangeslider('update', true); //увеличиваем на шаг
            }
        }

    });

    //-------------------------------скроллбар  https://github.com/inuyaksa/jquery.nicescroll----------------------------

    if($(".js-nicescroll").length) { //проверка на существование на странице nicescroll

        $(".js-nicescroll").niceScroll({
            cursorcolor: "#424242",
            cursorwidth: "5px",
            cursorborder: "0",
            cursorborderradius: "5px",
            autohidemode: false,
            cursorminheight: 50,
            horizrailenabled: false,
            railpadding: { top: 5, right: 2, left: 0, bottom: 5 },
        });
    }

    $(".js-cat a").on("click", function(e) { //показ подменю

        var $this = $(this),
            subcat = $this.next(".js-cat-subcat");

        if(subcat.length) {
            e.preventDefault();
            subcat.slideToggle(function() { //выезжает подменю после отработки открытия подменю
                $(".js-nicescroll").getNiceScroll().resize(); //обновить скролл чтобы изменялся размер курсора
            });
        }

    });

    //------------------------------masonry grid  https://github.com/desandro/masonry.js-------------------------

    //смотреть masonry.html!!!!!!!
    // $('.news').masonry({
    //     itemSelector: '.news__item',
    //     columnWidth: 200,
    //     gutter: 20 //горизонтальный отступ между элементами
    // });

    //----------------------------Валидация формы https://github.com/jquery-validation/jquery-validation----------------------

    $("#js-register-form").validate({

        rules: {
            form_name: {
                required: true
            },
            form_email: {
                required: true,
                email: true
            },
            form_tel: {
                required: true,
                digits: true
            },
            form_pswd1: {
                required: true,
                minlength: 6
            },
            form_pswd2: {
                required: true,
                minlength: 6,
                equalTo: "#form_pswd1"
            }
        },
        messages: {
            form_name: {
                required: "Поле Имя обязательное для заполнения"
            },
            form_email: {
                required: "Поле E-mail обязательное для заполнения",
                email: "Введите пожалуйста корректный e-mail"
            }
        },
        focusCleanup: true,
        focusInvalid: false,
        invalidHandler: function(event, validator) { //добавить сообщение в блок
            $(".js-form-message").text("Исправьте, пожалуйста, все ошибки.");
        },
        onkeyup: function(element) { //убрать верзнее сообщение при фокусе
            $(".js-form-message").text("");
        },
        errorPlacement: function(error, element) { //убрать сообщения об ошибке
            return true;
        },
        errorClass: "form-input_error",
        validClass: "form-input_success"
    });

    //-----------------------------Липкий сайдбар https://github.com/garand/sticky---------------------------
    var bottomOffset = $(".footer").innerHeight();

    $("#js-sticky").sticky({
        topSpacing: 50,
        bottomSpacing: bottomOffset
    });

    //------------------------------послайдовый скролл  https://github.com/alvarotrigo/fullPage.js еще - onepage scroll--------------------------

    //смотреть fullpage_scroll.html!!!!!!!!!!!
    // $('#js-fullpage').fullpage({
    //     menu: '#js-menu',
    //     anchors:['firstPage', 'secondPage', 'thirdPage'],
    //     navigation: true,
    //     navigationPosition: 'right',
    //     css3: true,
    //     scrollingSpeed: 2000,
    //     easing: 'easeInBounce', // plugin jquery.easing
    //     scrollBar: false,
    //     easingcss3: 'ease',
    //     loopBottom: false,
    //     loopTop: false,
    //     sectionSelector: '.js-section',
    //     normalScrollElements: '.subscribe-social, .footer, #testimonials, #features',
    //     verticalCentered: true
    // });
});



//активный пункт при скролле
// function onScroll(){
//
//     var scrollPos = $(document).scrollTop();
//
//     $('.nav a').each(function () {
//
//         var hash = $(this).attr("href");
//         var target = $(hash);
//
//         if (target.position().top <= scrollPos && target.position().top + target.outerHeight() > scrollPos) {
//             $('.nav__item').removeClass('nav__item--active');
//             $(this).addClass('nav__item--active');
//         }
//         else{
//             $(this).removeClass("nav__item--active");
//         }
//
//     });
// }