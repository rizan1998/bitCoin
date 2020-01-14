// //untuk animate css
// $(function () {
//     var animationName = 'animated shake';
//     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oAnimationEnd animationend';
//     //select element yang dituju
//     $('.container .menu ul .navover').on('mouseover', function () {
//         $('li[name=firstName]').addClass(animationName).one(animationEnd, function () {
//             $(this).removeClass(animationName);
//         });
//     });
// });

$(document).ready(function () {
    $('#navover').mouseover(function () {
        $('.navover-inline').addClass('animated pulse');
    });
});


// $(function () {
//     $("#navover").mouseover(function () {
//         $('#navover-inline').mouseover(function () {
//             var navover = document.getElementsByClassName('navover-inline');

//             function admin() {
//                 navover - inline.style.color = 19dafa;
//             }
//         });
//     });

// });

// $(function () {
//     $("#navover").mouseover(function () {
//         $('#navover-inline').mouseover();
//     });

// });