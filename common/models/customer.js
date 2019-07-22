'use strict';


module.exports = function(Customer) {

   Customer.validatesLengthOf('password', {min: 5});
  Customer.validatesUniquenessOf('email');


  
};


// var models = app.models();
// var M = [];

//     models.forEach(function (Model) { 
//         var i = 0;
//         M[i] = Model.modelName;
//         i++;
//         console.log(Model.modelName); });


        

