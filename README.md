### Adding an image to project
Add image file to images folder

`src/images/index.js`
```javascript
  const images = {
    'filename': require('./filename.jpg'),
    'filename2': require('./filename2.jpg'),
  }
```
Import `ProjectImg` component, then use in project `body` JSX. Set `src` in component to be `filename`

`src/content/projects.js`
```javascript
import { ProjectImg } from './utils';

export const projects = {
 /** STRATEGY PROJECTS **/

  'dt-recruit': {
    title: 'Redesigned Recruitment Experience',
    body: (
      <div>
        <h3>Background</h3>
        <p>Some other text</p>
        <ProjectImg src='filename' />
      </div>
    )
  },
```
