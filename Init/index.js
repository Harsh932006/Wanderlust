const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing");
// const { init } = require("../models/listing.js");

const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';
main()
.then((res) => {
    console.log("Connection Successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDb = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "69cd0a80eb981b956b4bb176",
    }));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

initDb();