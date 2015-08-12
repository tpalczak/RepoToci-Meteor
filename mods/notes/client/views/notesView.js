Template.notesView.onCreated(function () {
    this.autorun(function () {
        Meteor.subscribe('notesView', FlowRouter.getParam('id'));
    });
});


Template.notesView.helpers({
    note: function () {
        var noteId = FlowRouter.getParam('id');
        return Notes.findOne(noteId);
    }
});

Template.notesView.events({
    'click .js-delete-note': function () {
        var noteId = FlowRouter.getParam('id');
        Notes.remove({_id: noteId});
    }
});