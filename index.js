const express = require('express');
const app = express();
const db = require('./models');
const kandang = require('./models/kandang');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.listen(PORT, async() => {
    console.log(`Server is running on port ${PORT}`);
});

db.sequelize.sync().then((result) => {
    app.listen(3000, () => {
        console.log('Server Started');
    })
})
    .catch((err) => {
    console.log(err);
})

app.post('/kandang', async (req, res) => {
    const data = req.body;
    try{
        const kandang = await db.kandang.create(data);
        res.send(kandang);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
});

app.get('/kandang', async (req, res) => {
    try{
        const kandang = await db.kandang.findAll();
        res.send(kandang);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
});

app.put('/kandang/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try{
        const kandang = await db.kandang.findByPk(id);
        if(!kandang){
            return res.status(404).send({message: 'kandang not found'});
        }

        await kandang.update(data);
        res.send({message: 'kandang berhasil diupdate'}, kandang);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
});

