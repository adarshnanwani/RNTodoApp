import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


const startTabs = () => {
    Promise.all([
        Icon.getImageSource("md-map", 30),
        Icon.getImageSource("ios-share-alt", 30)
    ]).then(imgs => {
        Navigation.setRoot({
            root: {
                bottomTabs: {
                    children: [{
                        stack: {
                            children: [{
                                component: {
                                    name: 'awesomeplaces.FindPlaceScreen',
                                    passProps: {
                                        text: 'This is tab FindPlaceScreen'
                                    }
                                }
                            }],
                            options: {
                                bottomTab: {
                                    title: 'Find Place',
                                    icon: imgs[0]
                                }
                            }
                        }
                    },
                    {
                        component: {
                            name: 'awesomeplaces.SharePlaceScreen',
                            passProps: {
                                text: 'This is tab SharePlaceScreen'
                            },
                            options: {
                                bottomTab: {
                                    title: 'Share Place',
                                    icon: imgs[1]
                                }
                            }
                        }
                    }]
                }
            }
        });
    });


    
}

export default startTabs;

