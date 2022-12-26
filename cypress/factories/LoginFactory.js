var faker = require('faker')
faker.locale = 'pt_BR'


export default {

    login: function() {
       

        var data = {
            username: faker.internet.userName(),
            password: faker.internet.password(),
            

        }

        return data
    }
    
}