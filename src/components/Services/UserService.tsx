import axios from 'axios'

const USERS_REST_API_URL = 'localhost:8080/api/users'

class UserService {
    getUsers() {
        axios.get(USERS_REST_API_URL)
    }
    
}

console.log(UserService)

export default new UserService()