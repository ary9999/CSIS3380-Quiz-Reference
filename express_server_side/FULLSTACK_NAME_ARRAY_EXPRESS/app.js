import express from 'express';
const app = express();
import path from 'node:path';
app.use(express.urlencoded({ extended: true }));

const names = [];

app.get('/', (req, res) =>
{
    const nameList = names.map((name) =>
    {
        return `<li>${name}</li>`;
    }).join('');

    res.send(`
        <h1>Name List</h1>

        <form action="/add" method="POST">
            <label for="name">Enter your name:</label>
            <input type="text" name="name" id="name" required>
            <button type="submit">Submit Name</button>
        </form>

        <h2>Names</h2>

        <ul>
            ${nameList}
        </ul>
    `);
});
            
            
    

        app.post(`/add`,(req,res)=>
        {
            const name = req.body.name;
            names.push(name);
            console.log(names);
            res.redirect('/');
        });


    app.listen(3000,() =>
    {
        console.log('Server is running on port 3000');

    });

