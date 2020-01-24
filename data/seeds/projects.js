exports.seed = function(knex) {
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Rule the world",
          description: "Secret plan that no one knows",
          completed: false
        },
        {
          name: "Get rich quick",
          description: "Invest in ...",
          completed: false
        },
        {
          name: "Become a web developer",
          description: "Learn how to use migrations and seeds",
          completed: true
        }
      ]);
    });
};
