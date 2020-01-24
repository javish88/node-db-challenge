const express = require("express");

const Projects = require("./projects-model");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error getting projects" });
    });
});

router.post("/", (req, res) => {
  const data = req.body;

  Projects.addProject(data)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error adding project" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Projects.getById(id)
    .then(project => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ message: "Cant find project with that ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error finding project" });
    });
});

router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;

  Projects.getTasks(id)
    .then(tasks => {
      if (tasks.length) {
        res.status(200).json(tasks);
      } else {
        res.status(404).json({ message: "No tasks found" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error retrieving tasks" });
    });
});

router.post("/:id/tasks", (req, res) => {
  const data = req.body;
  Projects.addTask(data)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error adding task" });
    });
});

router.get("/:id/resources", (req, res) => {
  const { id } = req.params;

  Projects.getResources(id)
    .then(resources => {
      if (resources.length) {
        res.status(200).json(resources);
      } else {
        res.status(404).json({ message: "Add some resources" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error getting resources" });
    });
});

router.post("/:id/resources", (req, res) => {
  const data = req.body;
  Projects.addResources(data)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error adding resource" });
    });
});

module.exports = router;
