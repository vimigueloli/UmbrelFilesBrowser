import { useState } from "react"
import { useStorageServerHook } from "../storageServerHook/useStorageServerHook";
import { useNavigation } from '@react-navigation/native';

const useHomeServerHook = () => {
    const [server, setServer] = useState<string>('')
    const [path, setPath] = useState<string>('')
    const { setStorageServer } = useStorageServerHook()
    const navigation = useNavigation()
    const updateServer = (newServer: string) => {
        setServer(newServer)
    }
    const updatePath = (newPath: string) => {
        setPath(newPath)
    }

    const saveServerData = async () => {
        navigation.navigate('Files' as never)
        await setStorageServer(server, path)
    };


    return {
        server,
        path,
        updateServer,
        updatePath,
        saveServerData
    }
}

export { useHomeServerHook }