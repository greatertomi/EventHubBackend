const { Router } = require('express');

const userAuth = require('../middlewares/user_auth');

const router = Router();

router.get('/regular', (req, res) => {
  let events = [
    {
      id: 1,
      name: 'Auto Show',
      description: 'Show for auto makers',
      date: '2015-04-23T18:25:43.5112'
    },
    {
      id: 2,
      name: 'Phone Show',
      description: 'Show for phone makers',
      date: '2015-04-23T18:25:43.5112'
    },
    {
      id: 3,
      name: 'Shoe Show',
      description: 'Show for shoe makers',
      date: '2015-04-23T18:25:43.5112'
    },
    {
      id: 4,
      name: 'Computer Show',
      description: 'Show for computer makers',
      date: '2015-04-23T18:25:43.5112'
    },
    {
      id: 5,
      name: 'Clothes Show',
      description: 'Show for cloth makers',
      date: '2015-04-23T18:25:43.5112'
    },
    {
      id: 6,
      name: 'Sand Show',
      description: 'Show for sand makers',
      date: '2015-04-23T18:25:43.5112'
    }
  ];
  res.json(events);
});

router.get('/special', userAuth, (req, res) => {
  let events = [
    {
      id: 1,
      name: 'Premier Auto Show',
      description: 'Show for auto makers',
      date: '2015-04-23T18:25:43.5112'
    },
    {
      id: 2,
      name: 'Premier Phone Show',
      description: 'Show for phone makers',
      date: '2015-04-23T18:25:43.5112'
    },
    {
      id: 3,
      name: 'Premier Shoe Show',
      description: 'Show for shoe makers',
      date: '2015-04-23T18:25:43.5112'
    },
    {
      id: 4,
      name: 'Premier Computer Show',
      description: 'Show for computer makers',
      date: '2015-04-23T18:25:43.5112'
    },
    {
      id: 5,
      name: 'Premier Clothes Show',
      description: 'Show for cloth makers',
      date: '2015-04-23T18:25:43.5112'
    },
    {
      id: 6,
      name: 'Premier Sand Show',
      description: 'Show for sand makers',
      date: '2015-04-23T18:25:43.5112'
    }
  ];
  res.json(events);
});

module.exports = router;
