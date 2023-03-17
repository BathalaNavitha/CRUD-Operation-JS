const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')


router.get('/', async(req,res) =>{
    try{
        const aliens = await Alien.find()
        res.json(aliens)

    }catch(err){
        res.send('error' +err)
    }
})



router.get('/:id', async(req,res) => {
    try{
           const alien = await Alien.findById(req.params.id)
           if(alien!=null){
            res.json(alien)
           }else{
            res.send('404 : USER NOT FOUND!!')
           }
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/', async(req,res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1 =  await alien.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id', async(req,res) =>{
    try{
        const alien = await Alien.findById(req.params.id)
        if(alien!=null){
            alien.sub = req.body.sub,
            alien.tech = req.body.tech
            const a1 = await alien.save()
            res.json(a1)  
        }else {
            res.send('404 : user not found')
        }

    }catch(err){
        res.send('error')
    }
})

router.delete('/:id', async(req,res) =>{
    try{
        const alien = await Alien.findByIdAndRemove(req.params.id)
        //alien.id = req.body.id
        //const a1 = await alien.remove()
        //res.json(a1)
        res.send('SUCCESSFULLY DELETED :) ')

    }catch(err){
        res.send('error')
    }
})
module.exports = router