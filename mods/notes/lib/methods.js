Meteor.methods({
    addNewNote: function (title, content, pass) {
        check(title, String);
        check(content, String);
        check(pass, String);

        if (!this.userId) {
            throw new Meteor.Error('403', 'Not logged in');
        }

        Notes.insert({
            title: title,
            content: content,
            createdAt: new Date(),
            authorId: this.userId,
            pass: pass,
        });

    }

});
Meteor.methods({
    updateNote: function (title, content, pass, id) {
        check(title, String);
        check(content, String);
        check(pass, String);
        check (id, String);

        if (!this.userId) {
            throw new Meteor.Error('403', 'Not logged in');
        }

        Notes.update({_id: id},{
        $set:{
            title:title,
            content:content,
            pass:pass

            }

        });

    }

});