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

let Order_details = {
    orderNumber: faker.random.number(), 
    orderDate: faker.date.recent(),
    shipDate: faker.date.future(),
    Paid: false,
    quantity: 0,
    totalPrice: 0,
    customerId: ""
};

describe('Create an account and an order', () => {
  
  describe('/POST Customer2', () => {
    it('it should Customer2, Login2, and check token2', (done) => {
      chai.request(server)
        .post('/api/Customers')
        .send(Customer_details) 
        .end((err, res) => { 
          res.should.have.status(200);
          Order_details.customerId = res.body.id; 
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
                 .post("/api/Orders")
                 // we set the auth header with our token
                 .set('Authorization', token)
                 .send(Order_details)
                 .end((err, res) => {
                   res.should.have.status(200);
                   console.log("Order Created");
                   done(); 
             })
            })

        })
    })
  })
})
})
