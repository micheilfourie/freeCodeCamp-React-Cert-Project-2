const Editor = ({ handleClick, editorClicked, editorText, setEditorText }) => {

    return (
        <div id='editor-container'>
            <span id='editor-header'>
                <strong>Editor</strong>
                {!editorClicked ?
                    <i
                        className="editor-btn fa-solid fa-maximize"
                        onClick={(e) => handleClick(e)}>
                    </i> :
                    <i
                        className="editor-btn fa-solid fa-down-left-and-up-right-to-center"
                        onClick={(e) => handleClick(e)}>
                    </i>
                }
            </span>
            {!editorClicked ?
                <textarea
                    id="editor"
                    defaultValue={editorText}
                    onChange={(e) => setEditorText(e.target.value)}>
                </textarea> :
                <textarea
                    style={{ height: '87vh' }}
                    id="editor" defaultValue={editorText}
                    onChange={(e) => setEditorText(e.target.value)}>
                </textarea>
            }
        </div>
    )
}

export default Editor
