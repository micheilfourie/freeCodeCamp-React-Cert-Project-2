import './App.css';
import Editor from './Editor';
import Preview from './Preview';
import { useState } from 'react';

const defaultText = `
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:

  Heres some code, \`<div></div>\`, between 2 backticks.

  \`\`\`
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`

  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!

  And if you want to get really crazy, even tables:

  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.

  - And of course there are lists.
    - Some are bulleted.
      - With different indentation levels.
          - That look like this.


  1. And there are numbered lists too.
  2. Use just 1s if you want!
  3. And last but not least, let's not forget embedded images:

  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`

function App() {

  const [editorClicked, setEditorClicked] = useState(false);
  const [previewClicked, setPreviewClicked] = useState(false);
  const [editorText, setEditorText] = useState(defaultText);

  const handleClick = (e) => {
    const target = e.target.className;

    if (target.includes('editor-btn')) {
      setEditorClicked(!editorClicked);
    } else if (target.includes('preview-btn')) {
      setPreviewClicked(!previewClicked);
    }
  }

  if (editorClicked) {
    return (
      <div className="App">
        <Editor handleClick={handleClick} editorClicked={editorClicked} editorText={editorText} setEditorText={setEditorText} />
      </div>
    )
  } else if (previewClicked) {
    return (
      <div className="App">
        <Preview handleClick={handleClick} previewClicked={previewClicked} editorText={editorText} />
      </div>
    )
  } else {
    return (
      <div className="App">
        <Editor handleClick={handleClick} editorClicked={editorClicked} editorText={editorText} setEditorText={setEditorText} />
        <Preview handleClick={handleClick} previewClicked={previewClicked} editorText={editorText} />
      </div >
    );
  }
}

export default App;
