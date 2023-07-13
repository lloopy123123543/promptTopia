import mongoose from 'mongoose';
let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if(isConnected){
        console.log('Mongo db is already connceted')
        return
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true
    } catch(err){
        console.log(err)
    }

}