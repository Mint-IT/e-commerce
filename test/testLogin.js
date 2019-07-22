let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server/server');
let should = chai.should();
let expect = chai.expect;


chai.use(chaiHttp);

var faker = require("faker");


describe('Customers', () => {
let Customer_details = {
    firstName: faker.name.firstName(), 
    lastName: faker.name.lastName(),  
    phone: faker.phone.phoneNumber(),
    birthDate: faker.date.past(),
    email: faker.internet.email(),
    password: faker.name.findName()
};

let login_details = {
  email: Customer_details.email,
  password: Customer_details.password
}

describe('Create Account, Login and Check Token', () => {
  
  describe('/POST Customer', () => {
    it('it should Customer, Login, and check token', (done) => {
      chai.request(server)
        .post('/api/Customers')
        .send(Customer_details) 
        .end((err, res) => { 
          res.should.have.status(200);
          console.log("Customer created")
          chai.request(server)
            .post('/api/Customers/login')
            .send(login_details)
            .end((err, res) => {
              console.log('customer logged in');
              res.should.have.status(200);
              
              res.body.should.have.property('id'); 
              
              let token = res.body.id;
               chai.request(server)
                 .get("/api/Orders")
                 // we set the auth header with our token
                 .set('Authorization', token)
                 .end((err, res) => {
                   res.should.have.status(200);
                   console.log("Get orders");
                   done(); 
             })
            })

        })
    })
  })
})
})
