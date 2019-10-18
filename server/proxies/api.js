'use strict';

const proxyPath = '/api';

module.exports = function(app) {
  const express = require('express');
  const request = require('request');

  app.use(express.json());

  app.use(proxyPath, function(req, res, next){

    req.body.variables = JSON.stringify(req.body.variables);

    let options = {
      url: 'https://api.yelp.com/v3/graphql',
      headers: {
        Authorization: 'Bearer BoXkG7Ud4dAEw5jrm3vq3xJqd0N11Sx6mzeQN5y8gBGkR9bXYc3-Knaeijc2l8tItFk7rww5rWtbD9CavlUHub4Nf1FWPoU_kQ-3hLGoI3N1lIrvsidbwFDyRJ2XXXYx'
      },
      method: 'POST',
      body: req.body,
      json: true
    };
    
    request(options, function(err, httpResponse, body) {
      res.send(body);
      console.log(err, httpResponse, body);
    });
  });
};
