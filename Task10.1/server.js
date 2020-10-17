const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const DataSchema = require("./models/Data");
const { request, response } = require("express");
const cors = require("cors")
const express = require("express")
const app = express()
app.use(cors())
mongoose.connect('mongodb://localhost:27017/iCrowdTaskDB', { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.get ('/', (req, res)=>{
    res.send('<p>("Server is running")</p>')
})
app.post('/', (req,res)=>
  {
      const data = new DataSchema({
            Type: req.body.Type,
            TitleOfTask: req.body.TitleOfTask,
            DescriptionOfTask: req.body.DescriptionOfTask,
            DateExpiryTask: req.body.DateExpiryTask,
            Master: req.body.Master,
            RewardOfTask: req.body.RewardOfTask,
            NumberOfWorkers: req.body.NumberOfWorkers
      })
      data.save().then((res) => {
          console.log(data)
      })
      .catch((err) => console.log(err));
  })


let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}

app.listen(port, (req, res) => {
    console.log("Running in port 8000")
})