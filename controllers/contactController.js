const contactController= async(req,res)=>{
    try {
        res.render('contact')
    } catch (error) {
       console(error.message) 
    }
}
export{contactController}