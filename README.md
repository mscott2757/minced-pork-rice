## Projects

### Project Structure
In `src/content/projects.js`, `projects` is a Javascript object of the form

Field | Value
--- | ---
`[projectId]` | `project`
`[projectId2]` | `project2`
`[...]` | `...`

Each project is a Javascript object of the form

Field | Value
--- | ---
`title` | string
`body`| JSX Expression

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
  'dt-recruit': {
    title: 'Redesigned Recruitment Experience',
    body: (
      <div>
        <h3>Background</h3>
        <p>Some other text</p>
        <ProjectImg src='filename' />
      </div>
    )
  }
}
```

### Adding a quote to project
Import `Quote` component, then use in project `body` JSX as a wrapper
for paragraphs.

`src/content/projects.js`
```javascript
import { ProjectImg } from './utils';

export const projects = {
  'dt-recruit': {
    title: 'Redesigned Recruitment Experience',
    body: (
      <div>
        <h3>Background</h3>
        <Quote>
          <p>Some other text</p>
          <p>Some more text</p>
        </Quote>
      </div>
    )
  }
}
```
