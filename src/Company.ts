import Faker from 'faker'

export class Company {
  companyName: string
  catchPhrase: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.companyName = Faker.company.companyName()
    this.catchPhrase = Faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(Faker.address.latitude()),
      lng: parseFloat(Faker.address.longitude())
    }
  }

  makerContent(): string {
    return `
    <div>
      <h1>
        Company name: ${this.companyName}
      </h1>
      <h3>
        Company catch phrase: ${this.catchPhrase}
      </h3>
    </div>
    `
  }
}