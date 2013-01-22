var s, App = {

    settings : {
        body: $('body'),
        navLinks: $('nav li'),
        nextSlide: null,
        pageSpeed: 500,
        pagination: $('.next, .prev'),
        prevSlide: null,
        sections: $('section, .project'),
        slides: $('.hero > .project'),
        win: $(window)
    },

    init: function() {
        s = this.settings;

        // Add active class to first slide on page load
        s.slides.eq(0).addClass('is-active');

        // Add active class to proper nav item on page load
        var hash = window.location.hash;
        if (hash) {
            this.updateNavIsActive($(hash.replace("#", "nav .")))
        } else {
            $('nav li:first-child').addClass('is-active');
        }

        // Initialize Events
        this.events();

        // Set minimum height to sections
        this.setMinHeight();

        // Position content in the center
        this.positionContent();

        // Page has finished loading
        $('html').addClass('page-is-loaded');
    },

    events: function() {
        s.win.on('resize', function() {
            App.setMinHeight();
            App.positionContent();
            return false;
        });
        s.pagination.on('click', function() {
            App.scrollToTop();
            App.heroTransitions($(this));
            return false;
        });
    },

    heroTransitions: function(el) {
        var currentSlide = $('.project.is-active')
        currentSlide.removeClass('is-active');
        if (el.attr('class') === 'next') {
            if (currentSlide.next().length > 0) {
                s.nextSlide = currentSlide.next();
            } else {
                s.nextSlide = s.slides.eq(0);
            }
            s.nextSlide.addClass('is-active');
        } else {
            if (currentSlide.prev().length > 0) {
                s.prevSlide = currentSlide.prev();
            } else {
                s.prevSlide = s.slides.eq(s.slides.length - 1);
            }
            s.prevSlide.addClass('is-active');
        }
    },

    positionContent : function() {
        $('section > .container').each(function() {
            var el = $(this);
            var elHeight = $(this).height();
            var winHeight = $(window).height();
            var heightAdj = ((winHeight - 125) - elHeight) / 2;
            if (heightAdj > 0) {
                el.css("margin-top", heightAdj + "px");
            } else {
                el.css("margin-top", "30px")
            }
        });
    },

    scrollToSection : function(section) {
        s.body.animate({
            scrollTop: $(section).offset().top
        }, s.pageSpeed);
    },

    scrollToTop : function() {
        s.body.animate({ scrollTop: 0 }, s.pageSpeed);
    },

    setMinHeight : function() {
        s.sections.css('min-height', s.win.height() + 1 + 'px');
    },

    updateNavIsActive : function(el) {
        s.navLinks.removeClass('is-active');
        el.addClass('is-active');
    }

};
