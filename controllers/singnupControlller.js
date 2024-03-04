const signupController=async(req,res)=>{
 try {
    res.render('signup')
 } catch (error) {
    console.log(error.message)
 }
}

export {signupController}