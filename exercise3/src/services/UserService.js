import HttpService from './HttpService';
import AddressService from './AddressService';

export default class UserService extends HttpService{
    getAllUsers(cb){
        var self = this;
        return this.get(this.baseUrl).then(function(results){
            var users = results.data.map(self.validateUserDetails).sort(self.compareByName);
            cb(undefined, users);
        }).catch(function(error){
            cb(error, undefined);
        });
    }

    getUser(id, cb){
        var self = this;
        return this.get(this.baseUrl + "/" + id).then(function(results){
            var user = self.validateUserDetails(results.data);
            cb(undefined, user);
        }).catch(function(error){
            cb(error, undefined);
        });
    }

    compareByName(a,b){
        return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
    }

    validateUserDetails(user){
        var address = {
            street: null,
            suite: null,
            city: null,
            state: null,
            zipcode: null,
            geo: {
                lat: null,
                lng: null
            }
        }

        var company = {
            name: null,
            catchPhrase: null,
            bs: null
        }

        if( "address" in user ){
            address.street  =  user.address.street
            address.suite = user.address.suite
            address.city = user.address.city
            address.zipcode = user.address.zipcode
            address.state = AddressService.getState(user.address.zipcode)

            if( "geo" in user.address ) {
                address.geo.lat = user.address.geo.lat
                address.geo.lng = user.address.geo.lng
            }
        }

        if( "company" in user ) {
            company = {
                name: user.company.name,
                catchPhrase: user.company.catchPhrase,
                bs: user.company.bs
            }
        }

        return {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone,
            website: user.website,
            address: address,
            company: company
        }
    }
}
