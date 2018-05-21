# A Design Portfolio
Built with React and Redux

## Categories

### Category Structure
In `src/content/categories/` each category is a Javascript object of the form

Field | Value
--- | ---
`id` | string unique identifier
`title` | string
`projects` | array

Each category has a list of projects where each project is a Javascript object of the form

Field | Value
--- | ---
`id` | string unique identifier
`title` | string
`description` | string
`imgSrc` | imported image
`externalLink` | string (optional: takes precedence over internal routing link if present)

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
`imgSrc` | \*imported image

\*The background image must have a 1x3 aspect ratio. If no image is
provided, a grey background is instead used.

### Adding an image
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

### Adding a quote
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

### Adding a video
Import `Video` component, then use in project `body` JSX. Set `src` in component to be the video source

`src/content/projects.js`
```javascript
import { Video } from './utils';

export const projects = {
  'dt-recruit': {
    title: 'Redesigned Recruitment Experience',
    body: (
      <div>
        <h3>Background</h3>
        <p>Some other text</p>
        <Video src='videoSrc' />
      </div>
    )
  }
}
```
