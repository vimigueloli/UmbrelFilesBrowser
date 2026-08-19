import { useStorageServerHook } from '@/hooks/storageServerHook/useStorageServerHook';
import axios from 'axios';
import { loginRequestDTO, loginResponseDTO } from './login.dto';

const postServerLogin = async ({ password }: loginRequestDTO): Promise<loginResponseDTO> => {
    const { getStorageServer } = useStorageServerHook()
    const { server } = await getStorageServer()
    const response = await axios.post(`http://${server}:2000/v1/account/login?origin=host&app=file-browser&path=%2Ffiles%2F`, {
        password: password,
        topToken: ''
    })
    console.log(response.headers)
    return String(response.headers.Cookie)
}

export { postServerLogin }