import { registerReactControllerComponents } from '@symfony/ux-react';
import './bootstrap.js';
import './styles/app.scss';

require('bootstrap');

registerReactControllerComponents(require.context('./react/controllers', true, /\.(j|t)sx?$/));