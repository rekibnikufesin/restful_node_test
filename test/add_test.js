'use strict';

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let server = require('../app');

chai.use(chaiHttp);

describe('/add GET', () => {
    it('returns usage instructions via json', (done) => {
        chai.request(server)
            .get('/add')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('msg').that.equals('use a POST request');
                done();
            });
    });
});

describe('/add POST', () => {
    it('should return 5 when supplied with 2 and 3', (done) => {
        chai.request(server)
            .post('/add')
            .set('content-type', 'application/json')
            .send({var1: 2, var2: 3})
            .end((err, res) => {
                res.body.should.have.property('result').that.equals(5);
                done();
            });
    });
    it('should return 10 when supplied with 4 and 6', (done) => {
        chai.request(server)
            .post('/add')
            .set('content-type', 'application/json')
            .send({var1: 4, var2: 6})
            .end((err, res) => {
                res.body.should.have.property('result').that.equals(10);
                done();
            });
    });
    it('should return 400 for non-integer values', (done) =>{
        chai.request(server)
            .post('/add')
            .set('content-type', 'application/json')
            .send({var1: 'foo', var2: 'bar'})
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
});