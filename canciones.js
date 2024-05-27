import fs from 'fs'
import path from 'path'

const getHtml = (req, res) => {
    const filePath = path.resolve('index.html')
    res.sendFile(filePath)
}

const getCanciones = (req, res) => {
    try {
        const canciones = JSON.parse(fs.readFileSync('repertorio.json', 'utf8'))
        res.status(200).json(canciones);
    } catch (error) {
        res.status(500).json({ message: 'Hay un error' });
    }
}

const postCanciones = (req, res) => {
    try {
        const cancion = req.body
        const canciones = JSON.parse(fs.readFileSync('repertorio.json', 'utf8'))
        canciones.push(cancion)
        fs.writeFileSync('repertorio.json', JSON.stringify(canciones));
        res.status(201).send('Canción creada con éxito');
    } catch (error) {
        res.status(500).json({ message: 'Hay un error' });
    }
}

const deleteCanciones = (req, res) => {
    try {
        const { id } = req.params
        const listaCanciones = JSON.parse(fs.readFileSync('repertorio.json', 'utf8'))
        const index = listaCanciones.findIndex(p => p.id == id);
        listaCanciones.splice(index, 1)
        fs.writeFileSync("repertorio.json", JSON.stringify(listaCanciones));
        res.send("Canción eliminada con éxito")
    } catch (error) {
        res.status(500).json({ message: 'Hay un error' });
    }
}
const putCanciones = (req, res) => {
    try {
        const { id } = req.params
        const can = req.body
        const cans = JSON.parse(fs.readFileSync('repertorio.json', 'utf8'))
        const index = cans.findIndex(p => p.id == id)
        cans[index] = can
        fs.writeFileSync("repertorio.json", JSON.stringify(cans))
        res.send("Canción modificada con éxito")
    } catch (error) {
        res.status(500).json({ message: 'Hay un error' });
    }
}
export { getHtml, getCanciones, postCanciones, deleteCanciones, putCanciones };