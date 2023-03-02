
$('#submit').click(function(evt) {
    evt.preventDefault();
    let $titleInt = $('input').eq(0).val();
    let $ratingInt = $('input').eq(1).val();

    let $newRow = $('<tr class="cells"></tr>');
    $newRow.append($('<td class="cells"></td>').text($titleInt));
    $newRow.append($('<td class="cells"></td>').text($ratingInt)).append('<button class="removeBtn">remove</button>');
    $('table').append($newRow);

    $('.removeBtn').on('click', function() {
        $(this).parent().remove();
    })
})



