$(document).ready(function () {
  var cssdiff = require(".");

  $("#diff-calculate").click(function (e) {
    e.preventDefault(); // Prevent default action

    var cssold = $("#diff-old").val() || "";
    var cssnew = $("#diff-new").val() || "";

    var result = cssdiff.calculate(cssold, cssnew);

    $("#removed").html(result.removed);
    $("#added").html(result.added);

    $("#result").show();
    // $(window).scroll($("#result"));
    $("html, body").animate({ scrollTop: $("#result").offset().top }, 250);
  });

  function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split("&"),
      sParameterName;

    for (var i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split("=");
      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined
          ? true
          : decodeURIComponent(sParameterName[1]);
      }
    }
    return false;
  }

  var oldViaURL = getUrlParameter("old") || "";
  var newViaURL = getUrlParameter("new") || "";

  if (oldViaURL) {
    $("#diff-old").val(oldViaURL);
  }

  if (newViaURL) {
    $("#diff-new").val(newViaURL);
  }
  $("#diff-calculate").click();
});