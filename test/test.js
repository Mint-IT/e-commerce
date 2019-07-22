process.env.NODE_ENV = 'test';
 
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server/server');
let should = chai.should();
chai.use(chaiHttp);

describe('Categories', () => {
   /*
   * Test the /GET route
   */
   describe('/GET categories', () => {
     it('it should GET all the category', (done) => {
       chai.request(server)
       .get('/api/Categories')
       .then(function(response) {
         response.should.have.status(200);
         response.body.should.have.length(3);
         done();
       })
       .catch(function(error) {
         done(error);
     });
   });
   });
  });

  describe('SubCategories', () => {
    /*
    * Test the /GET route
    */
    describe('/GET SubCategories', () => {
      it('it should GET all the SubCategory', (done) => {
        chai.request(server)
        .get('/api/SubCategories')
        .then(function(response) {
          response.should.have.status(200);
          response.body.should.have.length(10);
          done();
        })
        .catch(function(error) {
          done(error);
      });
    });
    });
   });

   describe('SubCategories', () => {
    /*
    * Test the /GET route
    */
    describe('/GET Customers', () => {
      it('it should GET all the Customers', (done) => {
        chai.request(server)
        .get('/api/Customers')
        .then(function(response) {
          response.should.have.status(200);
          done();
        })
        .catch(function(error) {
          done(error);
      });
    });
    });
   });
 