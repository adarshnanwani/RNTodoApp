import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './src/store/configureStore';
import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';

const store = configureStore();

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);


//Register Screens -- Should be in App.js 
Navigation.registerComponent(`awesomeplaces.WelcomeScreen`, () => RNRedux);

Navigation.registerComponentWithRedux("awesomeplaces.AuthScreen", () => AuthScreen, Provider, store);

Navigation.registerComponentWithRedux(`awesomeplaces.SharePlaceScreen`, () => SharePlaceScreen, Provider, store);

Navigation.registerComponentWithRedux(`awesomeplaces.FindPlaceScreen`, () => FindPlaceScreen, Provider, store);

Navigation.registerComponentWithRedux(`awesomeplaces.PlaceDetailScreen`, () => PlaceDetailScreen, Provider, store);

// Navigation.events().registerAppLaunchedListener(() => {
//     Navigation.setRoot({
//         root: {
//             component: {
//                 name: "navigation.playground.WelcomeScreen"
//             }
//         }
//     });
// });


//Start the app
Navigation.setRoot({
    root: {
        stack: {
            children: [{
                component: {
                    name: 'awesomeplaces.AuthScreen'
                }
            }],
            options: {
                topBar: {
                    title: {
                        text: "Login"
                    }
                }
            }
        }
    }
});