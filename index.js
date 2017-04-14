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
	"OmegaStation": "deepzoom/omegastation.xml",
	"SEV Torch": "deepzoom/torch_multi.xml"
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
});


function openMap(option) {
	OSViewer.open(mapOptions[option]);
	$("#openNewMapDropdown").removeClass("unhidden");
}