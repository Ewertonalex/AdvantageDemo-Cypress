var faker = require('faker')
faker.locale = 'pt_BR'


export default {

    usuario: function() {
       

        var data = {
            username: faker.internet.userName(),
            email: faker.internet.email(),
            password: "Teste@123",
            confpassword: "Teste@123",
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
            phone: faker.phone.phoneNumber(),
            country: "Brazil",
            city: faker.address.city(),
            address: faker.address.streetName(),
            state: faker.address.stateAbbr(),
            postalcode: faker.address.zipCode()

        }

        return data
    }
    
}