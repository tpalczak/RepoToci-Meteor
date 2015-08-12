Meteor.publish('notesListing', function () {
    return Notes.find({}, {
        fields: {
            title: 1
        }
    });
});
Meteor.publish('notesView', function (id) {
    check(id, String);
    return Notes.find({_id: id});
});