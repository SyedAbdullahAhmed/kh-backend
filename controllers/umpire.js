const mongoose = require('mongoose')
const Umpire = require('../models/umpire')

// GET UMPIRES DATA
const getUmpiresData = async(req,res)=>{
    try {
     //find data
      const result = await Umpire.find()
      res.send(result)
    } catch (error) {
      console.log(error);
      res.status(500).send({message:'Internal Server Error'});
    }
  }

// GET UMPIRES DATA BY ID
const getUmpiresDataByID = async(req,res)=>{
     //id from parameter
     let _id = req.params.id;
    try {
      const result = await Umpire.findOne({_id})
      if(!result){
          return res.status(404).send({message:'Umpire not found'}); 
      }
      res.send(result)
    } catch (error) {
      console.log(error);
      res.status(500).send({message:'Internal Server Error'});
    }
}


//POST UMPIRE DATA
const postUmpiresData = async(req,res)=>{
       let body = req.body
       console.log(body);
       let doc = new Umpire(body)
       try {
         const result = await doc.save();
         console.log(result);
         res.send({msg:"Save Document Successfully!"})
       } catch (error) {
         console.log(error);
         res.status(500).send({message:'Internal Server Error'});
       }
   }
   
// UPDATE UMPIRE DATA BY ID
const updateUmpiresDataByID = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;

  try {
    const result = await Umpire.findOneAndUpdate({ _id }, { $set: body }, { new: true });

    if (!result) {
      return res.status(404).send({message:'Umpire not found'});
    }
    res.send({ msg: "Updated Successfully!", updatedUmpire: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({message:'Internal Server Error'});
  }
};

// DELETE UMPIRE DATA BY ID
const deleteUmpiresDataByID = async(req,res)=>{
  const _id = req.params.id
    try {
      const result = await Umpire.findOneAndDelete({_id})
      if(!result) {
          return res.status(404).send({message:'Umpire not found'}); 
      }
      res.send({msg : "Deleted Successfully!"})
    } catch (error) {
      console.log(error);
      res.status(500).send({message:'Internal Server Error'});
    }
}

module.exports = {getUmpiresData,getUmpiresDataByID,postUmpiresData,updateUmpiresDataByID,deleteUmpiresDataByID};