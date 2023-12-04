import { EActionAssistant } from '../enum/Assistant.enum';
import { DataAssitant, RoleType } from '../interface/interface';
export interface ISetLoading {
  type: EActionAssistant.SET_LOADING;
  payload: boolean;
}
export interface IGetSuggestIdeas {
  type: EActionAssistant.GET_SUGGEST_IDEAS;
  payload: string;
}
export interface IGetDataConversation {
  type: EActionAssistant.GET_DATA_CONVERSATION;
  payload: DataAssitant;
}
export interface IClearDataConversation {
  type: EActionAssistant.CLEAR_DATA_CONVERSATION;
}
export interface IHideSummarizeIdea {
  type: EActionAssistant.HIDE_SUMMARIZE_IDEA;
}
export interface IGenerateResponse {
  type: EActionAssistant.GENERATE_RESPONSE;
  payload: number;
}
export interface IGetHistoryConversation {
  type: EActionAssistant.GET_HISTORY_CONVERSATION;
  payload: RoleType;
}
