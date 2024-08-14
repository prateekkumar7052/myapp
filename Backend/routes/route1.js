// const { MongoClient } = require("mongodb");

// const db1 = async (data) => {
//   try {
//     const client = await MongoClient.connect("mongodb://localhost:27017/");
//     const coll = client.db("mydb").collection("signup");
//     const olduser = coll.findOne({ Email: data.Email });
//     if (olduser) {
//       return "user Already Exist";
//     }

//     const cursor = await coll.insertOne(data);
//     client.close();
//     return "Message: Registartion Done";
//   } catch (error) {
//     return "Internal Server Error";
//   }
// };

// const signindb = async (data) => {
//   try {
//     const client = await MongoClient.connect("mongodb://localhost:27017/");
//     const coll = client.db("mydb").collection("signup");
//     const cursor = await coll.findOne({ Email: data.Email });
//     client.close();
//     if (data.Email == cursor.Email && data.Password == cursor.Password) {
//       return "Login Ok";
//     } else {
//       return "Invalid Username or Password";
//     }
//   } catch (error) {
//     console.log("Internal server error");
//   }
// };

// module.exports = { db1, signindb };
