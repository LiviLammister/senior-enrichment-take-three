const chance = require('chance')(123);
const toonAvatar = require('cartoon-avatar');
const Promise = require('bluebird');

const db = require('../server/db')
const { Campus, Student } = require('../server/db/models')

const numStudents = 100;

const emails = chance.unique(chance.email, numStudents);

function doTimes (n, fn) {
  const results = [];
  while (n--) {
    results.push(fn());
  }
  return results;
}

function randPhoto (gender) {
  gender = gender.toLowerCase();
  const id = chance.natural({
    min: 1,
    max: gender === 'female' ? 114 : 129
  });
  return toonAvatar.generate_avatar({ gender: gender, id: id });
}

function randStudent (campuses) {
  const gender = chance.gender();
  const selectedCampus = chance.pick(campuses);
  return Student.build({
    firstName: chance.first({gender: gender}),
    lastName: chance.last(),
    imageUrl: randPhoto(gender),
    email: emails.pop(),
    gpa: (Math.random() * 4).toFixed(2),
    campusId : selectedCampus.id,
  });
}

function generateCampuses() {
  const campuses = [
    Campus.build({
      name: 'Deathstar',
      imageUrl: './space-station.png',
      description: 'That\'s no Moon campus...'
    }),
    Campus.build({
      name: 'Europa',
      imageUrl: './europa.png',
      description: 'Our Europa-pean campus.',
    }),
    Campus.build({
      name: 'Jupiter',
      imageUrl: './jupiter.png',
      description: 'Our biggest campus.',
    }),
    Campus.build({
      name: 'Mars',
      imageUrl: './mars.png',
      description: 'Apparently men are from here...',
    }),
    Campus.build({
      name: 'Mercury',
      imageUrl: './mercury.png',
      description: 'Former home of our dermatology school.',
    }),
    Campus.build({
      name: 'Moon',
      imageUrl: './moon.png',
      description: 'Home of the MHIAJ School of Caseiculture and Tyromancy.',
    }),
    Campus.build({
      name: 'Neptune',
      imageUrl: './neptune.png',
      description: 'Trident and true.',
    }),
    Campus.build({
      name: 'Earth',
      imageUrl: './planet-earth.png',
      description: 'The only campus with running water.',
    }),
    Campus.build({
      name: 'Saturn',
      imageUrl: './saturn.png',
      description: 'Widely considered our most beautiful campus.',
    }),
    Campus.build({
      name: 'Uranus',
      imageUrl: './uranus.png',
      description: 'The "butt" of most campus jokes',
    }),
    Campus.build({
      name: 'Venus',
      imageUrl: './venus.png',
      description: 'Apparently women are from here...'
    }),
  ];
  return campuses;
}


function generateStudents (campuses) {
  return doTimes(numStudents, () => randStudent(campuses));
}

function createCampuses() {
  return Promise.map(generateCampuses(), campus => campus.save())
}

function createStudents(campuses) {
  return Promise.map(generateStudents(campuses), student => student.save())
}

function seed () {
  return createCampuses()
    .then(campuses => createStudents(campuses))
}

db.sync({force: true})
  .then(() => {
    console.log('Seeding database');
    return seed();
  })
  .then(() => console.log('Seeding successful'))
  .catch(err => {
    console.error('Error while seeding');
    console.error(err.stack);
  })
  .finally(() => {
    db.close();
    return null;
  });
