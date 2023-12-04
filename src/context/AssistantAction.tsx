import { EActionAssistant } from '../enum/Assistant.enum';
import { DataAssitant, IActionAssistant, RoleType } from '../interface/interface';
export const setLoading = (payload: boolean): IActionAssistant => {
  return {
    type: EActionAssistant.SET_LOADING,
    payload
  };
};

export const getSuggestIdeas = (payload: string): IActionAssistant => {
  return {
    type: EActionAssistant.GET_SUGGEST_IDEAS,
    payload
  };
};

export const getDataConversation = (payload: DataAssitant): IActionAssistant => {
  return {
    type: EActionAssistant.GET_DATA_CONVERSATION,
    payload
  };
};

export const clearDataConversation = (): IActionAssistant => {
  return {
    type: EActionAssistant.CLEAR_DATA_CONVERSATION
  };
};

export const hideSummarizeIdea = (): IActionAssistant => {
  return {
    type: EActionAssistant.HIDE_SUMMARIZE_IDEA
  };
};

export const generateResponse = (num: number): IActionAssistant => {
  return {
    type: EActionAssistant.GENERATE_RESPONSE,
    payload: num
  };
};

export const getHistoryConversation = (payload: RoleType): IActionAssistant => {
  return {
    type: EActionAssistant.GET_HISTORY_CONVERSATION,
    payload
  };
};
