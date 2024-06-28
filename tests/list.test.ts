import request from "supertest";
import app from "../src/index";

// describe('GET /cars', () => {
//     it('should response with 200 as status code', async () => {
//       await request(app)
//         .get('/cars')
//         // .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200)
//     });
// });

describe('GET /cars', () => {
  it('should respond with 200 as status code', async () => {
      const response = await request(app)
          .get('/cars')
          .set('Accept', 'application/json') // Set the Accept header
          .expect('Content-Type', /json/)
          .expect(200);

      console.log(response.body); // Log response body for further debugging
  });
});