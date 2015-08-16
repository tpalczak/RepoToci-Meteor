Template.notesAdd.events({
    'submit .js-add-note-form': function (event, tmpl) {
        event.preventDefault();
        var title = tmpl.$('[name="title"]').val();
        var content = tmpl.$('[name="content"]').val();
        var pass = tmpl.$('[name="password"]').val();

        Meteor.call('addNewNote', title, content, pass,function (err) {
            if (err) {
                console.error(err);
            } else {
                FlowRouter.go('/notes');
            }
        });
    }
});

