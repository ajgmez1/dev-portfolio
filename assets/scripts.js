/*
*  portfolio animations
*
*/

(function ($) {
    "use strict";

    if (!String.prototype.includes) {
      String.prototype.includes = function() {
        return String.prototype.indexOf.apply(this, arguments) !== -1;
      };
    }

    var Portfolio = (function () {
        
        var $divs;
        var $header;
        var $nav;
        var divIndex;
        var divHeight;
        var divsOffset;
        var scrollPos;

        function updateScroll() {
            scrollPos = $(window).scrollTop();
        }

        function divsCheck() {
            divIndex = parseInt((scrollPos - divsOffset) / divHeight);
            var $current = $divs.eq(divIndex);

            if ($current.length && !$current[0].className.includes('fixed-2')) {
                $header.text($current[0].className.replace('-',' ').toUpperCase());

                $current.siblings().removeClass('fixed-2');
                $current.addClass('fixed-2');
                
                $current.children('ul').css('margin-left', '5%');
                $current.children('ul').children('li').css('margin-left', '5%');
            }

            if (scrollPos < divsOffset) {
                $current.removeClass('fixed-2');
            } else if (scrollPos > $(document).height() - divsOffset - divHeight) {
                $divs.last().css('margin-top','-150%');
            } else {
                $divs.last().css('margin-top','');
            }
        }

        function headerCheck() {
            if (scrollPos < divsOffset) {
                $header.removeClass('fixed-1');
            } else if (scrollPos > $(document).height() - divsOffset - divHeight) {
                $header.css('margin-top','-150%');
            } else {
                $header.addClass('fixed-1');
                $header.css('margin-top','');
            }
        }

        function navCheck() {
            var $navDivs = $('section.andrew-nav-menu div.point, section.andrew-nav-menu div.point-hover');

            $navDivs.addClass('point');
            $navDivs.removeClass('point-hover');

            if ($navDivs.eq(divIndex).length) {
                $navDivs.eq(divIndex)[0].className = 'point-hover';
            }

            if (scrollPos > divsOffset) {
                $nav.addClass('andrew-fixed');
            } else {
                $nav.removeClass('andrew-fixed');
            }
        }

        return {
            
            init: function() {
                $divs   = $('section.andrew-portfolio div');
                $header = $('section.andrew-portfolio h1.title');
                $nav    = $('section.andrew-nav-menu');

                if ($divs.length) {
                    divHeight = $divs.height();
                    divsOffset = $divs.eq(0).offset().top - 50;
                    return true;
                }
            },

            scroll: function() {
                updateScroll();
                divsCheck();
                headerCheck();
                navCheck();
            },

            loadNavigation: function() {
                var className = '';
                var count = 0;

                $divs.each(function () {
                    var div = document.createElement('div');

                    if (className !== this.className) {
                        div.textContent = this.className.replace('-',' ').toUpperCase();
                        div.className = 'pipe';
                        className = this.className;
                        $nav[0].appendChild(div);
                        div = document.createElement('div');
                        div.className = 'point';
                        div.id = count++;
                    } else {
                        div.className = 'point';
                        div.id = count++;
                    }

                    $nav[0].appendChild(div);
                });
            },

            scrollTo: function() {
                var top = this.id * divHeight + divsOffset + 5;

                $('html, body').animate({
                    scrollTop: top
                }, 1000);
            }

        };

    })();

    $(document).ready(function () {

        if (Portfolio.init()) {
            Portfolio.loadNavigation();
            $(window).scroll(Portfolio.scroll);
        }

        $('section.andrew-nav-menu div.point').click(Portfolio.scrollTo);

    });

})(jQuery);