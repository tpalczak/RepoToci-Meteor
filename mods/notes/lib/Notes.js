Notes = new Mongo.Collection('notes');

Notes.allow({
    insert: function (userId, doc) {
        return true;
    },
    remove: function (userId, doc) {
        if (!doc.authorId) {
            return true;
        } else {
            return doc.authorId === userId;
        }
    }
});

Notes.deny({
    insert: function (userId, doc) {
        return !userId;
    }
});