var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 9000);    
}

// Animate
//=========

$(function(){
    var animationName = 'animated infinite pulse';
    var animationName2 = 'animated hinge'
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    $('.hov1').on('click',function(){
        $(this).removeClass(animationName);
        $(this).addClass(animationName2).one(animationEnd,function(){
            $(this).removeClass(animationName2);
        });
    });
    $(".hov0").on({
        mouseenter: function () {
            //stuff to do on mouse enter
            $('.hov0s').addClass(animationName)
        },
        mouseleave: function () {
            //stuff to do on mouse leave
            $('.hov0s').removeClass(animationName);
        }
    });
    $(".hov1").on({
        mouseenter: function () {
            //stuff to do on mouse enter
            $('.hov1s').addClass(animationName)
        },
        mouseleave: function () {
            //stuff to do on mouse leave
            $('.hov1s').removeClass(animationName);
        }
    });
    $(".hov2").on({
        mouseenter: function () {
            //stuff to do on mouse enter
            $('.hov2s').addClass(animationName)
        },
        mouseleave: function () {
            //stuff to do on mouse leave
            $('.hov2s').removeClass(animationName);
        }
    });
    $(".hov3").on({
        mouseenter: function () {
            //stuff to do on mouse enter
            $('.hov3s').addClass(animationName)
        },
        mouseleave: function () {
            //stuff to do on mouse leave
            $('.hov3s').removeClass(animationName);
        }
    });
    $(".hov4").on({
        mouseenter: function () {
            //stuff to do on mouse enter
            $('.hov4s').addClass(animationName)
        },
        mouseleave: function () {
            //stuff to do on mouse leave
            $('.hov4s').removeClass(animationName);
        }
    });
});
