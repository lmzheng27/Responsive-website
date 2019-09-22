$(function(){
	$(".navbar-toggle").blur(function(event){
		var screensize = window.innerWidth;
		if (screensize < 768){
			$("#navbarSupportedContent").collapse("hide");
		}
	});
});

(function(global){
	var dc = {};
	var homeHtml = "snippets/homepage-snippet.html";
	var menuHtml = "snippets/menu-snippet.html";
	var singleCategotyHtml = 
	"snippets/single-category-snippet.html";

	var insertHtml = function (selector, html) {
	  var targetElem = document.querySelector(selector);
	  targetElem.innerHTML = html;
	};

	var showLoading = function (selector) {
	  var html = "<div class='text-center'>";
	  html += "<img src='images/ajax-loader.gif'></div>";
	  insertHtml(selector, html);
	};

	showLoading("#main-content");
	$ajaxUtils.sendGetRequest(
	  homeHtml,
	  function (responseText) {
	    document.querySelector("#main-content")
	      .innerHTML = responseText;
	  },
	  false);

	dc.loadMenuCategories = function () {
	  showLoading("#main-content");
	  $ajaxUtils.sendGetRequest(
	    menuHtml,
	    function (responseText) {
	      document.querySelector("#main-content")
	        .innerHTML = responseText;
	    },
	    false);
	};

	dc.loadSingleCategory = function () {
	  showLoading("#main-content");
	  $ajaxUtils.sendGetRequest(
	    singleCategotyHtml,
	    function (responseText) {
	      document.querySelector("#main-content")
	        .innerHTML = responseText;
	    },
	    false);
	};
	global.$dc = dc;

})(window);



