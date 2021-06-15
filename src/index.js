import navbar from './navbar';
import myHome from './myHome';
import menu from './menu';

const body = document.getElementsByTagName('body')[0];
body.prepend(navbar());
const contentDiv = document.getElementById('content');
contentDiv.append(myHome());
contentDiv.append(menu());