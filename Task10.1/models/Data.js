const mongoose = require("mongoose")
const DataSchema = new mongoose.Schema(
    {
        Type: String,
        TitleOfTask: String,
        Master: String,
        RewardOfTask: String,
        DateExpiryTask: String,
        NumberOfWorkers: String,
        DescriptionOfTask: String,
        
    }
)

module.exports  =  mongoose.model("DataSchema", DataSchema)
