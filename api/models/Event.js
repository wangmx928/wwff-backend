/**
* Event.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    attributes: {
        eventName: {
            type: 'string'
        },

        eventStartTime: {
            type: 'integer'
        },

        eventEndTime: {
            type: 'datetime'
        },

        chapter: {
            model: 'chapter'
        },
        organizer: {
            model: 'user'
        }
    },

    createTestEvents: function(organizers, chapter, cb) {
        Event.create([
            {
                eventName: 'Chillin With Bros',
                eventStartTime: 1448641800000,
                chapter: chapter,
                organizer: organizers[0]
            },
            {
                eventName: 'Getting Paid',
                chapter: chapter,
                organizer: organizers[0]
            },
            {
                eventName: 'Walking the Dog',
                chapter: chapter,
                organizer: organizers[0]
            },
            {
                eventName: 'Shooting Some Hoops',
                chapter: chapter,
                organizer: organizers[0]
            }
        ], function(err, events) {
            cb(events);
        });
    }
};
