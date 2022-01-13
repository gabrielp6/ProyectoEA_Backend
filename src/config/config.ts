export default {
    DB: {
//        URI: process.env.MONGODB_URI || 'mongodb://localhost/barea',
        URI: process.env.MONGODB_URI || 'mongodb+srv://Grup2:grup2eamola@cluster0.g8umu.mongodb.net/barea?retryWrites=true&w=majority',
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD,
        },
        
    CADUCIDAD_TOKEN : process.env.CADUCIDAD_TOKEN = '48h',
    SEED_AUTENTICACION : process.env.SEED_AUTENTICACION = process.env.SEED_AUTENTICACION ||  'este-es-el-seed-desarrollo',
    
}