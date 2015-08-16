Meteor.publish('notesListing', function () {
    Notes.find()
    return Notes.find({authorId:this.userId}, {
        fields: {
            title: 1
        }
    });
});
Meteor.publish('notesView', function (id) {
    check(id, String);
    //check(pass, String);
    //if (Notes.find({_id: id}).fetch()[0].pass === pass)
    return Notes.find({_id: id})
});
Meteor.publish('notesUpdate', function (id) {
    check(id, String);
    //check(pass, String);
    //if (Notes.find({_id: id}).fetch()[0].pass === pass)
    return Notes.find({_id: id})
});