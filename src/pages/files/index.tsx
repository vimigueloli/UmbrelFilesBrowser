import useServerFilesHook from "@/hooks/serverFilesHook/useServerFilesHook"
import { Text, TouchableHighlight, View } from "react-native"

const FilesPage = () => {
    const { listBaseFiles } = useServerFilesHook()
    return (<View>
        <Text>
            Files Page
        </Text>
        <TouchableHighlight onPress={listBaseFiles}>
            <Text>
                List Base Files
            </Text>
        </TouchableHighlight>
    </View>)
}

export { FilesPage }