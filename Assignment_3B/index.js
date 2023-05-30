const dbc = require('./mongodb');
const exp = require('express');
const { response } = require('express');
const app = new exp();
app.use(exp.json())
app.get('/', async (req, res) => {
    const collection = await dbc();
    const result = await collection.find().toArray();
    res.send(result);
});

app.post('/', async (req, res) => {
    const collection = await dbc();
    result = await collection.insertOne(req.body);
    res.send("Data Inserted Successfully");
});

app.put('/:name', async (req, res) => {
    const collection = await dbc();
    result = await collection.updateOne({ name: req.params.name }, { $set: req.body });
    res.send("Data Updated Successfully");
});
app.delete('/:name', async (req, res) => {
    const collection = await dbc();
    const result = await collection.deleteOne({ name: req.params.name });
    res.send('Data Deleted Successfully');
});

app.listen(3000);
