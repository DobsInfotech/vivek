var Todo = require("../model/schema");
const HTTP = require("../../constant/response.constant");

var path = require("path");
const fs = require("fs");

class class1 {
  static a = async (req, res) => {
    try {
      var OriginalData = await Todo.find({ App: req.params.id });
      if (OriginalData.length == 0) {
        var Senddata = [];
      } else {
        var Senddata = OriginalData[0].Data;
      }
      res.send(Senddata);
    } catch (e) {
      console.log(err);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };

  static b = async (req, res) => {
    try {
      var a = await Todo.find({ App: req.params.id });
      if (a.length == 1) {
        await Todo.find({ App: req.params.id }).deleteMany();
      }
      var OriginalData = new Todo({
        App: `${req.params.id}`,
        Data: [req.body],
      });
      await OriginalData.save();
      res.send("data added");
    } catch (err) {
      console.log(err);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
}

module.exports = { class1 };
