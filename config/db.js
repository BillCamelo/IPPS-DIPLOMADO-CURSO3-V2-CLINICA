import mongoose from 'mongoose'


const MONGODB_URI = ''

export const conectar = async () => {
    await mongoose.connect( MONGODB_URI )
    consolelog('conectado a la bd')
}