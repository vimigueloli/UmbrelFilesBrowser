import { storage } from '@/hooks/storageServerHook/useStorageServerHook';
import { loggedApi } from '@/infra/loggedApi';

const getFiles = async (subPath?: string) => {
    const { getItem } = storage
    const path = await getItem('path')
    const finalPath = String(subPath ?? path)
    const response = await loggedApi().get(finalPath)
    return response.data
}

export { getFiles }