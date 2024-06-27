function groutscalculate(){
    var tileLength = jQuery('#inp_TileLength').val();
    var tileBreadth = jQuery('#inp_TileBreadth').val();
    var jointWidth = jQuery('#inp_TileWidth').val();
    var jointDepth = jQuery('#inp_TileDepth').val();
    var prdcoverage = 1.5;
    var prdpacksize = 2;
    var projectArea = jQuery('#projectArea').val();

    var tileJointDimensonsMulitplication = ((parseInt(tileLength) + parseInt(tileBreadth)) * jointWidth) * jointDepth;
    var groutCoverage = tileJointDimensonsMulitplication * prdcoverage;
    var groutCoverageDividedByTileDimensions = parseInt(groutCoverage) / (parseInt(tileLength) * parseInt(tileBreadth));
    var calc_ResultKg = prdpacksize / groutCoverageDividedByTileDimensions;
    var calc_NoBags = projectArea / calc_ResultKg;

    jQuery('.resultpacksize').text(prdpacksize);
    jQuery('#resultsquaremtr').text(calc_ResultKg.toFixed(0));

    if(projectArea){
        jQuery('#resultnobags').text(Math.ceil(calc_NoBags));
    }
}
jQuery( "#calculate" ).click(function() {
    groutscalculate();
    return false;
});	
jQuery( "#yourareacalculate" ).click(function() {
    groutscalculate();
    return false;
});