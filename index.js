const express = require('express');
const cors = require('cors')
const app = express();
port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello')
});

const users = [
    { id: 1, name: 'Noman', job: 'student' },
    { id: 2, name: 'sojib', job: 'student' },
    { id: 3, name: 'mishuk', job: 'student' },
    { id: 4, name: 'Mahim', job: 'student' },
    { id: 5, name: 'Prosen', job: 'student' },
    { id: 6, name: 'Polash', job: 'student' },
    { id: 7, name: 'Parvej', job: 'student' },
]


app.get('/users', (req, res) => {
    //filter by query parameter

    if (req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(matched)
    }
    else {
        res.send(users)
    }
})

app.get('/user/:id', (req, res) => {
    //filter by params

    console.log(req.params)
    const id = req.params.id;
    const user = users.find(u => u.id == id)
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})

app.listen(port, () => {
    console.log('listening port', port)
})