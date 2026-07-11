import { KeyboardScroll } from "@/components/KeyboardScroll"
import { useHomeServerHook } from "@/hooks/homeServerHook/useHomeServerHook"
import { Text, TextInput, TouchableHighlight, View } from "react-native"

const Home = () => {
    const {
        path,
        server,
        updatePath,
        updateServer,
        saveServerData
    } = useHomeServerHook()
    return (
        <KeyboardScroll>
            <View className='bg-gray-950 h-screen w-screen flex justify-center flex-col items-center px-12 gap-8'>
                <View className='flex flex-col gap-2 w-full justify-center items-center'>
                    <Text className='text-white'>
                        Server IP
                    </Text>
                    <TextInput
                        className='border border-white rounded-xl px-3 w-full h-12 text-white placeholder:text-white/30'
                        placeholder='Enter server IP'
                        keyboardType="numeric"
                        onChangeText={updateServer}
                        value={server}
                    />
                </View>
                <View className='flex flex-col gap-2 w-full justify-center items-center'>
                    <Text className='text-white'>
                        Path
                    </Text>
                    <TextInput
                        className='border border-white rounded-xl px-3 w-full h-12 text-white placeholder:text-white/30'
                        placeholder='Enter base path'
                        onChangeText={updatePath}
                        value={path}
                    />
                </View>
                <View className='w-full'>
                    <TouchableHighlight className='w-full h-12 bg-indigo-900 rounded-xl flex justify-center items-center'
                        onPress={saveServerData}
                    >
                        <Text className='text-white'>
                            Access
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        </KeyboardScroll>
    )
}

export { Home }