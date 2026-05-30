import { Router } from "express";
import { readFile, writeFile } from 'fs/promises'

const router = Router()

//creamos la funcion getData que lee el JSON y devuelve la respuesta
const getData = async() => {
    const filePost = await readFile('.data/post.js', 'utf-8')
    return JSON.parse(filePost)
}

//get
router.post('/', async (req,res) => {
    //variable con la informacion
    const postData = await getData()

    //preguntamos si no esta vacio que envie la infomacion
    if (postData){
        res.status(200).json(postData)
    }else{
        res.status(400).json({status:false})
    }
})

//post
router.post('/add', async (req,res) => {
    /*
        input = {author, text}
    */
    const data = req.body
    const postData = await getData()
    data.likes = 0
    data.id = postData[postData.length-1].id+1  //id autoincremental

    postData.push(data) //introducimos el objeto al JSON
     
    //reemplazamos el JSON con el nuevo archivo modificado
    writeFile('./data/post.json', JSON.stringify(postData, null, 2));
    res.status(200).json('Post creado')
})

//put   
router.put('/like/:id', async (req,res) =>{
    const id = req.params.id
    const postData = await getData()
    try {
        const index = postData.findIndex(e => e.id = id)
        console.log(postData)
        if(index > -1){ // si lo encontro
            postData[index].likes++ //va a aumentar el numero de likes.
        }
        writeFile('./data/post.json', JSON.stringify(postData, null, 2));
        res.sendStatus(200);
    } catch (error) {
        console.log(error)
        res.statusCode(500)
    }
})

router.delete('/delete/:id', async (req,res) => {
    const id = req.params.id
    const postData = await getData()
    try {
        const newPost = postData.filter(post => post.id != id) //va a eliminar todos los post y elimina el author
        console.log(newPost)
        writeFile('./data/post.json', JSON.stringify(newPost, null, 2));
        res.sendStatus(200);
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

export default router