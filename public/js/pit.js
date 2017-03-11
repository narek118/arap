function fxx() {
    var hs = document.getElementById('demo');
    if (hs.className === "hidden-xs show") {
        hs.className = "show";
        hs.style.height = "120px"
    } else {
            hs.className = "hidden-xs show";
            hs.style.height = "40px";
    }
}
function araj() {
    var rj = document.getElementById('aj11');
    var pc = document.getElementById('pc1');
    var an = document.getElementById('arbtn');
    var pn = document.getElementById('pabtn');
    var sp1 = document.getElementById('spn1');
    var pbtx = document.getElementById('pabtntext');
    if (rj.className === "col-xs-6 col-sm-6 col-md-6 col-lg-6") {
        rj.className = "col-xs-12 col-sm-12 col-md-12 col-lg-12";
        an.className = "col-xs-12 col-sm-12 col-md-12 col-lg-12";
        pc.style.display = pn.style.display = "none"; 
        sp1.style.display = "block";
        pbtx.text = "Պ";
    } else {
           rj.className = an.className = "col-xs-6 col-sm-6 col-md-6 col-lg-6";
           pc.style.display = pn.style.display = "block"; 
           sp1.style.display = "none";
           pbtx.text = "Պահանջարկ";
    }
}

//var h === 'հ';
// var app = angular.module('myApp', []);
//     app.filter('myFormat', function() {
//     return function(x) {
//         var i, c, txt = "";
//         //var h === 'հ';
//         for (i = 0; i < x.length; i++) {
//             c = x[i];
//             if (i % 2 == 0) {
//                 c = c.toUpperCase();
//             }
//             txt += c;
//         }
//         return txt;
//     };
// });
// app.controller('namesCtrl', function($scope) {
//     $scope.names = [
//         'Երևան',
//         'Արագածոտն',
//         'Արարատ',
//         'Արմավիր',
//         'Գեղարքունիք',
//         'Լոռի',
//         'Կոտայք',
//         'Շիրակ',
//         'Սյունիք',
//         'Վայոց ձոր',
//         'Տավուշ',
//     ];
//     $scope.names2 = [
//         'Ստեփանակերտ',
//         'Ասկերան',
//         'Հադրութ',
//         'Մարտակերտ',
//         'Մարտունի',
//         'Շահումյան',
//         'Շուշի',
//         'Քաշաթաղ',
//     ];
// });