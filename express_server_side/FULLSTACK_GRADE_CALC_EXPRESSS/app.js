import express from 'express';
const app = express();
//middleweare so express can read the data from the form
app.use(express.urlencoded({extended:true}));
//middlewear css
app.use('/static', express.static('public'));
import path from 'node:path';

app.get(`/`,(req,res) =>
    {
        res.sendFile(path.join(import.meta.dirname, 'views', 'index.html'));

    });

    app.post(`/calc`,(req,res) =>
        {
            //convert the input to numbers
            const earned = Number(req.body.earned);
            const possible = Number(req.body.possible);

            //error handling for invalid input

            if (isNaN(earned) || isNaN(possible) || earned < 0 || possible <= 0 || earned > possible)
                {
                    return res.status(400).send('Invalid input');
                }
         
           //calculate the grade
            const grade = (earned/possible)*100;    
            res.send('your grade is '+ grade.toFixed(2) +'%');
        });

app.listen(3000,() =>
    {
        console.log('Server is running on port 3000');
    })