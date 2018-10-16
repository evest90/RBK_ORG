/* =========================================
                Preloader
============================================ */
$(window).on('load', function () { // makes sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/* =========================================
                Team
============================================ */
$(function () {

    // $.getJSON("./info/teamMembers.json", function (data) {  
        let array = staff
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            const $element ='<div class="team-member"><img src="'+element.image+'" alt="team member" class="img-responsive"><div class="team-member-overlay"><div class="team-member-info text-center"><h6>'+element.name+'</h6><p>'+element.occupation+'</p><p class="member">'+element.description+'</p></div></div></div>'
    
            $('#team-members').append($element)
            
        }
        $("#team-members").owlCarousel({
            items: 2,
            autoplay: true,
            smartSpeed: 700,
            loop: true,
            autoplayHoverPause: true,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1
                },
                // breakpoint from 480 up
                480: {
                    items: 2
                }
            }
        });
    // });
        staff = undefined
    });

  

/* =========================================
                Progress Bars
============================================ */
$(function () {

    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);

        });

        this.destroy();
    }, {
            offset: 'bottom-in-view'
        });

});

/* =========================================
               Responsive Tabs
============================================ */
$(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

});


/* =========================================
               Portfolio
============================================ */
$(window).on('load', function () {

    // Initialize Isotope
    $("#isotope-container").isotope({});

    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
/* =========================================
               Magnifier
============================================ */
$(function () {

    $("#portfolio-wrapper").magnificPopup({
        // delegate: 'a', // child items selector, by clicking on it popup will open
        items: [
            {
                src: $(
                    `
                    <h3 style="color:white; text-align:center">
                    Admissions
                    </h3>
                    <div style="color:white; text-align:center; margin: 30px 100px";>
                        We graduate the best software programmers this side of the hemisphere if not the world ! It takes grit, passion, dedication and commitment to finish the course and begin a prosperous and fulfilling life. Before you are officially admitted to the Program, you’ll have to commit to 16-hour days for 4 months in order to graduate as a Silicon Valley grade software engineer. 

                        In order for you to succeed, we’d like to know a bit more about you. Our Admissions gate is designed for you to test yourself and see if you have what it takes. Ranging from mindset to technical ability, the Admissions tests will require your full attention and time.

                        Anyone can apply for our eXtreme Learning program ! All you have to do is pass our Admissions tests. These tests can last anywhere between 2 to 3 months depending on the effort you put in. Once you’ve crossed those hurdles, you earn the right to an interview. All the information and answers you provide are confidential and will not be shared with anyone but you !

                        What You Can Expect

                        200 questions that you must complete. These will help us to get to know you
                        250 to 300 online lessons that you must successfully complete and pass 

                        Yes. It sounds hard, we know. But if you can do this, you can do anything !

                        Good Luck !

                        Get After Your Dream 

                    </div>
                    <div style="text-align:center">
                    <div>
                      <button 
                        style="color: #fff;
                        border: 1px solid #b40381;
                        background-color: #b40381;
                        border-radius:28px;
                        margin-bottom: 20px;
                        "
                       >
                      APPLY HERE!
                      </button>
                      </div>
                      <div>
                      <button 
                        style="color: #fff;
                        border: 1px solid #b40381;
                        background-color: #b40381;
                        border-radius:28px;
                        "
                       >
                      CLOSE
                      </button>
                      </div>
                    </div>
                    `
                ),
                type: 'inline'
            }
        ],
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $("#portfolio-wrapper2").magnificPopup({
        // delegate: 'a', // child items selector, by clicking on it popup will open
        items: [
            {
                src: $(
                    `
                    <h3 style="color:white; text-align:center">
                    A Typical Day at RBK
                    </h3>
                    <div style="color:white; text-align:center; margin: 30px 100px";>
                        Expect to kick off with the class coordinator who’ll ask about your previous day. They’ll encourage you to get enough sleep so you can be productive. They’ll also give you a toy problem (small challenge based on what you’ve learned so far). You’ll get a break that most students use to brainstorm solutions with each other. Everyone has a different approach to solving something!


                        Then you’ll get a little lecture from the tech team that’s usually more of an introduction to the day’s material or an explanation of a main concept that you might be applying.
                        
                        You’ll hear the lecturer say “Guys ! Back to hacking!”.  You’ll hack in pairs and every two days you’ll get a different teammate. You’ll keep hacking until it’s lunch time !  You’ll also be encouraged to take regular breaks, maybe a quick walk just to unplug.
                        
                        After lunch you’ll take part in a 5-minute public lightning talk where you can talk about any topic that interests you. On many occasions, this will be followed by a talk from one of the hiring partners telling you about their company. 
                         
                        You’ll continue hacking until it’s unplugging hour. This is your de-stress hour. Sometimes we do yoga, sometimes we meditate, or go for a group walk … And sometimes we paint, sing or even dance. Anything to keep us away from screens !
                        
                        You’ll continue hacking until the end of the day with a dinner break. Finally, you’ll say goodbye and dream of your bed.
                    </div>
                    <div style="text-align:center">
                      <button 
                        style="color: #fff;
                        border: 1px solid #b40381;
                        background-color: #b40381;
                        border-radius:28px;
                        "
                       >
                      CLOSE
                      </button>
                    </div>
                    `
                ),
                type: 'inline'
            }
        ],
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    

});

/* =========================================
               Testimonials
============================================ */

$(function () {
    let array = graduates
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            const $element ='<div class="testimonial"><div class="row"><div class="col-md-6 col-sm-6 col-xs-6"> <h3>'+element.occupation+'</h3></div></div><p>'+element.qoute+'</p> <div class="author"><div class="row"><div class="col-md-2 col-sm-3 col-xs-6"><img src="'+ element.image+'" alt="client" class="img-responsive img-circle"></div><div class="col-md-10 col-sm-3 col-xs-6"> <div class="author-name-des"> <p>'+element.name+'</p><p>'+element.cohort_number+'</p> </div> </div> </div> </div> </div>'
            

            $('#testimonial-slider').append($element)
            
        }
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
    graduates = undefined
});


/* =========================================
              Stats
============================================ */
$(function () {

    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });

});


/* =========================================
              Clients
============================================ */
$(function () {
    //  $.getJSON("./info/graduates.json", function (data) {  
        let array = hiringPartners
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            const $element ='<div class="client"><img src="'+ element.image +'" class="img-responsive" alt="client"></div>'

            $('#clients-list').append($element)
            
        }
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 6
            }
        }
    });
//    })
    hiringPartners = undefined
});


/* =========================================
              Google Map
============================================ */
$(window).on('load', function () {

    // Map Variables
    var addressString = '19 Zarkashi Street, Khalda, Amman, Jordan';
    var myLatlng = {
        lat: 31.986680,
        lng: 35.837785
    };

    // 1. Render Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myLatlng
    });

    // 2. Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click To See Address"
    });

    // 3. Add Info Window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });

    // Show info window when user clicks marker
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    // 4. Resize Function
    google.maps.event.addDomListener(window, 'resize', function () {

        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);

    });

});


/* =========================================
              Navigation
============================================ */

/* Show & Hide White Navigation */
$(function () {

    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        // show/hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 20) {

            // Show white nav
            $("#navbar").addClass("white-nav-top");

            // Show Dark logo
            $("#logo img").attr("src", "img/logo/logo.png");

            // Show back to top button
            $("#back-to-top").fadeIn();

        } else {

            // Hide white nav
            $("#navbar").removeClass("white-nav-top");

            // Show White logo
            $("#logo img").attr("src", "img/logo/white-logo.png");

            // Hide back to top button
            $("#back-to-top").fadeOut();
        }
    }
});

// Smooth Scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get section id like #about, #servcies, #work, #team and etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");

    });

});

/* =========================================
              Mobile Menu
============================================ */
$(function () {

    // Show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});

/* =========================================
                Animation
============================================ */
// animate on scroll
$(function () {
    new WOW().init();
});

// home animation on page load
$(window).on('load', function () {

    $("#home-heading-1").addClass("animated fadeInDown");
    $("#founding-partner").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
});


/* =========================================
                Reactor logo
============================================ */
$(function () {
    $("#hackreactor").on({
        mouseenter: function () {
            $(this).attr('src', './img/logo/hack-reactor-logo.png');
        },
        mouseleave: function () {
            $(this).attr('src', './img/logo/hack-reactor-logo-white.png');
        }
    });
});


/* =========================================
            Vertical Navigation Bar
============================================ */
$(function () {
    if ($('.vertical-nav').length > 0) {
        var stretchyNavs = $('.vertical-nav');

        stretchyNavs.each(function () {
            var stretchyNav = $(this),
                stretchyNavTrigger = stretchyNav.find('.vertical-trigger');

            stretchyNavTrigger.on('click', function (event) {
                event.preventDefault();
                stretchyNav.toggleClass('nav-is-visible');
            });
        });

        $(document).on('click', function (event) {
            (!$(event.target).is('.vertical-trigger') && !$(event.target).is('.vertical-trigger span')) && stretchyNavs.removeClass('nav-is-visible');
        });
    }
});

// Vertical Navbar Smooth Scrolling 
$(function () {
    $('.vertical-nav ul li a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 64
        }, 1250, 'easeInOutExpo');
    });
});


 function test(){
  
        $('.submit').click(function() {
            $.ajax({
                type: 'POST',
                url: "https://docs.google.com/forms/d/e/1FAIpQLScHAIv8OFLYtPhGqZK-JmyyjEghSaWAtO9M5AVh0Kx5OOqn8w/formResponse",
                data: $(this).serialize(),
                error: function()
                {
                    window.location.reload()
                },
                success: function(response)
                {  
                   window.location.reload()
                }
            });
            return false;
        }); 
 
}