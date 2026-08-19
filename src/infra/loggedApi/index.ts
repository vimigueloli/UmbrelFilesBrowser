import { storage } from "@/hooks/storageServerHook/useStorageServerHook";
import axios from "axios";

const loggedApi = () => {
    const { getItem } = storage
    const server = getItem('server')
    const auth = getItem('auth')
    const cookie = getItem('cookie')
    return axios.create({
        baseURL: `http://${server}:7421/api/resources/`,
        headers: {
            'X-Auth': `${auth}`,
            'Cookie': `UMBREL_PROXY_TOKEN=${cookie}; auth=${auth}`
        }
    })
}

export { loggedApi }