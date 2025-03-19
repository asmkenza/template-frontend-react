import Admin from "../models/adminModel.js";
import Hotel from "../models/hotelModel.js"
import { generateAccessToken } from "./authController.js";

export const createHotel=async (req,res)=>{

    const {nom,logo,photo,emplacement}=req.body;
    const adminId = req.admin.id

    const admin = await Admin.findById(adminId)
    
    if(admin.refHotel){
        return res.status(400).json({message:'admin already have a hotel'})
    }


    try {
        const hotel = await Hotel.create({
            nom,
            logo,
            photo,
            emplacement,
            refAdmin: adminId 
        });

        admin.refHotel=hotel._id;
        admin.tokenInvalidatedAt = new Date();

        await admin.save()

        const newAccesToken = generateAccessToken(admin)

        res.status(201).json({message:"hotel created successfully", hotel , accessToken:newAccesToken});
    } catch (error) {
      res.status(500).json({ message: "error while creating hotel!!!" });
      console.log(error);
    }
  }

