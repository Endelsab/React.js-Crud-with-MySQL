import e from "express";
import express from "express"
import mysql from "mysql"
import cors from 'cors'

const app = express ()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"wendel1234",
    database:"shop"
});

//middleWare
app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    res.json("Hello this backend")
})

//select item
app.get("/tblitems", (req,res)=>{
    const q = "select * from tblitems"

    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

//insert item
app.post("/tblitems", (req,res)=>{
    const q = "insert into tblitems (Categories,Price) values (?)"
    const values = [
        req.body.Categories,
        req.body.Price
]

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("items added")

    })
})

app.listen(3080, ()=>{
    console.log('Connected to backend !')

})