import {IContact} from './contact.interface';
export default class Contact {
    static Pi:number=3.1416;
    private _settings: IContact={
        name:'hello',
        email:'world'
    };
    private _greeting:string='default';
    get greeting(){
        return this._greeting;
    }
    set greeting(value:string){
        // this._settings=value;
        if(value.length>3){
            this._greeting=value;
        }else{
            this._greeting="Hello world"
        }
    }
    constructor() {
        // console.log(this._greeting);
    }
    static calCPi(dimension:number):number{
        return this.Pi * dimension;
    }
    sayHi(){
        debugger;
        console.log(this._settings);
    }
}