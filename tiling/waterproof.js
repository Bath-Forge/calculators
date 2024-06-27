function waterproofcalculate() {
    var tileLocation = jQuery('#tileLocation').val();
    var projectArea = jQuery('#projectArea').val();

    projectArea = parseFloat(projectArea);

    var thickness;

    if (tileLocation === 'Wall') {
        thickness = '6';
    } else {
        thickness = '3';
    }

    var result = Math.ceil(projectArea / thickness);

    jQuery('#resultnobags').text(result);
}
jQuery( "#calculate" ).click(function() {
    waterproofcalculate();
    return false;
});