const path = require('path');

const rootDir = require('../util/path');

exports.getBooking=(req,res, next)=> {
    console.log('Displayed data');
    res.sendFile(path.join(rootDir, "views", 'book.html'));

};

// import models...

const Booking= require('../models/User');

exports.addData= async (req,res,next)=>{
 try{
    if(!req.body.phone){
        throw new Error('Please enter Phone number');
    }
    const name= req.body.name;
    const email=req.body.email;
    const phone = req.body.phone;
    const data = await Booking.create({
        name:name,
        email:email,
        phonenumber: phone,
    });

    res.status(201).json({newBookingDetail: data});
 } 
 catch(err){
    console.log('error in addData');
    res.status(500).json({
        error:err
    });
 }

}

exports.getData= async (req,res,next)=>{
    try{
        const booking= await Booking.findAll();
        res.status(200).json({allBooking:booking});
    } catch (err){
        console.log('error in getdata');
    res.status(500).json({
        error:err
    });

    }
}

exports.deleteData=async (req,res,next)=>{
    try{
        if(!req.params.id){
            console.log('id is missing');
            return res.status(400).json({err:"Id is missing"});
        }
        const uId=req.params.id;
        await Booking.destroy({where: {id:uId} });
        res.sendStatus(200);
    } catch (err){
        console.log('error in deletedata');
        res.status(500).json(err);                 // sending object from backend(json)
    }

}