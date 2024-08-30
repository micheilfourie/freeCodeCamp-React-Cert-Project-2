import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';
import DOMPurify from 'isomorphic-dompurify';

const options = {
    breaks: true,
};

const Preview = ({ handleClick, previewClicked, editorText }) => {

    const html = DOMPurify.sanitize(marked.parse(editorText, options));

    return (
        <div id='preview-container'>
            <span id='preview-header'>
                <strong>Preview</strong>
                {!previewClicked ?
                    <i
                        className="preview-btn fa-solid fa-maximize"
                        onClick={(e) => handleClick(e)}>
                    </i> :
                    <i
                        className="preview-btn fa-solid fa-down-left-and-up-right-to-center"
                        onClick={(e) => handleClick(e)}>
                    </i>
                }
            </span>
            <div id="preview" dangerouslySetInnerHTML={{ __html: html }} />
        </div >
    )
}

export default Preview
