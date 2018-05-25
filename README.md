# A Design Portfolio
Built with React and Redux

### Adding images
Add image file to images folder then update `images/index.js` with the
new file

`images/index.js`
```javascript
  const images = {
    'filename': require('./filename.jpg'),
    'filename2': require('./filename2.jpg'),
    ...
  }
```

### Setting the image on the home page
Set `bannerImg` in `content/home.js` to be the filename corresponding to
the image in `images/index.js`. The recommended aspect ratio for the
image is 2 by 3 at the moment.

`content/home.js`
```javascript
export const home = {
  bannerImg: 'filename',
  ...
}
```

## Categories

### Category Structure
In `content/categories/` each category is a Javascript object of the form

Field | Value
--- | ---
`title` | string
`thumbImg` | string\*
`projects` | array

\*this corresponds to the image `filename` in `images/index.js`

Each category has a list of project IDs which correspond to the keys in
`content/projects/index.js`.

## Projects

### Project Structure
In `content/projects/index.js`, `projects` is a Javascript object of the form

Field | Value
--- | ---
`[projectId]` | `project`
`[projectId2]` | `project2`
`[...]` | `...`

Each project is a Javascript object of the form

Field | Value
--- | ---
`title` | string
`externalLink` | string (optional: takes precedence over internal routing link if present)
`description` | string
`body`| JSX Expression
`bannerImg` | string\*
`thumbImg` | string\*

\*this corresponds to the image `filename` in `images/index.js`

The banner image must have a 1x3 aspect ratio. If no image is
provided, a grey background is instead used.

### Adding an image

Import `ProjectImg` component, then use in project `body` JSX. Set `src` in component to be `filename` from `images/index.js`

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
Import `Video` component, then use in project `body` JSX. Set `src` in component to be the URL video source

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
