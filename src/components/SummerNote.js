import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';

const EditorComponent = () => {
  return (
    <ReactSummernoteLite
      id="sample"
      onInit={({ note }) => {
        note.summernote('pasteHTML', '<span style="font-size:30px">Hello, world for 30px</span>');
      }}
    />
  );
};

export default EditorComponent;