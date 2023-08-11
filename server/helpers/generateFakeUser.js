const { faker } = require("@faker-js/faker")

module.exports = () => {
  const userID = faker.string.uuid()
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  const email = `${firstName + lastName}@gmail.com`
  const dateRegistered = faker.date.anytime()
  return {
    userID,
    firstName,
    lastName,
    email,
    dateRegistered,
  }
}
