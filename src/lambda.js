import axios from 'axios'
import config from './config'

export default {
    async getSignedURL (file) {
        let endpoint = config.AWS_LAMBDA_GETSIGNEDURL_ENDPOINT
        let payload = {
            filePath: file.name,
            contentType: file.type
        }
        return axios.post(endpoint, payload, {
            headers: {
              'x-api-key': 'Wu0H69Vsavvxkul9po17aA6H7WXbxltal1j3DM8b'
            }
        })
        .catch ((err) => {
            console(err)
            return Promise.reject('/')
        })
    }
}