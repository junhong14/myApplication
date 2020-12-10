export class AccountModel {
    username: string;
    
    password: string;

    firstName: string;

    lastName: string;

    dob: Date;

    constructor(obj? :any){
        Object.assign(this, obj); 
    }
}