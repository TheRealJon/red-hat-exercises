/**
 * Class for node module export.
 */
var MathService = function(){

    /**
     * Uses promises to ensure all service call are complete. Also returns a
     * promise.
     *
     * @param  {Function cb}    Callback to execute after services are resolved.
     * @return {Promise}        Resolves once all services have resolved and the
     *                          callback parameter has been executed.
     */
    this.remoteMathService = function(cb) {
        var one, two;

        // Get promise from first service call
        var p1 = this.callOneService( function (err, num) {
               one = num;
        });

        // Get promise from second service call
        var p2 = this.callTwoService( function (err, num) {
            two = num;
        });

        // Execute callback argument once all services are resolved, return a promise
        return Promise.all([ p1, p2 ]).then(function(){
            cb(undefined, one + two);
        });
    }

    /**
     * Returns a promise which resolves after executing the passed callback.
     *
     * @param  {Function cb}    Callback to execute after delay.
     * @return {Promise}        Resolves after callback is executed.
     */
    this.callOneService = function(cb) {
        return new Promise(function(resolve, reject){
            setTimeout ( function () {
                resolve(cb( undefined , 1 ));
            }, 1000 );
        });
    }

    /**
     * Returns a promise which resolves after executing the passed callback.
     *
     * @param  {Function cb}    Callback to execute after delay.
     * @return {Promise}        Resolves after callback is executed.
     */
    this.callTwoService = function(cb) {
        return new Promise(function(resolve, reject){
            setTimeout ( function () {
                resolve(cb( undefined , 2 ));
            }, 1500 );
        })
    }
};



// Removed to test using mocha.js
// var service = new MathService();
// service.remoteMathService(function (err, answer) {
//     if (err) console .log ( "error " , err);
//     if (answer !== 3 ) {
//         console .log ( "wrong answer" , answer);
//     } else {
//         console .log ( "correct" );
//     }
// });

module.exports = new MathService();
