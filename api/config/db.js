  import mongoose from 'mongoose'


  const connect = async () =>{

try {
    
await mongoose.connect(process.env.MONGO_URL)
console.log("connected to mongodb")

} catch (error) {
    console.log("error")
    
}



  }

  export default connect