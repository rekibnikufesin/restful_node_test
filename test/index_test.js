'use strict';

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let server = require('../app');

chai.use(chaiHttp);

describe('/GET', () => {
    it('returns the homepage', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.contain('Welcome to Express');
                done();
            });
    });
});