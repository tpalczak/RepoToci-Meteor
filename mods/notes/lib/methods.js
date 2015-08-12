Meteor.methods({
    addNewNote: function (title, content) {
        check(title, String);
        check(content, String);

        if (!this.userId) {
            throw new Meteor.Error('403', 'Not logged in');
        }

        Notes.insert({
            title: title,
            content: content,
            createdAt: new Date(),
            authorId: this.userId
        });

    }
});