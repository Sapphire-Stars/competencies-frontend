export class Question{
    constructor(
        public questionTitle:string,
        //public questionBody:any,
        public questionTag:Array<String>,
        public questionBody:string,
        public email:any,
        public views:number
        
    ){}
}
