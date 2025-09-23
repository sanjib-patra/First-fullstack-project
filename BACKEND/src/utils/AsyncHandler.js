const AsyncHandler=(handlefunction)=>{
 return async(req,res,next)=>{
    try{
       await handlefunction(req,res,next)
    }
    catch(error){
     res.status(error.code||500).json({
        sucess:false,
        message:error.message
     })
    }
 }
}

export {AsyncHandler}