import { FilesPage } from '@/pages/files';
import { Home } from '@/pages/home';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const RootStack = createNativeStackNavigator({
    screens: {
        Home: {
            screen: Home,
            options: { title: 'Welcome' },
        },
        Files: {
            screen: FilesPage,
            options: { title: 'Files' },
        }
    },
});

export { RootStack }