const homeController = async (req,res)=>{
  try {
    res.render('index')
  } catch (error) {
    console.log(error.message)
  }
}

export {homeController}