import { useStorageServerHook } from '@/hooks/storageServerHook/useStorageServerHook';
import axios from 'axios';
import { loginBrowserRequestDTO, loginResponseDTO } from './loginBrowser.dto';

const postLoginBrowser = async ({ cookie }: loginBrowserRequestDTO): Promise<loginResponseDTO> => {
    const { getStorageServer } = useStorageServerHook()
    const { server } = await getStorageServer()
    const response = await axios.post(`http://${server}:7421/api/login`, {
        reacptcha: '',
        password: '',
        username: '',
    }, {
        headers: {
            'Cookie': cookie
        }
    })
    console.log('cookie final', response.data)
    return response.data
}

export { postLoginBrowser }