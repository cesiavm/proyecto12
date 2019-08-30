export class Fraternidad {
    constructor(
        public _id?:string,
        public nombre?:string,
        public institucion?:string,
        public foto?:File,
        public presidente?:string,
        public delegado?:String,
        public reina?:{nombrer?:string,apellidosr?:String, fotosr:[{fotor:File,pie:string}]},
        public cantidad?:Number,
        public descripcion?:string,
        public dia?:Date,
        public tipo_danza?:string,
        public estado?:Boolean,
        public comentarios?:[{
            comentario:string,
            nombreUsuario:String,
            
        }],
        ){}
}
