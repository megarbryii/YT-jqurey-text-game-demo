//Global variables
var currentRoom = "Grass Menagerie";
var commands = ['start', 'go', 'look', 'take', 'inventory', 'help'];
var inventory = [];

//Commands
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
        case 'start':
            startGame();
            break;
        case 'take':
            var item = input.split(' ')[1];
            addItem(item);
            break;
        case 'look':
            var obname = input.split(' ')[1];
            lookAt(obname);
            break;
        default:
            $('#game-text').append('<p>Invalid command!</p>');
            break;
    }
}

//Starting game
function startGame() {
    currentRoom = 'Grass Menagerie';
    $('#game-text').append('<h3>' + Rooms[currentRoom].name + '</h3>');
    $('#game-text').append("<p>" + Rooms[currentRoom].desc + "</p>");
    inventory = [];
}

//Changing rooms
function changeRoom(dir) {
    if(Rooms[currentRoom].directions[dir] !== undefined) {
        currentRoom = Rooms[currentRoom].directions[dir];
        $('#game-text').append('<h3>' + Rooms[currentRoom].name + '</h3>');
        $('#game-text').append('<p>' + Rooms[currentRoom].desc + '</p>');
    } else {
        $('#game-text').append("<p>You cannot go that way!</p>");
    }
}

//Show available commands
function showHelp() {
    $('#game-text').append('<p>Here are the possible <b>commands</b>: ');
    $('#game-text').append('<p><ul>');
    for(var i = 0; i < commands.length; i++) {
        $('#game-text').append('<li>' + commands[i] + '</li>');
    }
    $('#game-text').append('</ul></p>');
}

//Adding item to inventory
function addItem(item) {
    if(Rooms[currentRoom].items !== undefined) {
        inventory.push(item);
        $('#game-text').append('<p>' + item + ' has been added to your inventory');
    } else {
        $('#game-text').append('<p>There is nothing to pick up!<p>');
    }
}

//Showing what is in player's inventory
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

//Looking at an object
function lookAt(obname) {
    if(obname === '') {
        $('#game-text').append('<p>You need to do more than just stare at the walls....<p>');
    }
    
    if(obname === 'room') {
        $('#game-text').append("<p>" + Rooms[currentRoom].desc + "</p>");
        return;
    }

    if(Rooms[currentRoom].items !== undefined) {
        $('#game-text').append('<p>' + Rooms[currentRoom].items.desc + '<p>');
    } else {
        $('#game-text').append('<p>Nothing to see here!<p>');
    }
}

//Using an object

//Document code
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