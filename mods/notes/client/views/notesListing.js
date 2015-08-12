Template.notesListing.helpers({
    notes: function () {
        return Notes.find({});
    }
});