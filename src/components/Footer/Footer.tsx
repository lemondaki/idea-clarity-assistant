import { useState } from 'react';
import { Card, Input } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { getDataResponseApi } from '../../api/api';
import { useAssistantContext } from '../../context/AssistantProvider';
import {
  getDataConversation,
  getHistoryConversation,
  hideSummarizeIdea,
  setLoading
} from '../../context/AssistantAction';
import styles from './Footer.module.css';
const Footer = (): JSX.Element => {
  const [userInput, setUserInput] = useState<string>('');
  const {
    state: { historyConversation, isSummurize },
    dispatch
  } = useAssistantContext();
  const suggestQuestion =
    "Suggest an extended question in the user's language (dont ask yes or no questions) to get information about the user's ideas and clarify their ideas about:";
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleSummurizeIdea = () => {
    dispatch(hideSummarizeIdea());
    const newRequest = {
      role: 'user',
      content: 'tóm tắt lại ý tưởng của tôi'
    };
    dispatch(setLoading(true));
    dispatch(getHistoryConversation(newRequest));
    getDataResponseApi([...historyConversation, newRequest])
      .then((gptResponse) => {
        dispatch(getDataConversation({ id: Math.random() * 1000, userInput: newRequest.content, gptResponse }));
        dispatch(setLoading(false));
        dispatch(getHistoryConversation({ role: 'system', content: gptResponse }));
      })
      .catch(() => dispatch(setLoading(false)));
  };

  const handleSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newRequest = {
      role: 'user',
      content: historyConversation.length ? userInput : suggestQuestion + userInput
    };
    dispatch(setLoading(true));
    dispatch(getHistoryConversation(newRequest));
    setUserInput('');
    getDataResponseApi([...historyConversation, newRequest])
      .then((gptResponse) => {
        dispatch(getDataConversation({ id: Math.random() * 1000, userInput, gptResponse }));
        dispatch(setLoading(false));
        dispatch(getHistoryConversation({ role: 'system', content: gptResponse }));
      })
      .catch(() => dispatch(setLoading(false)));
  };

  return (
    <footer>
      <form onSubmit={handleSendMessage}>
        {isSummurize && historyConversation.length > 5 && (
          <Card size='small' className={styles.suggestItem} onClick={handleSummurizeIdea}>
            <p className='title-header'>Click to Summarize your idea</p>
            <SendOutlined className={styles.iconSend} />
          </Card>
        )}
        <Input
          placeholder='What is your idea?'
          onChange={handleChangeInput}
          value={userInput}
          suffix={<SendOutlined />}
        />
      </form>
    </footer>
  );
};

export default Footer;
