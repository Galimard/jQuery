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
        alert('Хаюшки');
    });

    $('#button4, #button5, #button6').on('click', function (e) {
        e.preventDefault();
        prompt('Как ваши дела?');
    });

    $('#button8, #button9, #button10, #button11').on('click', function (e) {
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

    //Сформировать любую выборку из всех картинок на макете. Выбрать:
    // - первый элемент в выборке
    // - последний элемент в выборке
    var images = $('img.post-photo:first-child');
    // console.log(images);

    //Выбрать все элементы с классом .container. Исключить блоки, не имеющие поля ввода
    var container = $('.container:has(input)');
    // console.log(container);

    //фиксация меню плавность!!!!!!!!!!!!!!!!!!!!!!!
    var headerHeight = $('#header').height(); //высота хедера
    var navHeight = $('.nav-container').innerHeight(); //высота блока меню с границей, паддингами и тд.

    $(document).on("scroll", function () {

        var documentScroll = $(this).scrollTop(); //сколько проскроллили

        if (documentScroll > headerHeight) {
            $('.nav-container').addClass('fixed');
            $('#header').css('paddingTop', navHeight); //добавляем паддинг у хедера, чтобы блок под меню не прыгал
        } else {
            $('.nav-container').removeClass('fixed');
            $('#header').removeAttr('style');
        }

    });

    //скролл меню
    $('.nav a').on("click", function (e) {

        e.preventDefault();

        var currentBlock = $(this).attr('href'); //путь до блока
        var currentBlockOffset = $(currentBlock).offset().top; //расстояние до нужного блока

        $('html, body').animate({
            scrollTop: currentBlockOffset - 20 //с небольшим отступом
        }, 1000);
    });

});

