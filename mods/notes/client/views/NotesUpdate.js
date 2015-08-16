
Template.notesUpdate.onCreated(function () {
    this.autorun(function () {
        Meteor.subscribe('notesUpdate', FlowRouter.getParam('id'));
    });
});

Template.notesUpdate.helpers({
    note: function () {
        var noteId = FlowRouter.getParam('id');
        return Notes.findOne(noteId);
    }

});

Template.notesUpdate.events({
    'submit .js-add-note-form': function (event, tmpl) {
        event.preventDefault();
        var title = tmpl.$('[name="title"]').val();
        var content = tmpl.$('[name="content"]').val();
        var pass = tmpl.$('[name="password"]').val();

        Meteor.call('updateNote', title, content, pass,FlowRouter.getParam('id'),function (err) {
            if (err) {
                console.error(err);
            } else {
                FlowRouter.go('/notes');
            }
        });
    }
});