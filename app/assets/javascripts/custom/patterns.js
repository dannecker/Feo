function patternbig() {
    var $dna = $("<div class='dna'></div>");
    var boxHeight = $('.box').height() + 20;
    var topPos = 60;
    var bx = $('.boxWrap').height() / $('.box').height();
    var n = $('.box').length / 3;
    for (var i = 0; i < n; i++) {
        $dna.clone().css('top', topPos).appendTo('.entry');
        topPos += boxHeight;
    }
    $(".entry .dna").each(function (i) {
        $(this).addClass("pattern-" + (i + 1));
        if (i === Math.floor(n)) {
            if ($('.box').length % 3 === 1) {
                $(this).addClass('one');
            } else if ($('.box').length % 3 === 2) {
                $(this).addClass('two');
            }
        }
    });
    return false;
}
function patternsmall() {
    var $dna = $("<div class='dna'></div>");
    var boxHeight = $('.box').height() + 20;
    var topPos = 60;
    var bx = $('.boxWrap').height() / $('.box').height();
    var n = $('.box').length / 2;
    for (var i = 0; i < n; i++) {
        $dna.clone().css('top', topPos).appendTo('.entry');
        topPos += boxHeight;
    }
    $(".entry .dna").each(function (i) {
        $(this).addClass("pattern-" + (i + 1));
        if (i === Math.floor(n)) {
            $(this).addClass('one');
        }
    });
    return false;
}
debounce = function (func, wait, immediate) {
    var timeout, args, context, timestamp, result;
    return function () {
        context = this;
        args = arguments;
        timestamp = new Date();
        var later = function () {
            var last = (new Date()) - timestamp;
            if (last < wait) {
                timeout = setTimeout(later, wait - last);
            } else {
                timeout = null;
                if (!immediate) result = func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        if (!timeout) {
            timeout = setTimeout(later, wait);
        }
        if (callNow) result = func.apply(context, args);
        return result;
    };
};

//add dna pattern 
function clearPattern() {
    $(".entry .dna").each(function (i) {
        $(this).removeClass('dna');
    });
}
$(document).ready(function () {
    patternbig();
//	patternsmall();

    $(window).resize(debounce(function () {
        if ($(window).width() > 980) {
            clearPattern();
            patternbig();
            return false;
        }
        if ($(window).width() < 979) {
            clearPattern();
            patternsmall();
            return false;
        }
        ;
    }, 1));

});
