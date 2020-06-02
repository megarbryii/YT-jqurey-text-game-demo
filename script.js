var currentRoom = "Grass Menagerie";

function changeRoom(dir) {
    if(Rooms[currentRoom].directions[dir] !== undefined) {
        currentRoom = Rooms[currentRoom].directions[dir];
        $('#game-text').append("<p>" + Rooms[currentRoom].desc + "</p>");
    } else {
        $('#game-text').append("<p>You cannot go that way!</p>");
    }
}

$(document).ready(function() {
    $('#game-text').append("<p>" + Rooms[currentRoom].desc + "</p>");

    $(document).keypress(function(key) {
        if(key.which === 13 && $('#user-input').is(':focus')) {
            var value = $('#user-input').val().toLowerCase();
            switch (value) {
                case "north":
                    changeRoom('north');
                    break;
                case 'south':
                    changeRoom('south');
                    break;
                case 'east':
                    changeRoom('east');
                    break;
                case 'west':
                    changeRoom('west');
                    break;
                default:
                    alert('That direction is not available');
                    break;
            }
        }
    });
});