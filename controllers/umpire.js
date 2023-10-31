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
         res.send({msg:"Save Document Successfully!" , document : result})
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

// GET UMPIRES PERONSAL INFORMATION BY ID
const getUmpiresPersonalInformationDataByID = async (req, res) => {
  // const _id = req.params.id;
  // const body = req.body;

  // try {

  //   // empty object
  //   let updatedData = {};

  //   //push body data in object
  //   for (const field in body) {
  //     updatedData[`personalInformation.${field}`] = body[field];
  //   }

  //   // update data using object
  //   const result = await Umpire.findOneAndUpdate({ _id }, {$set: updatedData}, { new: true });

  //   // empty due to other requests data
  //   updatedData = {}

  //   if (!result) {
  //     return res.status(404).send({message : 'Umpire not found'});
  //   }
  //   res.send({ msg: "Updated Successfully!", updatedPlayer: result.personalInformation });
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).send({ message: 'Internal Server Error' });
  // }
  //id from parameter
  let _id = req.params.id;
  try {
    const result = await Umpire.findOne({_id})
    if(!result){
        return res.status(404).send({message:'Umpire not found'}); 
    }
    res.send(result.personal_information)
  } catch (error) {
    console.log(error);
    res.status(500).send({message:'Internal Server Error'});
  }
};

// UPDATE UMPIRES PERONSAL INFORMATION BY ID
const updateUmpiresPersonalInformationDataByID = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;

  try {

    // empty object
    let updatedData = {};

    //push body data in object
    for (const field in body) {
      updatedData[`personal_information.${field}`] = body[field];
    }

    // update data using object
    const result = await Umpire.findOneAndUpdate({ _id }, {$set: updatedData}, { new: true });

    // empty due to other requests data
    updatedData = {}

    if (!result) {
      return res.status(404).send({message : 'Umpire not found'});
    }
    res.send({ msg: "Updated Successfully!", updatedPlayer: result.personal_information });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }

};

module.exports = {updateUmpiresPersonalInformationDataByID,getUmpiresPersonalInformationDataByID,getUmpiresData,getUmpiresDataByID,postUmpiresData,updateUmpiresDataByID,deleteUmpiresDataByID};