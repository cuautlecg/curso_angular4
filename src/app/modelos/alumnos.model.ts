export class Alumno{

    public id: number;
    public nombre: String;
    public apellidos: String;
    public ciudad: String;

    constructor(id:number, nommbre: String, apellidos: String, ciudad: String){
        this.id = id;
        this.nombre = nommbre;
        this.apellidos = apellidos;
        this.ciudad = ciudad;
    }

}