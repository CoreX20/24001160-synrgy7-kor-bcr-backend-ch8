import request from "supertest";
import app from "../src/index";

describe('GET /cars', () => {
    it('should response with 200 as status code', async () => {
      await request(app)
        .get('/cars')
        // .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
    });
});
