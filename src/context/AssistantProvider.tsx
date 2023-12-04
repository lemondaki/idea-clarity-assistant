import { createContext, useContext, useReducer, useEffect } from 'react';
import { IActionAssistant, IStateInitAssistant } from '../interface/interface';
import { reducerAssistant } from './AssistantReducer';
import { getDataResponseApi } from '../api/api';
import { getSuggestIdeas, setLoading } from './AssistantAction';
const initStateAssistant: IStateInitAssistant = {
  isLoading: false,
  isSummurize: true,
  generateResponse: 0,
  historyConversation: [],
  dataConversation: [],
  suggestIdeas: []
};

interface IContextTypeAssistant {
  state: IStateInitAssistant;
  dispatch: React.Dispatch<IActionAssistant>;
}

const AssistantContext = createContext<IContextTypeAssistant>({
  state: initStateAssistant,
  dispatch: () => {}
});

export const AssistantProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(reducerAssistant, initStateAssistant);
  useEffect(() => {
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
  }, []);
  return <AssistantContext.Provider value={{ state, dispatch }}>{children}</AssistantContext.Provider>;
};

export const useAssistantContext = () => {
  return useContext(AssistantContext);
};
