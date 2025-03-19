  import RoomCategory from "../models/categoryRoomModel.js"


  //Creation
  export const createCategory= async(req,res)=>{
    const {name} = req.body
    const hotelId = req.admin.refHotel

    if(!hotelId){
      return res.status(400).json({message:'no hotel attached to the admin , create one'})
    }

    try {
      
        const category = await RoomCategory.create({name,refHotel:hotelId})
        res.status(201).json({message:'RoomCategory created :)'})

        
    } catch (error) {
        res.status(500).json({message:'internal server error :/ '})
        console.log(error);
        
    }
  }


//toutes les catégories de l'hotel
export const getCategories = async (req, res) => {
  
  const hotelId= "67db40465c519d5288027a63"

    try {
      const categories = await RoomCategory.find({refHotel:hotelId});
      res.status(200).json(categories);
    } catch (error) {
      
      res.status(500).json({ message: 'Internal server error :/' });
    }
  };



//une seule catégorie de l'hotel
export const getCategory = async (req,res)=>{
const {id}=req.params
const hotelId=req.admin.refHotel

try {

    const category = await RoomCategory.findById({ _id: id, hotelId })
    if(!category){
        return res.status(404).json({message:'category not found :('})
    }

    res.status(200).json(category)
    console.log('category found :)');
    
    
} catch (error) {
    res.status(500).json({message:'internal server error :/'})
    console.log(error);
}

}




//Suppression
 export const deleteCategory = async(req,res)=>{
    const {id}= req.params
    const hotelId = req.admin.refHotel

    try {

        const found = await RoomCategory.findById({ _id: id, hotelId })

        if(! found ){
            return res.status(404).json({message:'category not found :/'})
        }
        
        const category = await RoomCategory.findByIdAndDelete({ _id: id, hotelId })
        res.status(200).json({message:'category deleted :)'})


    } catch (error) {
        res.status(500).json({message:'internal server error :/'})
    }
  }



//M-à-j
  export const updateCategory = async (req,res)=>{
  
    const {id}=req.params;
    const{name}=req.body
    const hotelId=req.admin.refHotel
    
    try {

      const category= await RoomCategory.findOne({ _id: id, hotelId })
      if(!category){
        return req.status(404).json({message:'The category is not in db !!'})
      }

      category.name=name;
      category.slug=name.trim().replace(/\s+/g, '-').toLowerCase()

      await category.save()

      res.status(200).json({message:'category updated :) '})
      
    } catch (error) {
      res.status(500).json({message:"internal error server"})
      console.log(error);
      
    }


  }


