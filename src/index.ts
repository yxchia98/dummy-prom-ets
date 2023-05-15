import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app: Express = express();
const port: number = parseInt(<string>process.env.PORT) || 8080;

const corsConfig = {
    origin: true,
    credentials: true,
};

app.use(cors(corsConfig));
app.options("*", cors(corsConfig));

// initialize connection to pgsql
// setup();

app.use(express.json());

// app.use(`/profile`, profileRouter);
app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});
// run https server
// use this in production where SSL cert is used
// const httpsServer = https.createServer(credentials, app);
// httpsServer.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

// if you want to revert back to http-based server
// WARNING: Google OAuth wont work with http-based servers on non-localhost
// const httpServer = http.createServer(app);
// httpServer.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});
