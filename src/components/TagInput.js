import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Tag = props => <span className="tag" {...props} />
const Remove = props => <button className="remove" {...props} />

class TagInput extends Component {

    constructor (props) {
        super(props);
        this.state = {
            inputTag: '',
            tags: []
        }
    }

    componentDidMount() {
        this.setState({ tags: this.props.value });
    }

    componentDidUpdate(prevProps) {
        if(prevProps.value.toString() !== this.props.value.toString()) {
            this.setState({tags: this.props.value});
        }
    }
  
    handleKeyDown = e => {
        let value = e.target.value;
        if (e.keyCode === 13 && value !== '')  {
            e.preventDefault();
            if(this.onEnter(value)) {
                let inputTag = this.state.inputTag.trim();
                let { tags } = this.state;

                tags.push(inputTag);
                this.setState({ inputTag: '', tags });
                this.props.onChange(tags);
            }
        }
    }

    onEnter = tag => {
        let { onEnter } = this.props;
        if(typeof onEnter === 'function') {
            return onEnter(tag);
        }
        return true;
    }
  
    handleRemoveTag = (e, index) => {
        let { tags } = this.state;
        tags.splice(index, 1);
        this.setState({ inputTag: '', tags });
        this.props.onChange(tags);
    }
  
    render () {
        let { tags, inputTag } = this.state;
        let { placeholder } = this.props;
        return (
            <div className="tags-input">
                {tags && tags.map((tag, index) => (
                    <Tag key={index}>
                        {tag}
                        <Remove onClick={e => this.handleRemoveTag(e, index)} />
                    </Tag>
                ))}
                <input type="text" placeholder={placeholder} value={inputTag}
                    onChange={e => this.setState({ inputTag: e.target.value })}
                    onKeyDown={this.handleKeyDown} />
            </div>
        )
    }
}
TagInput.defaultProps = {
    placeholder: 'Enter Tags',
    value: []
};
TagInput.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.array,
    onChange: PropTypes.func.isRequired,
    onEnter: PropTypes.func
};
export default TagInput;