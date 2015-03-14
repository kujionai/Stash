Stashes = new Mongo.Collection("Stashes");

if (Meteor.isClient) {

  Template.body.helpers({
    stashes: function () {
      return Stashes.find({});
    }
  });

  Template.body.events({
    "submit": function (event) {
    // This function should be called when the new stash form is submitted (add class later).
      Users.insert({
        text: text,
        createdAt: new Date()
      });

      Stashes.insert({
        title: string,
        description: text,
        image: text,
        goal_total: integer,
        current_total: integer,
        createdAt: new Date(),
        ObjectId: []
      });

    },

  });
}