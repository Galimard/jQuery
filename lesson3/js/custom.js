$(document).ready(function() {

//---------------------------------------------------Часть 1---------------------------------------------------

    //выбрать все селекторы
    var allSelector = $('*');
    // console.log(allSelector);

    //выбрать по атрибуту
    // var atributsSelector = $('a[id]');
    // var atributsSelector = $('img[width]');
    var atributsSelector = $('div[class = "post-info"]');
    // console.log(atributsSelector);

    //выбрать элементы формы
    // var formSelector = $('input');
    var formSelector = $('button');
    // console.log(formSelector);

    //выборки по состоянию
    // var stateSelector = $( "input:checked" );
    // var stateSelector = $( "input:enabled" );
    // var stateSelector = $( "input:disabled" );
    var stateSelector = $( "input:hidden" );
    // console.log(stateSelector);

    //выбрать всех прямых потомков элемента
    // var childrenSelector = $('.footer-block > ul');
    var childrenSelector = $('.social').children();
    // console.log(childrenSelector);

    //выбрать по классу, id
    var classSelector = $('.plans__item');
    var idSelector = $('#button2');
    // console.log(idSelector);

    //селекторы с несколькими атрибутами
    // var atrSelector = $('img[width = "220"][height]');
    var atrSelector = $('input[type = "text"][name]');
    // console.log(atrSelector);

    //несколько селекторов сразу
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

    //-------------------------------------------Часть 2-----------------------------------------------

    //-----------------------------------------Сформировать любую выборку из всех картинок на макете. Выбрать:---------------------------------------------------
    // - первый элемент в выборке
    // - последний элемент в выборке
    var images = $('img.post-photo:first');
    var images = $('img.post-photo:last');
    // console.log(images);

    //---------------------------Выбрать все элементы с классом .container. Исключить блоки, не имеющие поля ввода--------------------------------
    var container = $('.container:not(:has(input))');
    console.log(container);

    //----------------------------------------------активный пункт меню-----------------------------------------
    $('.nav__item').on('click', function(e) {

        e.preventDefault();

        $('.nav__item').removeClass('nav__item--active');
        $(this).addClass('nav__item--active');

    });


    //-------------------------------------------------------скролл меню------------------------------------------------
    $('.nav a').on("click", function (e) {

        e.preventDefault();

        var currentBlock = $(this).attr('href'); //путь до блока
        var currentBlockOffset = $(currentBlock).offset().top; //расстояние до нужного блока

        $('html, body').animate({
            scrollTop: currentBlockOffset - 20 //с небольшим отступом
        }, 1000);
    });

    //-----------------------------------фиксация меню-------------------------------------- плавность!!!!!!!!!!!!!!!!!!!!!!!
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

    //-------------------------------------модальное окно Login------------------------------------
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
        $('body').append("<div class='overlay' id='js-overlay'></div>").addClass('open-modal'); //добавляем разметку подложки модального окна, скрываем вертикaльный скролл

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

    //-------------Изменить текст в заголовке сайта с помощью jQuery-------------------------
    $('.main-title').text('New title');

    //-----------------все четные и нечетные элементы главного меню------------------------------
    // console.log($('.nav__item:even')); //нечетные
    // console.log($('.nav__item:odd')); //четные

    //-----------------Выбрать в футере один из списков. Вернуть все родительские и дочерние элементы--------------------------
    // console.log($('.footer-nav:first'));
    var parent = $('.footer-nav:first').parent();
    var children = $('.footer-nav:first').children();
    // console.log(parent);
    // console.log(children);

    //------------------------------------------------accordion----------------------------------------------------
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

    //-----------------------------------всплывающая подсказка------------------------------------------
    $(".js-popup-hover").hover(function(){

        var $this = $(this),
               titleId = $this.attr("href");

        $(titleId).fadeIn();

    }, function () { //функция после запятой выполняется после основной функции

        $(".js-popup").fadeOut();

    });

    //--------------вырезать блок с картой, перетащить перед блоком testimonials----------------
    $(".map").insertBefore($("#testimonials"));

    //------------------Удалить в футере блок с телефоном и копирайтом------------------------------
    $(".footer-contacts-block").remove();


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