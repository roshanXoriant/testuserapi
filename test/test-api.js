let app = require("../app");
process.env.NODE_ENV = "test";

let chai = require("chai");
let chaiHttp = require("chai-http");

chai.use(chaiHttp);
chai.should();

describe("/GET Users", () => {
  it("it should GET all the Users", done => {
    chai
      .request("http://localhost:5000")
      .get("/api/v1/getAllUsers")
      .end((err, res) => {
        res.status.should.be.equal(200);
        done();
      });
  });
});
