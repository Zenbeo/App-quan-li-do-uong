/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import Login from './Apps/LoginScreen/Login';
import Product from './Apps/Products/Product';
import TableProduct from './Apps/TableScreen/TableProduct';
import Navigation from './Navigation/Navigation';

// AppRegistry.registerComponent(appName, () => Navigation);
AppRegistry.registerComponent(appName, () => Navigation);