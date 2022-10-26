const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://expressTut:expressTut@ac-vru9dxm-shard-00-00.cuqcdi9.mongodb.net:27017,ac-vru9dxm-shard-00-01.cuqcdi9.mongodb.net:27017,ac-vru9dxm-shard-00-02.cuqcdi9.mongodb.net:27017/coalesce?ssl=true&replicaSet=atlas-dnxphj-shard-0&authSource=admin&retryWrites=true&w=majority", {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,  //none of this is necessary after update.
      // useFindAndModify: false,
      // useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
