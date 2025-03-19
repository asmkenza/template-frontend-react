import express from 'express'
import { login, logout, refreshToken, register } from '../controllers/authController.js'
import { adminfunc, getAdminProfil } from '../controllers/adminController.js'
import {createHotel} from '../controllers/hotelController.js'
import authToken from './../middlewares/authMiddleware.js';
import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from '../controllers/categoryRoomController.js';
import { validate } from './../middlewares/validate.js';
import { createCategoryValidator, updateCategoryValidator } from '../validators/categoryRoomValidator.js';


const router= express.Router()

//routes accessibles par l'admin

//Routes Authentification (register,login,logout,refreshToken)
router.post("/login",login)
router.post("/register",register)
router.post("/logout",logout)
router.post("/refresh-token",refreshToken)

//Route Création hotel 
router.post("/createHotel",authToken,createHotel)

//Route Profil Admin
router.get("/profil/:id",authToken,getAdminProfil)

//route de test:auth
router.get("/",authToken,adminfunc)

//Routes Room Categories 
router.post("/room-categories",authToken,validate(createCategoryValidator),createCategory)
router.get("/room-categories-all",authToken,getCategories)
router.get("/room-categories/:id",authToken,getCategory)
router.delete("/room-categories/:id",authToken,deleteCategory)
router.put("/room-categories/:id",authToken,validate(updateCategoryValidator),updateCategory)


//Routes Room

export default router;