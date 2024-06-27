function boardscalculate(){
    var boardLength = jQuery('#inp_BoardLength').val();
    var boardBreadth = jQuery('#inp_BoardBreadth').val();
    var projectArea = jQuery('#projectArea').val();

    boardLength = parseFloat(boardLength) / 1000;
    boardBreadth = parseFloat(boardBreadth) / 1000;
    projectArea = parseFloat(projectArea);

    var boardArea = boardBreadth * boardLength;
    var totalBoards = Math.ceil(projectArea / boardArea);

    jQuery('#resultnoboards').text(totalBoards);
}
jQuery( "#yourareacalculate" ).click(function() {
    boardscalculate();
    return false;
});