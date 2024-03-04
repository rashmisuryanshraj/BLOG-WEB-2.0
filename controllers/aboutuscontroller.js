const aboutuscontroller = async(req,res)=>{
    try {
        res.render('aboutus')
    } catch (error) {
        console.log(error.message)
    }
}

export {aboutuscontroller}