$(function() {

    $('#js-fullpage').fullpage({
        menu: '#js-menu',
        anchors:['firstPage', 'secondPage', 'thirdPage'],
        navigation: true,
        navigationPosition: 'right',
        css3: true,
        easing: 'easeInBounce',
        scrollingSpeed: 700,
        scrollBar: false,
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        sectionSelector: '.js-section',
        verticalCentered: true,
    });

});
