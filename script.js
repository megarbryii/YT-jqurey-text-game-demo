var currentRoom = "Grass Menagerie";
var commands = ['go', 'pickup', 'look', 'inventory'];
var inventory = ['sword'];

function changeRoom(dir) {
    if(Rooms[currentRoom].directions[dir] !== undefined) {
        currentRoom = Rooms[currentRoom].directions[dir];
        $('#game-text').append("<p>" + Rooms[currentRoom].desc + "</p>");
    } else {
        $('#game-text').append("<p>You cannot go that way!</p>");
    }
}

function playerInput(input) {
    var command = input.split(' ')[0];
    switch (command) {
        case "go":
            var dir = input.split(' ')[1];
            changeRoom(dir);
            break;
        case 'help':
            showHelp();
            break;
        case 'inventory':
            showInventory();
            break;
        default:
            $('#game-text').append('<p>Invalid command!</p>');
            break;
    }
}

function showHelp() {
    $('#game-text').append('<p>Here are the possible <b>commands</b>: ');
    $('#game-text').append('<p><ul>');
    for(var i = 0; i < commands.length; i++) {
        $('#game-text').append('<li>' + commands[i] + '</li>');
    }
    $('#game-text').append('</ul></p>');
}

function showInventory() {
    if(inventory.length === 0) {
        $('#game-text').append('<p>You are not carrying anything<p>');
        return;
    }
    $('#game-text').append('<p>Here is your <b>inventory</b>: ');
    $('#game-text').append('<p><ul>');
    for(var i = 0; i < inventory.length; i++) {
        $('#game-text').append('<li>' + inventory[i] + '</li>');
    }
    $('#game-text').append('</ul></p>');
}

$(document).ready(function() {
    $('#game-text').append("<p>" + Rooms[currentRoom].desc + "</p>");

    $(document).keypress(function(key) {
        if(key.which === 13 && $('#user-input').is(':focus')) {
            var value = $('#user-input').val().toLowerCase();
            $('#user-input').val('');
            playerInput(value);
        }
    });
});