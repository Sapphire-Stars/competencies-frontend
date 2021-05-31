export class updateUser{
    constructor(
        public phone:Number,
        public company:string,
        public skills:string[],
        public hobbies:string[],
        public website:string,
        public githubLink:string,
        public post:string
    ){}
}