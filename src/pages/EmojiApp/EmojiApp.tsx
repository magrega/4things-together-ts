import { useState, FC } from 'react';
import EmojiContainer from './Emoji/EmojiContainer/EmojiContainer';
import EmojiLimit from './Emoji/EmojiLimit/EmojiLimit';
import Form from './Emoji/Form/Form';
import './EmojiApp.css';

const EmojiApp: FC = () => {
  const [formValue, setFormValue] = useState('');
  const [limit, setLimit] = useState<number>(15);

  const onFormChange = (e: React.ChangeEvent<{ value: string }>) => {
    const search = e.target.value;
    setFormValue(search);
  }

  const getSelectedDropdownValue = (e: React.ChangeEvent<{ value: string }>) => {
    setLimit(+e.target.value)
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
