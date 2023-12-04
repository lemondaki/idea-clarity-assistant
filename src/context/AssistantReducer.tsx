import { IActionAssistant, IStateInitAssistant } from '../interface/interface';
import { EActionAssistant } from '../enum/Assistant.enum';
export const reducerAssistant = (state: IStateInitAssistant, action: IActionAssistant): IStateInitAssistant => {
  switch (action.type) {
    case EActionAssistant.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case EActionAssistant.GET_SUGGEST_IDEAS:
      return { ...state, suggestIdeas: [...state.suggestIdeas, action.payload] };
    case EActionAssistant.GET_DATA_CONVERSATION:
      return { ...state, dataConversation: [...state.dataConversation, action.payload] };
    case EActionAssistant.CLEAR_DATA_CONVERSATION:
      return { ...state, dataConversation: [], historyConversation: [], suggestIdeas: [], isSummurize: true };
    case EActionAssistant.GET_HISTORY_CONVERSATION:
      return { ...state, historyConversation: [...state.historyConversation, action.payload] };
    case EActionAssistant.GENERATE_RESPONSE:
      return { ...state, generateResponse: action.payload };
    case EActionAssistant.HIDE_SUMMARIZE_IDEA:
      return { ...state, isSummurize: false };
    default:
      return { ...state };
  }
};
