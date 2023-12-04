import { Card } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import styles from './SuggestItem.module.css';
import { useAssistantContext } from '../../../context/AssistantProvider';
import { getDataConversation, getHistoryConversation, setLoading } from '../../../context/AssistantAction';
import { getDataResponseApi } from '../../../api/api';
import { RoleType } from '../../../interface/interface';
const SuggestItem = ({ suggest }: { suggest: string }): JSX.Element => {
  const { dispatch } = useAssistantContext();
  const historyConversation: RoleType[] = [];
  const handleGetDataWithSuggest = (): void => {
    const suggestQuestion =
      'đặt duy nhất 1 câu hỏi mở (dont ask yes or no questions) để lấy thông tin về ý tưởng của user và làm rõ ý tưởng của họ về: ';
    historyConversation.push({ role: 'user', content: suggestQuestion + suggest });
    dispatch(setLoading(true));
    dispatch(getHistoryConversation({ role: 'user', content: suggestQuestion + suggest }));
    getDataResponseApi(historyConversation)
      .then((gptResponse) => {
        dispatch(getDataConversation({ id: Math.random() * 1000, userInput: suggest, gptResponse }));
        dispatch(getHistoryConversation({ role: 'system', content: gptResponse }));
        dispatch(setLoading(false));
      })
      .catch(() => dispatch(setLoading(false)));
  };
  return (
    <Card size='small' className={styles.suggestItem} onClick={handleGetDataWithSuggest}>
      <p className='title-header'>{suggest}</p>
      <SendOutlined className={styles.iconSend} />
    </Card>
  );
};

export default SuggestItem;
