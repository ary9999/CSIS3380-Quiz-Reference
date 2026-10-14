import express from "express";
import path from "node:path";
const app = express();
app.use("/static", express.static("public"));

app.use(express.urlencoded({extended:true}));

    app.get(`/`, (req,res)=>
        {
            res.sendFile(path.join(import.meta.dirname, "views", "index.html"));

    });


        app.post(`/calculate`, (req,res)=>
            {
                const weight = Number(req.body.weight);
                const height = Number(req.body.height);

                if(Number.isNaN(weight) || Number.isNaN(height) || weight <=0 || height<=0)
                    {
                       return res.status(400).send("The input is not correct, try again");
                    }

                   const BMI = weight/ (height * height) * 10000;

         res.send(`<!DOCTYPE html>
            <html>
            <head>
            <title>BMI Result</title>
            <link rel="stylesheet" href="/static/css/style.css">
        </head>
        <body>
            <h1>BMI Result</h1>
            <p>Weight: ${weight} kg</p>
            <p>Height: ${height} cm</p>
            <p>BMI: ${BMI.toFixed(1)}</p>
        </body>
        </html>`);
});

    app.listen(3000, ()=>
    {
        console.log("Port 3000 is up and listening")
    });