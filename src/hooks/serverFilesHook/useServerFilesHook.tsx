import { getFiles } from "@/services/files/get-files"

const useServerFilesHook = () => {
    const listBaseFiles = async () => {
        try {
            const files = await getFiles()
            console.log('Files retrieved:', files)
            return files
        } catch (error) {
            console.error('Error retrieving files:', error.message)
            throw error
        }
    }
    return {
        listBaseFiles
    }
}

export default useServerFilesHook