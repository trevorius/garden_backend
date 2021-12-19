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
describe('Watered', () => {

  it(' posts to beds/watered with valid body', async () => {
    const response = await request.post('/beds/watered').send({ id: 1 });
    expect(response.status).toBe(201);
  });

  it('returns error if submitted Bed Id is invalid', async () => {
    const response = await request.post('/beds/watered').send({ id: 'a' });
    expect(response.status).toBe(400);
  });
  it('returns NotFound if submitted Id is not in db', async () => {
    const response = await request.post('/beds/watered').send({ id: 100 });
    expect(response.status).toBe(404);
  });
});