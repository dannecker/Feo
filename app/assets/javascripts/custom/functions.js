(function ($) {
    $.fn.tipr = function (options) {

        var set = $.extend({

            'speed': 200,
            'mode': 'bottom'

        }, options);

        return this.each(function () {

            var tipr_cont = '.tipr_container_' + set.mode;

            $(this).hover(
                function () {
                    var out = '<div class="tipr_container_' + set.mode + '"><div class="tipr_point_' + set.mode + '"><div class="tipr_content">' + $(this).attr('data-tip') + '</div></div></div>';

                    $(this).append(out);

                    var w_t = $(tipr_cont).outerWidth();
                    var w_e = $(this).width();
                    var m_l = (w_e / 2) - (w_t / 2);

                    $(tipr_cont).css('margin-left', m_l + 'px');
                    $(this).removeAttr('title');
                    $(tipr_cont).fadeIn(set.speed);
                },
                function () {
                    $(tipr_cont).remove();
                }
            );

        });
    };

})(jQuery);

(function ($) {
    $.fn.stickynav = function () {
        if ($(window).width() > 1024) {
            $(window).on('scroll', function () {
                var scrolltop = $(this).scrollTop();

                if (scrolltop >= 132) {
                    $('.top-navigation-wrapper').fadeIn(250).css({position: 'fixed'}).addClass('fly');
                }

                else if (scrolltop <= 210) {
                    $('.top-navigation-wrapper').css({position: 'relative'}).removeClass('fly');
                }
            });
        }
    }
})(jQuery);


$(document).ready(function () {
//Hero slider
    $captions = $('.hero-caption');
    $('#hero').flexslider({
        animation: "fade",
        selector: ".slide",
        manualControls: ".banner_nav a",
        start: function () {
            $activecaption = $('.flex-active-slide h2');
            $captions.html($activecaption.text());
            $('#hero .loading').fadeOut();
        },
        after: function () {
            $activecaption = $('.flex-active-slide h2');
            $captions.html($activecaption.text());
        }
        //directionNav: true
    });

});

$(document).ready(function () {
    $('input, textarea').placeholder();
//scrolling navigation on mobile
    $('.scroll-contact a').click(function () {
        $('html, body').animate({scrollTop: $('#contact-bottom').offset().top}, 2000);
        return false;
    });

//top navigation 
    $('.top-navigation').find("li").each(function () {
        if ($(this).find(".submenu").length > 0) {
            $("<span class=icon>").text("").appendTo($(this).children(":first"));
            $(this).addClass("drop");
        }
    });
    var topNav = $('.top-navigation'),
        drop = topNav.find('.drop'),
        myTimer;
    drop.hover(function () {
        var obj = $(this);
        var subMenu = obj.find('.submenu');
        clearTimeout(myTimer);

        var wid = $(".submenu").width();

        if (subMenu.hasClass('hover')) {
            //do nothing
        } else {
            drop.find('.submenu').removeClass('hover');
            subMenu.addClass('hover');
            //subMenu.addClass('hover').css({'width':wid});
        }
    }, function () {
        myTimer = setTimeout(function () {
            drop.find('.submenu').removeClass('hover');
        }, 600);
    });


//content slider	   
    $('#content-slider').flexslider({
        animation: "fade",
        directionNav: true,
        controlsContainer: ".flex-viewport",
        start: function (slider) {
            $('.total-slides').text(slider.count);
        },
        after: function (slider) {
            $('.current-slide').text(slider.currentSlide + 1);
        }
    });


// checkbox and radio button style	
    $('input[type="checkbox"], input[type="radio"]').ezMark({
        checkboxCls: 'ez-checkbox',
        checkedCls: 'ez-checkbox-checked'
    });


// Mobile slide menu
    var menuStatus;
    $("#showmenu").click(function () {
        if (menuStatus != true) {
            $("main").animate({
                marginLeft: "-260px"
            }, 300, function () {
                menuStatus = true
            });
            return false;
        } else {
            $("main").animate({
                marginLeft: "0px"
            }, 300, function () {
                menuStatus = false
            });
            return false;
        }
    });

    $('.sidebar-mobile nav ul > li:has(ul)').addClass("has-sub");
    $('.sidebar-mobile nav ul > li > a').click(function () {
        var checkElement = $(this).next();

        $('.sidebar-mobile nav li').removeClass('active');
        $(this).closest('li').addClass('active');

        if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            $(this).closest('li').removeClass('active');
            checkElement.slideUp('normal');
        }

        if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('.sidebar-mobile nav ul ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
        }

        if (checkElement.is('ul')) {
            return false;
        } else {
            return true;
        }
    });


//archive accordion
    if ($(".archive-list").length) {
        $('.archive-list > ul').hide();
        $('.archive-list > h4').click(function () {
            $(this).next('ul').slideToggle('fast').siblings('ul:visible').slideUp('fast');
            $(this).toggleClass("active").siblings().removeClass("active");
            return false;
        });
    }

//show hide intro	
    if ($(".show-more").length) {
        $('.intro-content .more-intro').hide();
        $(".btn-more").click(function () {
            $(this).toggleClass("less");
            $('.intro-content .more-intro').slideToggle();
            if ($(this).hasClass("less")) {
                $(this).text("Згорнути");
            } else {
                $(this).text("Детальніше");
            }
        });
    }

//sidebar menu accordion
    if ($(".sidenav").length) {
        $('.sidenav li:has(ul)').addClass("has-sub").prepend("<a></a>");
        $('.sidenav').find('.has-sub').find('a:first').addClass("sub");
        $('.sidenav ul ul').addClass("sub-menu");
        $('.sidenav li a.sub').next().addClass('sub-parent');
        $(".sub-menu").hide();

        $('.sidenav li a.sub').click(function (ev) {
            var checkElement = $(this).next().next();

            $('.sidenav ul').removeClass('active');
            $(this).parentsUntil(".sidenav").addClass('active');

            if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
                $(this).closest('li').removeClass('active');
                checkElement.slideUp('normal');
                return false;
            }

            if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
                $('.sidenav ul:visible').not(checkElement.parentsUntil('.sidenav')).slideUp('normal');
                checkElement.slideDown('normal');
                return false;
            }

        });

        $('.sidenav').find('li.active').parents('.sub-menu').css('display', 'block');
    }

    if ($(".slide-why").length) {
        $(".slide-why h2").click(function () {
            $(this).toggleClass("less");
            $('.slide-why .donate-content').slideToggle();
        });
    }
    if ($(".slide-ways").length) {
        $(".slide-ways h2").click(function () {
            $(this).toggleClass("less");
            $('.slide-ways .donate-content').slideToggle();
        });
    }

//more article
    if ($(".article-listing").length) {
        $('.article-listing').jscroll({
            loadingHtml: '<span class="contentloading"><img src="/assets/bx_loader.gif" alt="Loading" /></span>',
            autoTrigger: false,
            nextSelector: '.loadmore'
        });
    }
//tooltips
// Removed by Oleg: replaced with expand collapse sections
    if ($(".infobtn").length) {
        $('.infobtn').tipr();
    }

    if ($(window).width() < 980) {
        $("#timeline").find('div').removeAttr('style');
    }


    $('.ez-radio').click(function () {
        $('.ez-radio').removeAttr('style')
    });
    $('.ez-checkbox').click(function () {
        $('.ez-checkbox').removeAttr('style')
    })

    if ($(window).width() > 980) {
        var $sidescroll = (function () {

            // the row elements
            var $rows = $('#timeline > div.tmrow'),
            // we will cache the inviewport rows and the outside viewport rows
                $rowsViewport, $rowsOutViewport,
            // navigation menu links
                $links = $('#ss-links > a'),
            // the window element
                $win = $(window),
            // we will store the window sizes here
                winSize = {},
            // used in the scroll setTimeout function
                anim = false,
            // page scroll speed
                scollPageSpeed = 2000,
            // page scroll easing
                scollPageEasing = 'easeInOutExpo',
            // perspective?
                hasPerspective = false,

                perspective = hasPerspective && Modernizr.csstransforms3d,
            // initialize function
                init = function () {

                    // get window sizes
                    getWinSize();
                    // initialize events
                    initEvents();
                    // define the inviewport selector
                    defineViewport();
                    // gets the elements that match the previous selector
                    setViewportRows();
                    // if perspective add css
                    if (perspective) {
                        $rows.css({
                            '-webkit-perspective': 600,
                            '-webkit-perspective-origin': '50% 0%'
                        });
                    }
                    // show the pointers for the inviewport rows
                    $rowsViewport.find('.thumb').addClass('ss-circle-deco');
                    // set positions for each row
                    placeRows();

                },
            // defines a selector that gathers the row elems that are initially visible.
            // the element is visible if its top is less than the window's height.
            // these elements will not be affected when scrolling the page.
                defineViewport = function () {

                    $.extend($.expr[':'], {

                        inviewport: function (el) {
                            if ($(el).offset().top < winSize.height) {
                                return true;
                            }
                            return false;
                        }

                    });

                },
            // checks which rows are initially visible
                setViewportRows = function () {

                    $rowsViewport = $rows.filter(':inviewport');
                    $rowsOutViewport = $rows.not($rowsViewport);

                },
            // get window sizes
                getWinSize = function () {

                    winSize.width = $win.width();
                    winSize.height = $win.height();

                },
            // initialize some events
                initEvents = function () {

                    // navigation menu links.
                    // scroll to the respective section.
                    $links.on('click.Scrolling', function (event) {

                        // scroll to the element that has id = menu's href
                        $('html, body').stop().animate({
                            scrollTop: $($(this).attr('href')).offset().top
                        }, scollPageSpeed, scollPageEasing);

                        return false;

                    });

                    $(window).on({
                        // on window resize we need to redefine which rows are initially visible (this ones we will not animate).
                        'resize.Scrolling': function (event) {

                            // get the window sizes again
                            getWinSize();
                            // redefine which rows are initially visible (:inviewport)
                            setViewportRows();
                            // remove pointers for every row
                            $rows.find('.thumb').removeClass('ss-circle-deco');
                            // show inviewport rows and respective pointers
                            $rowsViewport.each(function () {

                                $(this).find('div.tmleft')
                                    .css({left: '0%'})
                                    .end()
                                    .find('div.tmright')
                                    .css({right: '0%'})
                                    .end()
                                    .find('.thumb')
                                    .addClass('ss-circle-deco');

                            });

                        },
                        // when scrolling the page change the position of each row
                        'scroll.Scrolling': function (event) {

                            // set a timeout to avoid that the
                            // placeRows function gets called on every scroll trigger
                            if (anim) return false;
                            anim = true;
                            setTimeout(function () {

                                placeRows();
                                anim = false;

                            }, 10);

                        }
                    });

                },
            // sets the position of the rows (left and right row elements).
            // Both of these elements will start with -50% for the left/right (not visible)
            // and this value should be 0% (final position) when the element is on the
            // center of the window.
                placeRows = function () {

                    // how much we scrolled so far
                    var winscroll = $win.scrollTop(),
                    // the y value for the center of the screen
                        winCenter = winSize.height / 2 + winscroll;

                    // for every row that is not inviewport
                    $rowsOutViewport.each(function (i) {

                        var $row = $(this),
                        // the left side element
                            $rowL = $row.find('div.tmleft'),
                        // the right side element
                            $rowR = $row.find('div.tmright'),
                        // top value
                            rowT = $row.offset().top;

                        // hide the row if it is under the viewport
                        if (rowT > winSize.height + winscroll) {

                            if (perspective) {

                                $rowL.css({
                                    '-webkit-transform': 'translate3d(-75%, 0, 0) rotateY(-90deg) translate3d(-75%, 0, 0)',
                                    'opacity': 0
                                });
                                $rowR.css({
                                    '-webkit-transform': 'translate3d(75%, 0, 0) rotateY(90deg) translate3d(75%, 0, 0)',
                                    'opacity': 0
                                });

                            }
                            else {

                                $rowL.css({left: '-50%'});
                                $rowR.css({right: '-50%'});

                            }

                        }
                        // if not, the row should become visible (0% of left/right) as it gets closer to the center of the screen.
                        else {

                            // row's height
                            var rowH = $row.height(),
                            // the value on each scrolling step will be proporcional to the distance from the center of the screen to its height
                                factor = ( ( ( rowT + rowH / 2 ) - winCenter ) / ( winSize.height / 2 + rowH / 2 ) ),
                            // value for the left / right of each side of the row.
                            // 0% is the limit
                                val = Math.max(factor * 50, 0);

                            if (val <= 0) {

                                // when 0% is reached show the pointer for that row
                                if (!$row.data('pointer')) {

                                    $row.data('pointer', true);
                                    $row.find('.thumb').addClass('ss-circle-deco');

                                }

                            }
                            else {

                                // the pointer should not be shown
                                if ($row.data('pointer')) {

                                    $row.data('pointer', false);
                                    $row.find('.thumb').removeClass('ss-circle-deco');

                                }

                            }

                            // set calculated values
                            if (perspective) {

                                var t = Math.max(factor * 75, 0),
                                    r = Math.max(factor * 90, 0),
                                    o = Math.min(Math.abs(factor - 1), 1);

                                $rowL.css({
                                    '-webkit-transform': 'translate3d(-' + t + '%, 0, 0) rotateY(-' + r + 'deg) translate3d(-' + t + '%, 0, 0)',
                                    'opacity': o
                                });
                                $rowR.css({
                                    '-webkit-transform': 'translate3d(' + t + '%, 0, 0) rotateY(' + r + 'deg) translate3d(' + t + '%, 0, 0)',
                                    'opacity': o
                                });

                            }
                            else {

                                $rowL.css({left: -val + '%'});
                                $rowR.css({right: -val + '%'});

                            }

                        }

                    });

                };

            return {init: init};

        })();

        $sidescroll.init();

    }

//partnership tiles filter
    if ($("#partnership").length) {
        $(window).load(function () {
            var $container = $('#partnership');
            var colWidth = $('.element').width();
            $container.isotope({
                itemSelector: '.element',
            });

            var $optionSets = $('#options .option-set'),
                $optionLinks = $optionSets.find('a');
            $optionLinks.click(function () {
                var $this = $(this);
                if ($this.hasClass('selected')) {
                    return false;
                }
                var $optionSet = $this.parents('.option-set');
                $optionSet.find('.selected').removeClass('selected');
                $this.addClass('selected');

                // make option object dynamically, i.e. { filter: '.my-filter-class' }
                var options = {},
                    key = $optionSet.attr('data-option-key'),
                    value = $this.attr('data-option-value');
                // parse 'false' as false boolean
                value = value === 'false' ? false : value;
                options[key] = value;
                if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
                    // changes in layout modes need extra logic
                    changeLayoutMode($this, options)
                } else {
                    // otherwise, apply new options
                    $container.isotope(options);
                }

                return false;
            });
            $('#filter-partnership').change(function () {
                $container.isotope({
                    filter: this.value
                });
            });
            $(window).resize(function () {
                $container.imagesLoaded(function () {
                    $container.isotope();
                });
            });
        });
    }

});


//thumbnail
(function ($) {
    var DEBUG = false;
    var version = "1.1";
    $.fn.nailthumb = function (options) {
        var opts = $.extend({}, $.fn.nailthumb.defaults, options);
        return this.each(function () {
            var $this = $(this);
            var o = $.metadata ? $.extend({}, opts, $this.metadata()) : opts;
            thumbize($this, o);
        });
    };
    function thumbize(element, options) {
        var image = setImage(element, options);
        var container = setContainer(element, options);
        if (options.serverSideParams) {
            $.fn.nailthumb.setServerSideParams(image, container, options);
        }
        debugObject("image", image);
        debugObject("container", container);
        if (options.onStart) {
            options.onStart(container, options);
        }
        if (options.loadingClass) {
            container.addClass(options.loadingClass);
        }
        if (options.preload || image.data("nailthumb.replaceto")) {
            debug("wait on load");
            image.one("load", function () {
                debugObject("before check", image);
                if (!image.data("nailthumb.working") && !image.data("nailthumb.replacing")) {
                    image.data("nailthumb.working", true);
                    debugObject("inside check", image);
                    doThumb(image, container, options);
                }
            });
            var src = image.attr("src");
            image.attr("src", null).attr("src", src);
        } else {
            debug("nail thumb directly");
            image.data("nailthumb.working", true);
            doThumb(image, container, options);
        }
    }

    function doThumb(image, container, options) {
        resetImage(image, options);
        resetContainer(container, options);
        var imageDims = getImageDims(image, options);
        debugObject("image", image);
        debugObject("imageDims", imageDims);
        if (imageDims.width == 0 || imageDims.height == 0) {
            imageDims = getHiddenCloneDims(image);
            debugObject("imageCloneDims", imageDims);
        }
        var containerDims = getContainerDims(container, options);
        debugObject("container", container);
        debugObject("containerDims", containerDims);
        var prop = getProportion(containerDims, imageDims, options);
        debug("proportions", prop);
        resize(image, imageDims, container, containerDims, prop, options);
    }

    function setImage(element, options) {
        var image = element.find("img").first();
        var finder = options.imageCustomFinder;
        if (!finder && options.imageUrl) {
            finder = imageUrlFinder;
        } else {
            if (!finder && options.imageFromWrappingLink) {
                finder = imageFromWrappingLinkFinder;
            }
        }
        if (finder) {
            var img = finder(element, options);
            debugObject("finder", img);
            if (!img) {
                img = [];
            }
            if (img.length > 0) {
                image = img;
                image.css("display", "none");
                if (!image.data("nailthumb.replaceto")) {
                    image.data("nailthumb.replaceto", element);
                }
                image.data("nailthumb.originalImageDims", null);
            }
        }
        if (image.length == 0) {
            if (element.is("img")) {
                image = element;
            }
        }
        return image;
    }

    function imageUrlFinder(element, options) {
        var image = $("<img />").attr("src", options.imageUrl).css("display", "none").data("nailthumb.replaceto", element);
        element.append(image);
        return image;
    }

    function imageFromWrappingLinkFinder(element, options) {
        var image;
        var link = element.find("a").first();
        if (link.length == 0 && element.is("a")) {
            link = element;
        }
        if (link.attr("href")) {
            image = $("<img />").attr("src", link.attr("href")).css("display", "none").data("nailthumb.replaceto", link);
            if (link.attr("title")) {
                image.attr("title", link.attr("title"));
            }
            link.append(image);
        }
        return image;
    }

    function resetImage(image, options) {
        if (!options.nostyle) {
            image.css({"position": "relative"});
        }
        if (!image.data("nailthumb.originalImageDims")) {
            image.css({
                "width": "auto",
                "height": "auto",
                "top": 0,
                "left": 0
            }).removeAttr("width").removeAttr("height");
        }
    }

    function setContainer(element, options) {
        var container = element;
        if (element.is("img")) {
            if (options.ifImageAddContainer) {
                var c = $("<div></div>");
                element.wrap(c);
            }
            container = element.parent();
        }
        return container;
    }

    function resetContainer(container, options) {
        if (options.containerClass) {
            container.addClass(options.containerClass);
        }
        if (!options.nostyle) {
            container.css({"overflow": "hidden", "padding": "0px"});
        }
        if (options.replaceAnimation == "animate") {
            if (options.width || options.height) {
                container.animate({
                    "width": options.width,
                    "height": options.height
                }, options.animationTime, options.animation);
            }
        } else {
            if (options.width) {
                container.width(options.width);
            }
            if (options.height) {
                container.height(options.height);
            }
        }
        container.find("span." + options.titleClass).remove();
    }

    function resize(image, imageDims, container, containerDims, prop, options) {
        var iw = imageDims.width * prop;
        var ih = imageDims.height * prop;
        var top = 0, left = 0, diff;
        var direction = getDirections(options.fitDirection);
        if (ih < containerDims.innerHeight) {
            switch (direction.v) {
                case"center":
                    top = -(ih - containerDims.innerHeight) / 2;
                    break;
                case"bottom":
                    top = -(ih - containerDims.innerHeight);
                    diff = "bottom";
                    break;
                case"top":
                    top = 0;
                    diff = "top";
                    break;
                default:
                    break;
            }
        } else {
            if (ih > containerDims.innerHeight) {
                switch (direction.v) {
                    case"center":
                        top = -(ih - containerDims.innerHeight) / 2;
                        break;
                    case"bottom":
                        top = -(ih - containerDims.innerHeight);
                        break;
                    default:
                        break;
                }
            }
        }
        if (iw < containerDims.innerWidth) {
            switch (direction.h) {
                case"center":
                    left = -(iw - containerDims.innerWidth) / 2;
                    break;
                case"right":
                    left = -(iw - containerDims.innerWidth);
                    break;
                default:
                    break;
            }
        } else {
            if (iw > containerDims.innerWidth) {
                switch (direction.h) {
                    case"center":
                        left = -(iw - containerDims.innerWidth) / 2;
                        break;
                    case"right":
                        left = -(iw - containerDims.innerWidth);
                        break;
                    default:
                        break;
                }
            }
        }
        image.addClass(options.imageClass);
        if (image.data("nailthumb.replaceto")) {
            replaceImage(image, imageDims, container, containerDims, ih, iw, left, top, diff, options);
        } else {
            showImage(image, imageDims, container, containerDims, ih, iw, left, top, diff, options);
        }
    }

    function replaceImage(image, imageDims, container, containerDims, ih, iw, left, top, diff, options) {
        var element = image.data("nailthumb.replaceto");
        var replaceto = findReplaceTo(element, options);
        image.data("nailthumb.replacing", true);
        image.load(function () {
            image.data("nailthumb.replacing", null);
        });
        if (replaceto) {
            replaceto.replaceWith(image);
        } else {
            element.append(image);
        }
        if (options.afterReplace) {
            options.afterReplace(container, image, options);
        }
        showImage(image, imageDims, container, containerDims, ih, iw, left, top, diff, options);
    }

    function showImage(image, imageDims, container, containerDims, ih, iw, left, top, diff, options) {
        if (options.replaceAnimation == "animate") {
            image.css("display", "inline");
            container.animate({
                "width": containerDims.innerWidth,
                "height": containerDims.innerHeight
            }, options.animationTime, options.animation);
            image.animate({
                "width": iw,
                "height": ih,
                "top": top,
                "left": left
            }, options.animationTime, options.animation, function () {
                afterAppear(image, imageDims, container, containerDims, ih, iw, left, top, diff, options);
            });
        } else {
            container.css({"width": containerDims.innerWidth, "height": containerDims.innerHeight});
            if (options.replaceAnimation) {
                image.css("display", "none");
            }
            image.css({"width": iw, "height": ih, "top": top, "left": left});
            if (options.replaceAnimation == "fade") {
                image.fadeIn(options.animationTime, options.animation, function () {
                    afterAppear(image, imageDims, container, containerDims, ih, iw, left, top, diff, options);
                });
            } else {
                if (options.replaceAnimation == "slide") {
                    image.slideDown(options.animationTime, options.animation, function () {
                        afterAppear(image, imageDims, container, containerDims, ih, iw, left, top, diff, options);
                    });
                } else {
                    if (options.replaceAnimation && options.replaceAnimation instanceof Function) {
                        options.replaceAnimation(image, function () {
                            afterAppear(image, imageDims, container, containerDims, ih, iw, left, top, diff, options);
                        }, options);
                        if (!options.selfStartAfterAppear) {
                            afterAppear(image, imageDims, container, containerDims, ih, iw, left, top, diff, options);
                        }
                    } else {
                        image.css("display", "inline");
                        afterAppear(image, imageDims, container, containerDims, ih, iw, left, top, diff, options);
                    }
                }
            }
        }
    }

    function afterAppear(image, imageDims, container, containerDims, ih, iw, left, top, diff, options) {
        if (options.afterAppear) {
            options.afterAppear(container, image, options);
        }
        image.data("nailthumb.replaceto", null);
        decorate(image, imageDims, container, containerDims, ih, iw, left, top, diff, options);
    }

    function findReplaceTo(element, options) {
        var rep = null;
        element.find("img").each(function () {
            if (!rep && !$(this).data("nailthumb.replaceto")) {
                rep = $(this);
            }
        });
        return rep;
    }

    function decorate(image, imageDims, container, containerDims, ih, iw, left, top, diff, options) {
        if (options.title || (options.titleAttr && image.attr(options.titleAttr))) {
            var title = options.title ? options.title : image.attr(options.titleAttr);
            if (title) {
                var span = $('<span class="' + options.titleClass + '">' + title + "</span>");
                if (containerDims.innerHeight > ih) {
                    span.css("top", containerDims.innerHeight - ih);
                } else {
                    span.css("top", "0px");
                }
                container.append(span);
                var tit = getHiddenDims(span);
                var im = getHiddenDims(image);
                debugObject("decorate containerDims", containerDims);
                debugObject("decorate imageDims", imageDims);
                debugObject("decorate imageDims", im);
                debugObject("decorate tit", tit);
                var outbound = containerDims.offsetTop + containerDims.innerHeight - tit.offsetTop;
                if (containerDims.height > containerDims.innerHeight) {
                    outbound += (containerDims.height - containerDims.innerHeight) / 2;
                }
                span.css("top", "+=" + outbound);
                if (iw < tit.width) {
                    span.css("width", iw);
                }
                if (left > 0) {
                    span.css("left", left);
                }
                var delta = tit.height;
                if (containerDims.innerHeight > ih && diff != "bottom") {
                    delta += (containerDims.innerHeight - ih) / ((diff == "top") ? 1 : 2);
                }
                var clone = span.clone();
                clone.css("width", "auto").css("display", "none").css("position", "absolute");
                container.append(clone);
                var cloneDims = getHiddenDims(clone);
                clone.remove();
                debugObject("decorate cloneDims", cloneDims);
                if (options.titleWhen == "hover") {
                    container.unbind("mouseenter mouseleave").hover(function () {
                        span.find("span." + options.titleScrollerClass).css("left", 0);
                        containerDims = getHiddenDims(container);
                        tit = getHiddenDims(span);
                        outbound = containerDims.offsetTop + containerDims.innerHeight - tit.offsetTop;
                        if (containerDims.height > containerDims.innerHeight) {
                            outbound += (containerDims.height - containerDims.innerHeight) / 2;
                        }
                        debugObject("decorate hover tit", tit);
                        debug("decorate hover outbound", tit);
                        var doubleDelta = 0;
                        if (outbound < 0) {
                            span.css("top", "+=" + outbound);
                            doubleDelta = delta;
                        } else {
                            doubleDelta = delta - outbound;
                        }
                        if (options.animateTitle) {
                            resetScrollTitle(span, options);
                            span.stop(true).animate({top: "-=" + doubleDelta}, options.titleAnimationTime, options.titleAnimation, function () {
                                scrollTitle(span, cloneDims.width, containerDims.innerWidth, options);
                            });
                        } else {
                            span.css({top: "-=" + doubleDelta});
                            scrollTitle(span, cloneDims.width, containerDims.innerWidth, options);
                        }
                    }, function () {
                        if (options.animateTitle) {
                            resetScrollTitle(span, options);
                            span.animate({top: "+=" + delta}, options.titleAnimationTime, options.titleAnimation, function () {
                                resetScrollTitle(span, options);
                            });
                        } else {
                            resetScrollTitle(span, options);
                            span.css({top: "+=" + delta});
                        }
                    });
                } else {
                    if (options.animateTitle) {
                        span.animate({top: "-=" + delta}, options.titleAnimationTime, options.titleAnimation, function () {
                            scrollTitle(span, cloneDims.width, containerDims.innerWidth, options);
                        });
                    } else {
                        span.css({top: "-=" + delta});
                        scrollTitle(span, cloneDims.width, containerDims.innerWidth, options);
                    }
                }
            }
        }
        if (options.onFinish) {
            options.onFinish(container, options);
        }
        if (options.loadingClass) {
            container.removeClass(options.loadingClass);
        }
        image.data("nailthumb.working", null);
    }

    function resetScrollTitle(span, options) {
        span.find("span." + options.titleScrollerClass).stop();
    }

    function scrollTitle(span, width, visibleWidth, options) {
        if (width > visibleWidth && options.titleScrolling) {
            if (span.find("span." + options.titleScrollerClass).length == 0) {
                span.wrapInner('<span class="' + options.titleScrollerClass + '" />');
                span.find("span." + options.titleScrollerClass).width(width).css("position", "relative").css("white-space", "nowrap");
            }
            span.find("span." + options.titleScrollerClass).css("left", 0);
            setTimeout(scrollFunction(span, width, visibleWidth, options), 1000);
        }
    }

    function scrollFunction(span, width, visibleWidth, options) {
        return function () {
            var indent = Number(span.find("span." + options.titleScrollerClass).css("left").replace(/[^-\d]/g, ""));
            debug("indent", indent);
            debug("width", width);
            debug("visibleWidth", visibleWidth);
            debug("width <= -indent", (width <= -indent));
            var delta = width + indent;
            if (delta <= 0) {
                span.find("span." + options.titleScrollerClass).css("left", visibleWidth);
                delta = width + visibleWidth;
            }
            delta += 10;
            span.find("span." + options.titleScrollerClass).animate({"left": "-=" + delta}, width * 1000 / 30, "linear", scrollFunction(span, width, visibleWidth, options));
        };
    }

    function getProportion(containerDims, imageDims, options) {
        if (options.proportions != null && options.proportions > 0) {
            return options.proportions;
        } else {
            var prop = containerDims.innerWidth / imageDims.width;
            if (options.method && options.method == "resize") {
                if (containerDims.innerHeight / imageDims.height < prop) {
                    prop = containerDims.innerHeight / imageDims.height;
                }
            } else {
                if (containerDims.innerHeight / imageDims.height > prop) {
                    prop = containerDims.innerHeight / imageDims.height;
                }
            }
            if (options.maxEnlargement && options.maxEnlargement < prop) {
                prop = options.maxEnlargement;
            }
            if (options.maxShrink && options.maxShrink > prop) {
                prop = options.maxShrink;
            }
            return prop;
        }
    }

    function getDirections(option) {
        var dir = {h: "center", v: "center"};
        if (option) {
            var opts = option.split(" ");
            if (opts.length > 0) {
                dir = getDirection(opts[0], dir);
            }
            if (opts.length > 1) {
                dir = getDirection(opts[1], dir);
            }
        }
        return dir;
    }

    function getDirection(str, d) {
        switch (str) {
            case"top":
                d.v = "top";
                break;
            case"bottom":
                d.v = "bottom";
                break;
            case"left":
                d.h = "left";
                break;
            case"right":
                d.h = "right";
                break;
            default:
                break;
        }
        return d;
    }

    function getImageDims(image, options) {
        var imageDims;
        if (!image.data("nailthumb.originalImageDims")) {
            imageDims = getHiddenDims(image);
            image.data("nailthumb.originalImageDims", imageDims);
            if (!options.keepImageDimensions) {
                image.one("load", function () {
                    image.data("nailthumb.originalImageDims", null);
                });
            }
        } else {
            imageDims = image.data("nailthumb.originalImageDims");
        }
        return imageDims;
    }

    function getContainerDims(container, options) {
        var containerDims = getHiddenDims(container);
        if (options.width) {
            containerDims.innerWidth = options.width;
        }
        if (options.height) {
            containerDims.innerHeight = options.height;
        }
        return containerDims;
    }

    function getDims(elem) {
        var offset = $(elem).offset();
        return {
            offsetTop: offset.top,
            offsetLeft: offset.left,
            width: $(elem).outerWidth(),
            height: $(elem).outerHeight(),
            innerWidth: $(elem).innerWidth(),
            innerHeight: $(elem).innerHeight()
        };
    }

    function getHiddenDims(elems) {
        var dims = null, i = 0, offset, elem;
        while ((elem = elems[i++])) {
            var hiddenElems = $(elem).parents().andSelf().filter(":hidden");
            if (!hiddenElems.length) {
                dims = getDims(elem);
            } else {
                var backupStyle = [];
                hiddenElems.each(function () {
                    var style = $(this).attr("style");
                    style = typeof style == "undefined" ? "" : style;
                    backupStyle.push(style);
                    $(this).attr("style", style + " display: block !important;");
                });
                hiddenElems.eq(0).css("left", -10000);
                dims = getDims(elem);
                hiddenElems.each(function () {
                    $(this).attr("style", backupStyle.shift());
                });
            }
        }
        return dims;
    }

    function getHiddenCloneDims(elems) {
        var dims = null, i = 0, offset, elem;
        while ((elem = elems[i++])) {
            var hiddenElems = $(elem).parents().andSelf().filter(":hidden");
            if (!hiddenElems.length) {
                dims = getDims(elem);
            } else {
                var backupStyle = [];
                hiddenElems.each(function () {
                    var style = $(this).attr("style");
                    style = typeof style == "undefined" ? "" : style;
                    backupStyle.push(style);
                    $(this).attr("style", style + " display: block !important;");
                });
                hiddenElems.eq(0).css("left", -10000);
                var clone = hiddenElems.eq(0).clone();
                $("body").append(clone);
                dims = getDims(clone);
                hiddenElems.each(function () {
                    $(this).attr("style", backupStyle.shift());
                });
                clone.remove();
            }
        }
        return dims;
    }

    $.fn.nailthumb.evalServerSideParams = function (image, container, options) {
        if (options.serverSideParams) {
            var params = {};
            if (!options.serverSideParams.noServerResize) {
                var w = null, h = null;
                if (options.serverSideParams.width) {
                    w = options.serverSideParams.width;
                } else {
                    if (options.width) {
                        w = options.width;
                    }
                }
                if (options.serverSideParams.height) {
                    h = options.serverSideParams.height;
                } else {
                    if (options.height) {
                        h = options.height;
                    }
                }
                if (!(w && h)) {
                    resetContainer(container, options);
                    var containerDims = getContainerDims(container, options);
                    w = containerDims.innerWidth;
                    h = containerDims.innerHeight;
                }
                if (w && h) {
                    params.w = w;
                    params.h = h;
                    if (options.serverSideParams.mode != "resize") {
                        if (options.method == "crop") {
                            params.mode = "crop";
                        }
                        if (options.serverSideParams.mode) {
                            params.mode = options.serverSideParams.mode;
                        }
                    }
                }
            }
            $.each(options.serverSideParams, function (key, val) {
                if (key != "width" && key != "height" && key != "mode" && key != "noServerResize" && val) {
                    params[key] = val;
                }
            });
            var pars = "";
            $.each(params, function (key, val) {
                pars += ";" + key + "=" + val;
            });
            debug(pars, params);
            return pars;
        } else {
            return "";
        }
    };
    $.fn.nailthumb.setServerSideParams = function (image, container, options) {
        if (options.serverSideParams) {
            var url = image.attr("src");
            if (image.data("nailthumb.originalImageUrl")) {
                url = image.data("nailthumb.originalImageUrl");
            }
            image.data("nailthumb.originalImageUrl", url);
            var pars = $.fn.nailthumb.evalServerSideParams(image, container, options);
            url += pars;
            image.attr("src", url);
        }
    };
    $.fn.nailthumb.toggleDebug = function () {
        DEBUG = !DEBUG;
    };
    $.fn.nailthumb.doThumb = function (image, container, options) {
        doThumb(image, container, options);
    };
    $.fn.nailthumb.defaults = {
        onStart: null,
        onFinish: null,
        loadingClass: "nailthumb-loading",
        imageUrl: null,
        imageFromWrappingLink: false,
        imageCustomFinder: null,
        imageClass: "nailthumb-image",
        afterReplace: null,
        afterAppear: null,
        replaceAnimation: "fade",
        selfStartAfterAppear: false,
        animationTime: 1000,
        animation: "swing",
        keepImageDimensions: false,
        method: "crop",
        fitDirection: null,
        proportions: null,
        ifImageAddContainer: true,
        containerClass: "nailthumb-container",
        maxEnlargement: null,
        maxShrink: null,
        preload: true,
        nostyle: false,
        width: null,
        height: null,
        title: null,
        titleClass: "nailthumb-title",
        titleAttr: "title",
        titleWhen: "hover",
        titleScrolling: true,
        titleScrollerClass: "nailthumb-title-scroller",
        animateTitle: true,
        titleAnimationTime: 500,
        titleAnimation: "swing",
        serverSideParams: null
    };
    function log(log, jQueryobj) {
        try {
            debug(log, jQueryobj, true);
        } catch (ex) {
        }
    }

    function debug(log, jQueryobj, force) {
        try {
            if ((DEBUG && window.console && window.console.log) || force) {
                window.console.log(log + ": " + jQueryobj);
            }
        } catch (ex) {
        }
    }

    function debugObject(log, jQueryobj, force) {
        try {
            if (!jQueryobj) {
                jQueryobj = log;
            }
            debug(log, jQueryobj);
            if ((DEBUG && window.console && window.console.log) || force) {
                window.console.debug(jQueryobj);
            }
        } catch (ex) {
        }
    }
})(jQuery);

$(document).ready(function () {
    $('#content-slider .slides li').nailthumb({fitDirection: 'top left'});
}); 

