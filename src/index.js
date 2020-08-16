import { join } from 'lodash';

function createSpan(){
    const element = document.createElement('span');
    element.innerHTML = join(['Hello', 'DllPlugindddd'], ' , ');
    return element;
}

document.querySelector('#root').appendChild(createSpan());