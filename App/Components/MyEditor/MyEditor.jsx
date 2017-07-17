import css from './Scss/Main.scss';
import {Editor, EditorState,Modifier, RichUtils } from 'draft-js';
import InlineStylePlugin from './Plugins/InlineStylePlugin.jsx';
import BlockStylePlugin from './Plugins/BlockStylePlugin.jsx';
import UndoRedoPlugin from './Plugins/UndoRedoPlugin.jsx';
import {ColorPlugin,colorStyleMap} from './Plugins/ColorPlugin.jsx';
import {TextAlignPlugin,textAlignStyleMap} from './Plugins/TextAlignPlugin.jsx';
const customStyleMap = Object.assign(colorStyleMap,textAlignStyleMap);
class MyEditor extends React.Component {
	constructor(props){
		super(props);
        this.state = {editorState: EditorState.createEmpty()};
	}
    onChange(editorState){
        this.setState({editorState});
    }
    handleKeyCommand(command) {
        let newState = RichUtils.handleKeyCommand(this.state.editorState, command);
        if (newState) {
          this.onChange(newState);
          return 'handled';
        }
        return 'not-handled';
    }
    onTab(e){
        const maxDepth = 4;
        this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
    }
    focus(){
        this.refs.editor.focus();
    }
    toggleInlineStyle(inlineStyle) {
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
        );
    }
    toggleBlockStyle(blockType){
        this.onChange(
          RichUtils.toggleBlockType(
            this.state.editorState,
            blockType
          )
        );
    }
    toggleColor(toggledColor){
        const {editorState} = this.state;
        const selection = editorState.getSelection();

        // Let's just allow one color at a time. Turn off all active colors.
        const nextContentState = Object.keys(colorStyleMap)
        .reduce((contentState, color) => {
          return Modifier.removeInlineStyle(contentState, selection, color)
        }, editorState.getCurrentContent());

        let nextEditorState = EditorState.push(
            editorState,
            nextContentState,
            'change-inline-style'
        );


        const currentStyle = editorState.getCurrentInlineStyle();

        // Unset style override for current color.
        if (selection.isCollapsed()) {
            nextEditorState = currentStyle.reduce((state, color) => {
              return RichUtils.toggleInlineStyle(state, color);
            }, nextEditorState);
        }

        // If the color is being toggled on, apply it.
        if (!currentStyle.has(toggledColor)) {
            nextEditorState = RichUtils.toggleInlineStyle(
              nextEditorState,
              toggledColor
            );
        }

        this.onChange(nextEditorState);
    }
    render() {
        let className = 'editor';
        var contentState = this.state.editorState.getCurrentContent();
        if (!contentState.hasText()) {
          if (contentState.getBlockMap().first().getType() !== 'unstyled') {
            className += ' hide-placeholder';
          }
        }
        return (
            <div className="editor-wrapper" >
                <div className="editor-tools">
                    {this.props.inlineStyle==true?(
                        <InlineStylePlugin editorState={this.state.editorState} onToggle={this.toggleInlineStyle.bind(this)} />
                    ):''}
                    {this.props.blockStyle==true?(
                        <BlockStylePlugin editorState={this.state.editorState} onToggle={this.toggleBlockStyle.bind(this)}/>
                    ):''}
                    {this.props.color==true?(
                        <ColorPlugin editorState={this.state.editorState} onToggle={this.toggleColor.bind(this)} />
                    ):''}
                    {this.props.textAlignStyle==true?(
                        <TextAlignPlugin editor={this} editorState={this.state.editorState} onToggle={this.toggleInlineStyle.bind(this)} />
                    ):''}
                    {this.props.undoRedo==true?(
                        <UndoRedoPlugin editorState={this.state.editorState} EditorState={EditorState} onChange={this.onChange.bind(this)}/>
                    ):''}
                </div>
                <div className={className} onClick={this.focus.bind(this)}>
                    <Editor customStyleMap={customStyleMap} placeholder="内容区域" textAlignment="center" onTab={this.onTab.bind(this)} spellCheck={true} ref="editor" editorState={this.state.editorState} onChange={this.onChange.bind(this)}  handleKeyCommand={this.handleKeyCommand.bind(this)} />
                </div>
            </div>
        )
    }
}

MyEditor.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    undoRedo:React.PropTypes.bool,
    inlineStyle:React.PropTypes.bool,
    blockStyle:React.PropTypes.bool,
    color:React.PropTypes.bool,
    textAlignStyle:React.PropTypes.bool,
}
MyEditor.defaultProps={
    undoRedo:true,
    inlineStyle:true,
    blockStyle:true,
    color:true,
    textAlignStyle:true
};//设置默认属性

//导出组件
export default MyEditor;