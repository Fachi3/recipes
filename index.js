/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import App from './Cointeiners/App';

import {name as appName} from './app.json';

YellowBox.ignoreWarnings(['Remote debugger']);
AppRegistry.registerComponent(appName, () => App);
