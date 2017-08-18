var OSViewer = OpenSeadragon({
	id: "openseadragon1",
	prefixUrl: "bower_components/openseadragon/built-openseadragon/openseadragon/images/",
	showZoomControl: false,
	showHomeControl: false,
	showFullPageControl: false,
	showSequenceControl: false,

	zoomInButton: "os_zoomIn",
	zoomOutButton: "os_zoomOut",
	homeButton: "os_home"
});

// associative list of map names to their files
var mapOptions = {
	"DeltaStation": "deepzoom/deltastation.xml",
	"OmegaStation": "deepzoom/omegastation.xml",
	"SEV Torch": "deepzoom/torch_multi.xml"
}

var getUrlParameter = function getUrlParameter(sParam) {
	var sPageUrl = decodeURIComponent(window.location.search.substring(1));
	var sUrlVariables = sPageUrl.split("&");
	
	for (var i = 0; i < sUrlVariables.length; i++) {
		var sParameterName = sUrlVariables[i].split("=");
		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? false : sParameterName[1];
		}
	}
}

$(document).ready(function () {

	var newHtml = "";
	for (var option in mapOptions) {
		newHtml += `<div id="selectMapOption" class="unselectable" onclick="openMap('${option}');">${option}</div>`;
	}

	$("#openNewMapDropdown").html(newHtml);

	$("#openNewMap").click(function () {
		if($("#openNewMapDropdown").hasClass("unhidden")) {
			$("#openNewMapDropdown").removeClass("unhidden");
		} else {
			$("#openNewMapDropdown").addClass("unhidden");
		}
	});

	var mapUrl = getUrlParameter("map");
	if (mapUrl && mapOptions.hasOwnProperty(mapUrl)) {
		openMap(mapUrl);
	}

});


function openMap(option) {
	OSViewer.open(mapOptions[option]);
	$("#openNewMapDropdown").removeClass("unhidden");
}