import axios from "axios"

const useAuth = () => {
  const auth = (url, data, key = {}) =>{
    axios.post(url, data, key)
    .then(res => {
        console.log(res.data);
        'token' in res.data && localStorage.setItem
        ('token', res.data.token)
    }
    )
    .catch(err => console.log(err))
  }
  return auth
}

export default useAuth