function groutscalculate(){

	var max_depth = 80;
	var min_depth = 3;

	var invalid = false;

    jQuery('#inp_TileDepth').attr({
        "max": max_depth,
        "min": min_depth
    });	

    var depth = parseInt(jQuery('#inp_TileDepth').val());

    if (typeof depth !== 'undefined' && depth != '') {
        //now check if we have entered a value above the max depth
        if (typeof max_depth !== 'undefined' && depth > max_depth) {
            console.log('Please note that the maximum value is ' + max_depth);
            jQuery('#errorLevelling').html('Please note that the maximum value is ' + max_depth);
            jQuery('#errorLevelling').html('Please note that the minimum value is ' + max_depth);
            invalid = true;
        } else {
        	jQuery('#errorLevelling').html('');
        }

        //or below the min depth required
        if (typeof min_depth !== 'undefined' &&  depth < min_depth) {
        	console.log('Please note that the minimum value is ' + min_depth);
            jQuery('#errorLevelling').html('Please note that the minimum value is ' + min_depth);
            invalid = true;
        } else {
        	jQuery('#errorLevelling').html('');
        }

		var prdcoverage = jQuery('#prdcoverage').val();
		var prdpacksize = jQuery('#prdpacksize').val();
		var projectArea = jQuery('#projectArea').val();
		var inp_TileDepth = jQuery('#inp_TileDepth').val();

		// var calc_ResultKg = projectArea * prdcoverage;;
		// var calc_NoBags = projectArea / calc_ResultKg;

		// var kgRequired = Math.ceil(projectArea * prdcoverage);
	 //    var unitsRequired = Math.ceil((projectArea * prdcoverage / prdpacksize));	

		var levellingRequirement = (prdcoverage * inp_TileDepth * projectArea);
	    var levellingBagsRequired = (levellingRequirement / prdpacksize);
	    console.log(levellingBagsRequired);
	    if (levellingBagsRequired - Math.floor(levellingBagsRequired) < 0.01){
	        levellingBagsRequired = Math.floor(levellingBagsRequired);
	    } else {
	        levellingBagsRequired = Math.ceil(levellingBagsRequired);
	    }

	    jQuery('.resultpacksize').text(prdpacksize);

		if(levellingBagsRequired){
			jQuery('#levellingBagsRequired').text(levellingBagsRequired);
		}

		if (isNaN(inp_TileDepth) || isNaN(projectArea) || invalid || projectArea==0) {
            jQuery('#LevellingResults').css('display', 'none');
        } else {
            jQuery('#LevellingResults').css('display', 'block');
        }		

	}
}
jQuery( "#yourareacalculate" ).click(function() {
	groutscalculate();
	return false;
});