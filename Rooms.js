var Rooms = {
    
        'Grass Menagerie': {
            'desc': 'The room is covered in a variety of plants, vines, and other green flora, and seems to be emitting an aroma of freshly cut grass.  You see doors to the <b>east</b> and to the <b>south</b>.',
            'directions': {
                'east': 'Pale Moonlight',
                'south': 'Summer Palisade'
            }
        },
        'Pale Moonlight': {
            'desc': 'The room has a variety of rocks in all shapes and sizes scattered across the floor, and seems to bathed under the light of the full moon.  You see doors to the <b>west</b>, to the <b>south</b>, and to the <b>east</b>.',
            'directions': {
                'west': 'Grass Menagerie',
                'south': 'Sugary Pink',
                'east': 'White Room of Solitude'
            }
        },
        'White Room of Solitude': {
            'desc': 'The room seems to be mostly empty except for a small white couch and has black curtains, but has no windows, and you seems to be able to get whiffs of funeray incense.  You see doors to the <b>west</b> and to the <b>south</b>.',
            'directions': {
                'west': 'Pale Moonlight',
                'south': 'Purple Haze'
            }
        },
        'Summer Palisade': {
            'desc': 'The room seems to be decked out for a summer party, but there is no door and all the outdoor furniture is yellow.  You can smell a mixture of a pool, lemonade, and sweet tea.  You see doors to the <b>north</b>, to the <b>east</b>, and to the <b>south</b>.',
            'directions': {
                'north': 'Grass Menagerie',
                'east': 'Sugary Pink',
                'south': 'Brunch Nook'
            }
        },
        'Sugary Pink': {
            'desc': 'The room seems to be nothing but solid, fluffy pink clouds that you can stand on, and emit a scent between bubble gum and cotton candy.  You see doors to the <b>north</b>, to the <b>east</b>, to the <b>south</b>, and to the <b>west</b>.',
            'directions': {
                'north': 'Pale Moonlight',
                'east': 'Purple Haze',
                'south': 'Red Gardens',
                'west': 'Summer Palisade'
            }
        },
        'Purple Haze': {
            'desc': 'The room is covered in what appears to be a haze swiriling around in different shades of purples and violets, and seems to give you a weird sense of happiness.  You can barely see doors to the <b>north</b>, to the <b>west</b>, and to the <b>south</b>.',
            'directions': {
                'north': 'White Room of Solitude',
                'west': 'Sugary Pink',
                'south': 'Eternal Darkness'
            }
        },
        'Brunch Nook': {
            'desc': 'The room looks like a small nook to have brunch in, with all the furniture, tablecloths, and napkins in orange.  You can smell bacon, eggs, pancakes, ham, and mimosas, and it seems to be making you hungry.  You see doors to the <b>north</b> and to the <b>east</b>.',
            'directions': {
                'north': 'Summer Palisade',
                'east': 'Red Gardens'
            }
        },
        'Red Gardens': {
            'desc': 'The rooms seems to be nothing but a large flower garden, but all the varieties of flowers seem to only have scarlet petals, and has an intoxicating aroma of carnations, roses, and tulips.  You see doors to the <b>west</b>, to the <b>north</b>, and to the <b>east</b>.',
            'directions': {
                'north': 'Sugary Pink',
                'west': 'Brunch Nook',
                'east': 'Eternal Darkness'
            },
            'items': {
                'paint': 'A can of black paint'
            }
        },
        'Eternal Darkness': {
            'desc': 'The room seems to be completely covered in pitch black darkness, save for the the doors to the <b>west</b>, the <b>north</b>, and the <b>east</b>, which seem to be illuminated by hanging lights above the doors.',
            'directions': {
                'west': 'Red Gardens',
                'north': 'Purple Haze',
                'east': 'End of the Line'
            }
        },
        'End of the Line': {
            'desc': 'You hurredly rush out the last door, and you seem to be surrounded by swirling mists.  The next thing you know you start to feel dizzy and sleepy, and end up laying on the floor and falling unconscious.  You happen to wake up on your couch in your nice home and discovered it was all just a dream...'
        }
    }