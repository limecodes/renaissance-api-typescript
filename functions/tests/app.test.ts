import * as http from 'http';
import * as request from 'supertest';
import express from 'express';

// Use separate env file for tests
import config from '../src/config';

let server: http.Server, agent: request.SuperAgentTest;

// Later, refactor all this into setupTests file
beforeEach(async done => {
  const app = express();

  await require('../src/loaders').default({ expressApp: app });

  server = app.listen(config.port).on('error', err => {
    console.log('Error creating server', err);
    done(err);
  });
  agent = request.agent(server);
  done();
});

afterEach(done => {
  return server && server.close(done);
});

test('Health check should be OK', () => {
  return agent.get('/status').expect(200);
});
