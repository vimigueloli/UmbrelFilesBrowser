import { useState } from "react"
import { useStorageServerHook } from "../storageServerHook/useStorageServerHook";
import { useNavigation } from '@react-navigation/native';
import { useLoginHook } from "../loginHook/useLoginHook";

const useHomeServerHook = () => {
    const [server, setServer] = useState<string>('')
    const [path, setPath] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { setStorageServer } = useStorageServerHook()
    const { handleLogin } = useLoginHook()
    const navigation = useNavigation()
    const updateServer = (newServer: string) => {
        setServer(newServer)
    }
    const updatePath = (newPath: string) => {
        setPath(newPath)
    }
    const updatePassword = (newPassword: string) => {
        setPassword(newPassword)
    }

    const saveServerData = async () => {
        await setStorageServer(server, path)
        await handleLogin(password)
        navigation.navigate('Files' as never)
    };


    return {
        server,
        path,
        password,
        updateServer,
        updatePath,
        updatePassword,
        saveServerData
    }
}

export { useHomeServerHook }