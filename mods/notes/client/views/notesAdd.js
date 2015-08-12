Template.notesAdd.events({
    'submit .js-add-note-form': function (event, tmpl) {
        event.preventDefault();

        var title = tmpl.$('[name="title"]').val();
        var content = tmpl.$('[name="content"]').val();

        Notes.insert({
            title: title,
            content: content
        }, function (err) {
            if (!err) {
                FlowRouter.go('/notes');
            }
        })
    }
});

