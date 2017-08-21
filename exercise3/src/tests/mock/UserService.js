export default class UserService{
    constructor(pass){
        this.pass = pass;
        if(this.pass){
            this.user = {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                  "street": "Kulas Light",
                  "suite": "Apt. 556",
                  "city": "Gwenborough",
                  "state": "KY",
                  "zipcode": "92998-3874",
                  "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                  }
                },
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company": {
                  "name": "Romaguera-Crona",
                  "catchPhrase": "Multi-layered client-server neural-net",
                  "bs": "harness real-time e-markets"
                }
            }
        } else {
            this.error = {
                message: "Intentionally failed."
            }
        }
    }

    getAllUsers(cb){
        if(this.pass){
            cb(undefined, [this.user]);
        } else {
            cb(this.error, undefined);
        }
    }

    getUser(id, cb){

        if(this.pass){
            cb(undefined, this.user);
        } else {
            cb(this.error, undefined)
        }
    }
}
