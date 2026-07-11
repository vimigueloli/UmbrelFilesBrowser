import { useStorageServerHook } from '@/hooks/storageServerHook/useStorageServerHook';
import axios from 'axios';

const getFiles = async () => {
    const { getStorageServer } = useStorageServerHook()
    const { server, path } = await getStorageServer()
    const response = await axios.get(`http://${server}:7421/api/resources/${path}`)
    return response.data
}

export { getFiles }