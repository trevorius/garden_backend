const app = require('../app/server'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);

it('gets the test endpoint', async () => {
  const response = await request.get('/test');

  expect(response.status).toBe(200);
});

it('gets the test endpoint', async () => {
  const response = await request.get('/test');

  expect(response.body.message).toBe('pass!');
});

it(' posts datetime.now to specified (by Id parameter) beds.lastWatered', async () => {
  const response = await request.post('/watered').send({ id: 1 });

  expect(response.status).toBe(201);
  // expect(response.body).toHaveProperty('post');
});