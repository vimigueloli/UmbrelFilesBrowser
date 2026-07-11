import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { KeyboardScrollProps } from "./types"

const KeyboardScroll = ({ children }: KeyboardScrollProps) => {
    return (
        <KeyboardAwareScrollView
            enableOnAndroid={true} // Garante o mesmo comportamento fluido no Android
            extraScrollHeight={15} // Espaço extra entre o teclado e o input
        >
            {children}
        </KeyboardAwareScrollView>
    )
}

export { KeyboardScroll }