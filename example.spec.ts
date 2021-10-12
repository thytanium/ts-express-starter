import supertest from "supertest";
import app from "./app";

describe("example test", () => {
  it("asserts something that is true", async () => {
    const res = await supertest(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello World!");
  });
});
