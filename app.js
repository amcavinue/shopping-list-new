$(function() {
    var state = {
        'apples': false,
        'oranges': false,
        'milk': true,
        'bread': false
    };

    // Watch form submission.
    $('#js-shopping-list-form').submit(function(e) {
        e.preventDefault();
        var name = $('input:first').val().trim();

        if (state.hasOwnProperty(name)) {
            alert('That item is already in the list!');
        } else if (name === ''){
            alert('Can\'t add empty items to the list.');
        } else {
            state[name] = false;
            renderItem(name);
        }

        $('input:first').val('');
    });

    // Watch check buttons.
    $('ul').on('click', "button:contains('check')", function(e) {
        e.preventDefault();
        var shoppingItem = $(this).closest('.shopping-item-controls').siblings('.shopping-item')[0],
            name = $(shoppingItem).text().trim();

        state[name] = !state[name];
        $(this).closest('div').siblings('.shopping-item').toggleClass('shopping-item__checked');
    });

    // Watch delete buttons.
    $('ul').on('click', "button:contains('delete')", function(e) {
        e.preventDefault();
        var shoppingItem = $(this).closest('.shopping-item-controls').siblings('.shopping-item')[0],
            name = $(shoppingItem).text().trim();

        delete state[name];
        $(this).closest('li').remove();
    });
});

function renderItem(name) {
    $('.shopping-list').append(
    '<li>' +
         '<span class="shopping-item">' + name + '</span>' +
         '<div class="shopping-item-controls">' +
             '<button class="shopping-item-toggle">' +
                 '<span class="button-label">check</span>' +
             '</button>' +
             '<button class="shopping-item-delete">' +
                 '<span class="button-label">delete</span>' +
            '</button>' +
        '</div>' +
    '</li>'
     );
}
