import express from "express"
import bodyParser from "body-parser";
import cors from 'cors';
import multer from "multer";
import FormData from "form-data";
import fs from "fs";
import axios from "axios";


//constants
const app = express();
const port = 3000;

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});
const upload = multer({ storage });


// middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>");
});

app.post("/upload", upload.array("images"), async (req, res) => {
    console.log("files:", req.files);

    try {
        const results = [];
        for (const file of req.files) {
            const formData = new FormData();
            formData.append("file", fs.createReadStream(file.path));

            const response = await axios.post("https://api.ocr.space/parse/image", formData, {
                headers: {
                    ...formData.getHeaders(),
                    apikey: "helloworld",
                }
            });
            const text = response.data.ParsedResults?.[0]?.ParsedText || "";

            results.push(text);
            // clearing file after ocr processing.
            fs.unlink(file.path, (err) => {
                if (err) console.error(err);
            });
        }
        res.json({ message: "ocr completed",extractedText : results});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "OCR failed" });
    }
    // res.json({ message: "Files uploaded successfully", files: req.files, });
    // res.send({"message": "File received"});
})

app.listen(port, () => {
    console.log("Servering running at port: ", port);
})