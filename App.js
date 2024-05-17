import { MongoClient } from "mongodb";

const password = encodeURIComponent(process.env.MONGO_PASSWORD);
const connectionString = `mongodb+srv://lsmous27:${password}@devcluster.wl59cem.mongodb.net/?retryWrites=true&w=majority&appName=DevCluster`; // clustore url
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("connection successful")
} catch(e) {
  console.error(e);
}
let db = conn.db("smouzen_people");
export default db;