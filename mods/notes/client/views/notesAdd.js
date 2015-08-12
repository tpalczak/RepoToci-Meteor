Template.notesAdd.events({
    'submit .js-add-note-form': function (event, tmpl) {
        event.preventDefault();

        var title = tmpl.$('[name="title"]').val();
        var content = tmpl.$('[name="content"]').val();

        Meteor.call('addNewNote', title, content, function (err) {
            if (err) {
                console.error(err);
            } else {
                FlowRouter.go('/notes');
            }
        });
    }
});

