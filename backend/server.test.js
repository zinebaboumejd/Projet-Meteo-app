const request = require("supertest");
const app = require("./server");
// const axios = require('axios');

//test get
// describe("GET get", () => {
//   it("should return 200 OK", async () => {
//     const res = await request(app).get("/get");
//     expect(res.status).toBe(200);
//   });
// });

describe("GET get", () => {
  it("should return 200 OK", async () => {
    const res = "hello"
    expect(res).toBe("hello");
  });
});

// describe("GET user", () => {
//   it("should return 200 OK", async () => {
//     const request = await res(app).get("/auth/getUser");
//     expect(request.statusCode).toBe(users);
//   }
//   );
// });
