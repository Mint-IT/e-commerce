 var chai = require('chai')
 var chaiHttp = require('chai-http');
 var expect = chai.expect;

   let server = require('../server/server');
   let should = chai.should();
   
chai.use(chaiHttp);


 describe('Customers', () => {
    /*
    * Test the /login route
    */
    describe('/POST customers', () => {
      it('it should POST login', (done) => {
        chai.request(server)
        .post('/api/Customers/login')
        .send({ email: "Roxanne88@hotmail.com", password: "customer1" })
      //  .set('Accept', 'application/json')
        .end(function (err, res) {
            console.log('this was run the login part');
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('id'); 
            done();
         })

    });
    });
   });

   //**************************************************** */


   