const { db } = require("../../config/db/db");
const Beds = db.beds;
const Op = db.Sequelize.Op;


// Create and Save a new Beds
exports.create = (req, res) => {
  /*tutorial method
   // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save Tutorial in the database
  Tutorial.create(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
    */
};

// Retrieve all Beds from the database.
exports.findAll = (req, res) => {
  /*tutorial method
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Tutorial.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
    */
};

// Find a single Bedswith an id
exports.findOne = (req, res) => {
  /*tutorial method
  const id = req.params.id;
  
    Tutorial.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  */
};

// Update a Beds by the id in the request
exports.watered = async (req, res) => {
  const bedId = req.body.id;
  console.log('req.body: ', req.body);
  var bed = await Beds.findByPk(bedId);
  Beds.update({ lastWatered: Date.now() }, { where: { id: bedId } })
    .then(() => {
      response = { message: 'watered!' };
      console.log(response);
      res.status(201).json(response);
    }
    )
    .catch(

    );

};

exports.update = (req, res) => {

  /*tutorial method
  const id = req.params.id;
  
    Tutorial.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
      */

};

// Delete a Bedswith the specified id in the request
exports.delete = (req, res) => {
  /*tutorial method
  const id = req.params.id;
  
    Tutorial.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  */

};

// Delete all Beds from the database.
exports.deleteAll = (req, res) => {
  /*tutorial method
  Tutorial.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Tutorials were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });
  */

};

// Find all published Beds
exports.findAllPublished = (req, res) => {
  /*tutorial method
  Tutorial.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  */

};