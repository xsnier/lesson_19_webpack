import '../styles/index.scss';


if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('webpack starterkit');

import {Model} from './model';
import {View} from './view';
import {Controller} from './controller';

const app = new Controller(new Model(), new View());







