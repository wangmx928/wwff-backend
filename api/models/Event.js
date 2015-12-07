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
                eventStartTime: 1448724006,
                chapter: chapter,
                organizer: organizers[0]
            },
            {
                eventName: 'Getting Paid',
                eventStartTime: 1448567100,
                chapter: chapter,
                organizer: organizers[0]
            },
            {
                eventName: 'Walking the Dog',
                eventStartTime: 1448638234,
                chapter: chapter,
                organizer: organizers[0]
            },
            {
                eventName: 'Shooting Some Hoops',
                eventStartTime: 1448726573,
                chapter: chapter,
                organizer: organizers[0]
            }
        ], function(err, events) {
            cb(events);
        });
    }
};
