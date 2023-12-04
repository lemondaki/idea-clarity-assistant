import { PlusOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { useAssistantContext } from '../../context/AssistantProvider';
import { clearDataConversation, getSuggestIdeas, setLoading } from '../../context/AssistantAction';
import { getDataResponseApi } from '../../api/api';
const Header = (): JSX.Element => {
  const { state, dispatch } = useAssistantContext();
  const handleClearData = () => {
    if (state.dataConversation.length && state.historyConversation.length) {
      dispatch(clearDataConversation());
      const suggestionDefault = [
        {
          role: 'user',
          content: 'gợi 2 ý tưởng, vấn đề ngắn gọn (dưới 3 từ) để người dùng tìm hiểu và làm rõ'
        }
      ];
      dispatch(setLoading(true));
      getDataResponseApi(suggestionDefault)
        .then((gptResponse) => {
          const arr = gptResponse.split('\n');
          dispatch(getSuggestIdeas(arr[0].slice(2)));
          dispatch(getSuggestIdeas(arr[1].slice(2)));
          dispatch(setLoading(false));
        })
        .catch(() => {
          dispatch(setLoading(false));
        });
    }
  };
  return (
    <Card size='small'>
      <h3 className='title-header'>Clarity Idea Assitant for Chrome</h3>
      <PlusOutlined onClick={handleClearData} className='icon-plus' />
    </Card>
  );
};

export default Header;
