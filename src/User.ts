import Faker from 'faker'

export class User {
  name: string
  email: string
  location: {
    lng: number
    lat: number
  }

  constructor() {
    this.name = Faker.name.firstName()

    // debug
    console.log(this.location)

    this.location = {
      lat: parseFloat(Faker.address.latitude()),
      lng: parseFloat(Faker.address.longitude())
    }
  }

  makerContent(): string {
    return `User name: ${this.name}`
  }
}
