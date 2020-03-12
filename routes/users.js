const { Router } = require('express');
const shortid = require('shortid');
const jwt = require('jsonwebtoken');

const db = require('../db/index');
const secret = 'eventHubsSecretKey1627';

const router = Router();

db.connect(err => {
  if(err) {
    throw err;
  }
  console.log('MySQL is connected...');
});

router.get('/', function(req, res, next) {
  res.send('Hello from the users route');
});

router.post('/register', (request, response) => {
  const {name, email, password} = request.body;
  const userId = shortid.generate();

  db.query(
      'insert into users (userId, email, name, password) values (?, ?, ?, ?)',
      [userId, email, name, password],
      (err, res) => {
        if (err) console.log(err);

        if (res) {
          let payload = {subject: userId}
          const token = jwt.sign(payload, secret, {expiresIn: '10h'});

          response
            .status(200)
            .header('x-access-token', token)
            .json({message: 'Registration Successful', userId});

          // response.status(200).json({userId, name});
        }
      }
  )
});

router.post('/login', (request, response) => {
  const {email, password} = request.body;

  db.query(
      'select userId, name, email from users where email = ? and password = ?',
      [email, password],
      (err, res) => {
        if (err) console.log(err);

        if (res) {
          if (res.length >= 1) {
            const userId = res[0].userId;

            let payload = {subject: userId};
            const token = jwt.sign(payload, secret, {expiresIn: '10h'});

            response
              .status(200)
              .header('x-access-token', token)
              .json({message: 'Auth Successful', userId});
          }
          else {
            response.json({message: 'User does not exist'});
          }
        }
      }
  )
});

module.exports = router;
