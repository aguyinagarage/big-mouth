'use strict';

const co = require('co');

let initialized = false;

let init = co.wrap(function* (){
  if(initialized ){
    return;
  }

  process.env.restaurants_api = 'https://zp1ltb5dq0.execute-api.us-east-1.amazonaws.com/dev/restaurants';
  process.env.restaurants_table = 'restaurants';
  process.env.AWS_REGION = 'us-east-1';
  process.env.cognito_client_id = 'test_cognito_client_id';
  process.env.cognito_user_pool_id = 'us-east-1_378VnWZN4';
  process.env.cognito_server_client_id = '438kpnhmqiegcb079lmhsgn6vd';


  initialized = true;

})

module.exports.init = init;