import { useState, FC, ChangeEvent } from 'react';
import EmojiContainer from './Emoji/EmojiContainer/EmojiContainer';
import EmojiLimit from './Emoji/EmojiLimit/EmojiLimit';
import Form from './Emoji/Form/Form';
import './EmojiApp.css';

const EmojiApp: FC = () => {
  const [formValue, setFormValue] = useState('');
  const [limit, setLimit] = useState<number>(15);

  const onFormChange = (e: ChangeEvent<{ value: string }>) => {
    const search = e.target.value;
    setFormValue(search);
  }

  const getSelectedDropdownValue = (e: ChangeEvent<{ value: string }>) => {
    setLimit(Number(e.target.value))
  }

  return (
    <div className="emoji-app">
      <EmojiLimit getSelectedValue={getSelectedDropdownValue} />
      <Form formValue={formValue} onFormChange={onFormChange} />
      <EmojiContainer search={formValue} limit={limit} />
    </div>
  );
}

export default EmojiApp;
