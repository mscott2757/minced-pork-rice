import React from 'react';
import { ProjectImg } from './utils';

const exampleText1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies tellus est, id aliquet orci rhoncus rutrum. Aliquam id enim mollis, ornare dolor sit amet, fringilla massa. Maecenas congue rhoncus dolor et consequat. Curabitur eget scelerisque tellus. Quisque posuere lectus ut ipsum finibus lobortis.';

const exampleText2 = 'Ut aliquet hendrerit velit eu tempor. Morbi lacus lacus, consectetur id odio at, congue auctor purus. Vivamus a ex enim. Donec aliquam fringilla sapien id mattis. Phasellus tristique eget odio non porttitor. Morbi fringilla magna vitae ex porttitor, sit amet pretium ipsum posuere.';

export const projects = {
  'fishbowl': {
    title: 'fishbowl',
    body: (
      <div>
        <h3>Background</h3>
        <p>{exampleText1}</p>
        <ProjectImg src='test-square' />
        <h3>Problem Statement</h3>
        <p>{exampleText2}</p>
      </div>
    )
  },
  'dt-recruit': {
    title: 'Design Thinking',
    body: (
      <div>
        <h3>Background</h3>
        <p>{exampleText1}</p>
        <h3>Problem Statement</h3>
        <p>{exampleText2}</p>
      </div>
    )
  }
}
