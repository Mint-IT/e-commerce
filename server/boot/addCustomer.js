// var faker = require("faker");
 
// module.exports = function(app) {
     

// var Customer = app.models.Customer;


    


// Customer.new = function(cb) {
//     var M = [];
//     var i = 0;
//     var models = app.models();
//     models.forEach(function (Model) { M[i] = Model.modelName;i++;});console.log(M);


//              cb(null, );
//            };






























































































//            Car.remoteMethod(
//              'revEngine',
//              {
//                accepts: [{arg: 'sound', type: 'string'}],
//                returns: {arg: 'engineSound', type: 'string'},
//                http: {path:'/rev-engine', verb: 'post'}
//              }
//            );
        
//             remote method before hooks
//            Car.beforeRemote('revEngine', function(context, unused, next) {
//              console.log('Putting in the car key, starting the engine.');
//              next();
//            });
        
//             afterInitialize is a model hook which is still used in loopback
//            Car.afterInitialize = function() {
//               http:docs.strongloop.com/display/public/LB/Model+hooks#Modelhooks-afterInitialize
//              console.log('> afterInitialize triggered');
//            };
        
//             the rest are all operation hooks
//             - http:docs.strongloop.com/display/public/LB/Operation+hooks
//            Car.observe('before save', function(ctx, next) {
//              console.log('> before save triggered:', ctx.Model.modelName, ctx.instance ||
//                ctx.data);
//              next();
//            });
//            Car.observe('after save', function(ctx, next) {
//              console.log('> after save triggered:', ctx.Model.modelName, ctx.instance);
//              next();
//            });
//            Car.observe('before delete', function(ctx, next) {
//              console.log('> before delete triggered:',
//                ctx.Model.modelName, ctx.instance);
//              next();
//            });
//            Car.observe('after delete', function(ctx, next) {
//              console.log('> after delete triggered:',
//                ctx.Model.modelName, (ctx.instance || ctx.where));
//              next();
//            });
        
//             remote method after hook
//            Car.afterRemote('revEngine', function(context, remoteMethodOutput, next) {
//              console.log('Turning off the engine, removing the key.');
//              next();
//            });
        
//             model operation hook
//            Car.observe('before save', function(ctx, next) {
//              if (ctx.instance) {
//                console.log('About to save a car instance:', ctx.instance);
//              } else {
//                console.log('About to update cars that match the query %j:', ctx.where);
//              }
//              next();
//            });
  









      

//     };
    
// //     var models = app.models();


// //     models.forEach(function (Model) { 
// //      console.log(Model.modelName);

// //      Model.beforeCreate = function(next, modelInstance) {
// //         if (Model.modelName == 'Customer ') {
// //             Customer.findOrCreate( {where: {firstName: data1[x].firstName} } , data1[x], function(err, instance) {
// //                 if (err) return console.error(err);
// //                 //console.log('Customer created: ', instance);

// //             const f1 =  customerData.map( async instance => 
// //                 { let trait1 = await Customer.create( instance ) 
                    
// //                 return (trait1) 
// //                 })    
            
// //             const p1 = Promise.all(f1)

// //         }
            

// //         modelInstance.firstName = faker.name.firstName(); 
// //         modelInstance.lastName = faker.name.lastName();
// //         modelInstance.phone = faker.phone.phoneNumber();
// //         modelInstance.birthDate = faker.date.past();
// //         modelInstance.email = faker.internet.email();
// //         modelInstance.password = faker.name.findName();

// //         customerD = modelInstance;

// //         next();
// //         };

// //      const f6 = orderData.map(async order =>
// //         {
// //             let trait6 = await Model.create(order)
// //             return (trait6)
// //         })
// //         const p6 = Promise.all(f6)
    
// //      app.dataSources.mongoDs.discoverModelProperties(Model,
// //      function (err, props) {
         
// //      console.log(props);
     
     
// //     });

    





// //     });
    


    
// // };