$(document).ready(function () {
  var cssdiff = require(".");

  $("#diff-calculate").click(function (e) {
    var cssold = $("#diff-old").val() || "";
    var cssnew = $("#diff-new").val() || "";

    var result = cssdiff.calculate(cssold, cssnew);

    $("#removed").html(result.removed);
    $("#added").html(result.added);

    $("#result").show();
    // $(window).scroll($("#result"));
    $("html, body").animate({ scrollTop: $("#result").offset().top }, 250);
  });

  var oldViaURL = getUrlParameter("old") || "";
  var newViaURL = getUrlParameter("new") || "";
  debugger;
  if (oldViaURL || newViaURL) {
    $("#diff-old").val("Updated " + oldViaURL);
    $("#diff-new").val("Updated " + newViaURL);
  }
});

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split("&"),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split("=");

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined
        ? true
        : decodeURIComponent(sParameterName[1]);
    }
  }
  return false;
};
