import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

const app = express();

const FRONTEND_URL = "https://mybooknest.pages.dev";

app.use(cors({
    origin: FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
