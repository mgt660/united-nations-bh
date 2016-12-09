$(document).ready(function() {

$('.collapse').hide();
      $('#model').click(function() {
        $('#collapse1').slideToggle();
        });
		
  $( "#home" ).click( function() {
    window.location = "index.html";
});

 $( "#recs" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/integration.html" );
    $( "#refs" ).load( "reports/reference.html" );
});

 $( "#exec" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/executive.html" );
	$( "#refs" ).load( "reports/reference.html" );
});

$( "#analysis" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
	$( "#refs").hide();
    $( "#docs" ).load( "es/map.html" );
});

$( "#alg" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/algeria.html" );
	$( "#refs" ).load( "reports/reference.html" );
});

$( "#col" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/colombia.html" );
	$( "#refs" ).load( "reports/reference.html" );
});

$( "#ind" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/indonesia.html" );
	$( "#refs" ).load( "reports/reference.html" );
});
$( "#mal" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/mali.html" );
	$( "#refs" ).load( "reports/reference.html" );
});
$( "#nig" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/nigeria-one.html" );
	 $( "#docs1" ).load( "reports/nigeria-two.html" );
	 $( "#docs2" ).load( "reports/nigeria-three.html" );
	$( "#refs" ).load( "reports/reference.html" );
});
$( "#som" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/somalia.html" );
	$( "#refs" ).load( "reports/reference.html" );
});
$( "#sou" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/south-africa.html" );
	$( "#refs" ).load( "reports/reference.html" );
});
$( "#sri" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/sri-lanka.html" );
	$( "#refs" ).load( "reports/reference.html" );
});
$( "#osc" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/nigeria-one.html" );
	$( "#refs" ).load( "reports/reference.html" );
});
$( "#del" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/nigeria-three.html" );
	$( "#refs" ).load( "reports/reference.html" );
});
$( "#cli" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/nigeria-two.html" );
	$( "#refs" ).load( "reports/reference.html" );
});
$( "#alg2" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/algeria.html" );
	$( "#refs" ).load( "reports/reference.html" );
});

$( "#col2" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/colombia.html" );
	$( "#refs" ).load( "reports/reference.html" );
});

$( "#ind2" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/indonesia.html" );
	$( "#refs" ).load( "reports/reference.html" );
});
$( "#mal2" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/mali.html" );
	$( "#refs" ).load( "reports/reference.html" );
});
$( "#som2" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/somalia.html" );
	$( "#refs" ).load( "reports/reference.html" );
});
$( "#sou2" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/south-africa.html" );
	$( "#refs" ).load( "reports/reference.html" );
});
$( "#sri2" ).click( function(e) {
    e.preventDefault();
	$( "#figures").hide();
	$( "#des").hide();
    $( "#docs" ).load( "reports/sri-lanka.html" );
	$( "#refs" ).load( "reports/reference.html" );
});
});