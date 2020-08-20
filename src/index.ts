// import { User } from './User'
// import { Company } from './Company'
import { CustomMap } from './CustomMap'
import { User } from './User'

const user = new User()
const map = new CustomMap('map')

map.addUserMarker(user)
