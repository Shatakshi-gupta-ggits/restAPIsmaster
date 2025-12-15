import app from "./src/app";
import { config } from "./src/config/config";
import { connectDB } from "./src/db/connectDB";

const startServer = async () => {
     const port = config.port || 3000;
//connect database
await connectDB();
     app.listen(port, () => {
       console.log(  `Listining on port: ${port}`);
     })
};

startServer();