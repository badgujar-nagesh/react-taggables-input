# React Taggables Input

React Taggables Input adds a simple comma separated tags in the input. This version can add and remove the tags. It provides the validation for each tag.

![Screenshot](https://raw.githubusercontent.com/badgujar-nagesh/react-taggables-input/master/tag-screnshot.png)

## Installation

Installation can be done using the [npm install] command:

```
npm install --save react-taggables-input
```

## Usage

Here's a sample implementation that initializes the component with a list of preselected `tags`.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import TagInput from 'react-taggables-input';
import 'react-taggables-input/dist/tags.css';

function App() {
    var [ tags, setTags ] = useState([]);

    useEffect(() => {
        setTags(['one']);
    }, []);

    function onChange(tags) {
        setTags(tags);
    }

    function validateTag(tag) {
        return true;
    }

    return (
        <div>
            <h3>Tags</h3>
            <div>
                <TagInput value={tags} onChange={onChange} onEnter={validateTag} />
            </div>
        </div>
    );
}
export default App;

```


#### value (optional)

An array of selected tags.

#### placeholder (optional)

It is the text to show as placeholder of the input.

#### onChange (required)

Callback function which gets the array of entered tags.

#### onEnter (required)

Callback function which gets the single tag after user enters, its userful for validating the tag.