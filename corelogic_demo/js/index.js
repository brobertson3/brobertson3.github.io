
$(document).ready(function() {

	// Stack menu when collapsed
	$('#bs-example-navbar-collapse-1').on('show.bs.collapse', function() {
    	$('.nav-tabs').addClass('nav-stacked');
	});

	// Unstack menu when not collapsed
	$('#bs-example-navbar-collapse-1').on('hide.bs.collapse', function() {
    	$('.nav-tabs').removeClass('nav-stacked');
	});

	$("#data_service_icon").click( function () {
		$(".header_container").css("background-image", "url('img/banners/data-1500x663.jpg')");
		$("#header_card_1 img").attr("src", "img/pods/pod-flooddetermination.png");
		$("#header_card_2 img").attr("src", "img/pods/configurable-real-estate-data-report-pod.jpg");
		$("#header_card_3 img").attr("src", "img/pods/pod-registrycheck.png");
		$(".services_description h2").text("More than 3.5 billion property and financial records spanning more than 50 years.");
		$(".services_description button").removeClass("hidden");
	});

	$("#analytics_service_icon").click( function () {
		$(".header_container").css("background-image", "url('img/banners/analytics-1500x663.jpg')");
		$("#header_card_1 img").attr("src", "img/pods/pod-registrycheck.png");
		$("#header_card_2 img").attr("src", "img/pods/pod-teletrack.png");
		$("#header_card_3 img").attr("src", "img/pods/pod-loansafe-appraisal_over.png");
		$(".services_description h2").text("Borrower, loan and tenant scoring. Housing market trends and forecasts. Mortgage securities, valuation, and natural hazard risk modeling.");
		$(".services_description button").removeClass("hidden");
	});

	$("#services_service_icon").click( function () {
		$(".header_container").css("background-image", "url('img/banners/services-1500x663.jpg')");
		$("#header_card_1 img").attr("src", "img/pods/scra_homepage_pod_20150225.jpg");
		$("#header_card_2 img").attr("src", "img/pods/pod-propertytax.png");
		$("#header_card_3 img").attr("src", "img/pods/pod-loandocgeneration.png");
		$(".services_description h2").text("Data powered, rapidly deployed assistance from advisory consultation and due diligence to flood, tax and asset management support.");
		$(".services_description button").removeClass("hidden");
	});

	$("#technology_service_icon").click( function () {
		$(".header_container").css("background-image", "url('img/banners/technology-1500x663.jpg')");
		$("#header_card_1 img").attr("src", "img/pods/pod-intellimodssdmu.png");
		$("#header_card_2 img").attr("src", "img/pods/loancenter.jpg");
		$("#header_card_3 img").attr("src", "img/pods/pod-mls.png");
		$(".services_description h2").text("Workflow driven platforms for mortgage origination and servicing to consumer credit and multiple listing services.");
		$(".services_description button").removeClass("hidden");
	});
});