import { faker } from '@faker-js/faker';

export function generalDataFixed() {
  return {
    name: 'manuel',
    valideEmail: 'manuel1@gmail.com',
    password: '123456',
    country: 'United States',
  

    
  };
}


export function generalDataRandom() {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    day: faker.number.int({ min: 1, max: 28 }).toString(),
    month:  faker.number.int({ min: 1, max: 12 }).toString(),
    year: faker.number.int({ min: 1900, max: 2000 }).toString(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    company: faker.company.name(),
    address: faker.location.streetAddress(),
    country: faker.location.country(),
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
    mobileNumber: faker.phone.number()
  };
}