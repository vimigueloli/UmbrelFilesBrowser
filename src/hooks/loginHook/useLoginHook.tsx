import { postServerLogin } from "@/services/server/login"
import { storage } from "../storageServerHook/useStorageServerHook"
import { postLoginBrowser } from "@/services/server/login-browser"

const useLoginHook = () => {
    const { setItem } = storage
    const handleLogin = async (password: string) => {
        const response = await postServerLogin({ password })
        setItem('cookie', response)
        const loginResponse = await postLoginBrowser({ cookie: response })
        setItem('auth', loginResponse)
    }

    return { handleLogin }
}

export { useLoginHook }