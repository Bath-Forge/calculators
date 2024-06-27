function groutscalculate(){
	var prdcoverage = jQuery('#prdcoverage').val();
	var prdpacksize = jQuery('#prdpacksize').val();
	var projectArea = jQuery('#projectArea').val();
	var BedThickness = jQuery('#BedThickness').val();

	var AREACOVER = jQuery('#projectArea').val();
	var KGRequired = Math.round((prdcoverage * BedThickness * AREACOVER) * 10) / 10;	

	var Fc = prdcoverage * BedThickness * AREACOVER; 
	
	var UnitsRequired =((Fc / prdpacksize) * 10) / 10;
	
	jQuery('#LevellingResults').css('display', 'block');   
	if(UnitsRequired){
		jQuery('#resultnobags').text(Math.ceil(UnitsRequired));
		
	}
	console.log(UnitsRequired);
}
jQuery( "#yourareacalculate" ).click(function() {
	groutscalculate();
	return false;
});