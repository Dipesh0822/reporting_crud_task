
import { Report, User } from './models'

const dbConfig = () => Promise.all([
    User.sync({ alter: true }),
    Report.sync({ alter: true })
]);

export default dbConfig 