// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

//DOM Ready Handler

$(function() {

//JSON data
		var $myData = {
		    "pageTitle": "Company Image List",

		    "pageHeader": "Company Items",

		    "pageItems": [

		        {
		            "itemTitle"         : "Agility Chart",
		            "itemDescription"   : "A graphical depiction of how agile we are.",
		            "itemIcon"          : "images/mso3.jpg",
		            "itemUrl"           : "http://www.yahoo.com/"

		        },
		        {
		            "itemTitle"         : "Attack Chart",
		            "itemDescription"   : "How we approach the marketplace.",
		            "itemIcon"          : "images/attack_chart.png",
		            "itemUrl"           : "http://www.facebook.com/"
		        },
		        {
		            "itemTitle"         : "Network Chart",
		            "itemDescription"   : "View our connectivity products.",
		            "itemIcon"          : "images/wtp2.jpg",
		            "itemUrl"           : "http://www.twitter.com/"
		        },
		        {
		            "itemTitle"         : "Network Dialog",
		            "itemDescription"   : "A diagram showing several network layers.",
		            "itemIcon"          : "images/network_diagram.png",
		            "itemUrl"           : "http://www.netflix.com/"
		        },
		        {
		            "itemTitle"         : "Sample Bubble",
		            "itemDescription"   : "An example of a bubble chart.",
		            "itemIcon"          : "images/data-center.jpg",
		            "itemUrl"           : "http://www.msn.com/" 
		        },
		        {
		            "itemTitle"         : "Sample Bubble",
		            "itemDescription"   : "An example of a bubble chart.",
		            "itemIcon"          : "http://www.cyaninc.com/static/cms_files/img/software_chart.png",
		            "itemUrl"           : "http://www.cyaninc.com/en/about-us/"
		        }]
		};


	   // JSON Data Handler

	    $("title").html($myData.pageTitle);
	    $("#myData").append("<h1>" + $myData.pageHeader + "</h1>");
	    $.each($myData.pageItems, function(i,item) { 
	        
	        var $a = $("<a>", {id: "item" + i, href: item.itemUrl, class: "callout", target: "_blank"});
	        var $img = $("<img>", {src: item.itemIcon});

	        $("#myData").append($a);
	        $("#myData a:last-child").append($img);
	        $("#myData a:last-child img").after("<div class='title'><h2>" + item.itemTitle + "</h2></div>");
	        $("#myData a:last-child .title").append("<div class='info'><h3>" + item.itemTitle + "</h3><p>" + item.itemDescription + "</p></div>");

	        //zero out margin for last callout in row (3 to a row)
	        if ((i + 1) % 3 == 0) {
	                $("#myData a:last-child").addClass("last");
	        }                                 
	    });


      // mouseenter/mouseleave event delegation on the callout
	  $("#myData").on("mouseenter", "a.callout", function() {
	  		$(this).find("img").addClass("highlight");
	  		$(this).find("div.title").addClass("highlight");
	  		$(this).find("div.info").show();
	  });
	  $("#myData").on("mouseleave", "a.callout", function() {
	  		$(this).find("img").removeClass("highlight");
	  	    $(this).find("div.title").removeClass("highlight");
	  	    $(this).find("div.info").hide();

	  });
 
});