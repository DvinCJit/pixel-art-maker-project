// When sizePicker is submitted by the user, call makeGrid()
function makeGrid(table, rows, columns) {
    for(var i = 0; i < rows; i++) {
        var row = $('<tr>');

        for(var j = 0; j < columns; j++) {
            row.append('<td>');
        }

        table.append(row);
    }
}

$('#sizePicker').submit(function(target) {
    var table = $('#pixel_canvas');
    var rows = $('#input_height').val();
    var columns = $('#input_width').val();

    $('#pixel_canvas').empty();
    makeGrid(table, rows, columns);

    target.preventDefault();
});

$('#pixel_canvas').on('click', 'td', function() {
    var color = $('#colorPicker').val();
    $(this).css('background-color', color);
});
