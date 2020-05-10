const book = require('../model/books');
const ObjectID = require("mongodb").ObjectId;
module.exports = {
  list: (req, res)=> {
    book.find({}).toArray((err, books) =>{
      res.send(books);
    } );
  },
  create: (req, res) => {
    const { name, author, genre, ISBN, pages } = req.body;
    book.insertOne({
      name,
      author,
      genre,
      ISBN,
      pages
    });
    res.send('Livro registrado com sucesso!');
  },
  find: (req, res) => {
    book.find({_id: new ObjectID(req.params.id)}).toArray((err, foundBook) => {
      if(foundBook.length){
        res.send(foundBook[0]);
      }else{
        res.send({});
      }
    });
  },
  delete: (req, res) => {
    book.deleteOne({ _id: new ObjectID(req.params.id)}, ((err, aftRows)=> {
      if(err){
        res.send('Não foi possível apagar:' + err);
      }   
      res.send('Item apagado');
    }))
  },
  update: (req, res) => {
    const { name, author, genre, ISBN, pages } = req.body;
    book.updateOne({ _id: new ObjectID(req.params.id)}, {
      $set:{
        name, 
        author,
        genre, 
        ISBN, 
        pages  
      }, 
    }, ((err, success) => {
        if(err){
          res.send('Não foi possível realizar a ação' + err);
        }
        res.send('Item atualizado');
    }))
  }
}