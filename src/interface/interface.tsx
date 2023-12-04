import {
  IClearDataConversation,
  IGenerateResponse,
  IGetDataConversation,
  IGetHistoryConversation,
  IGetSuggestIdeas,
  IHideSummarizeIdea,
  ISetLoading
} from '../context/Action.interface';

export interface DataAssitant {
  id: number;
  userInput: string;
  gptResponse: string;
}

export interface RoleType {
  role: string;
  content: string;
}

export interface IStateInitAssistant {
  isLoading: boolean;
  isSummurize: boolean;
  generateResponse: number;
  historyConversation: RoleType[];
  dataConversation: DataAssitant[];
  suggestIdeas: string[];
}

export type IActionAssistant =
  | IGetSuggestIdeas
  | IGetDataConversation
  | IGetHistoryConversation
  | ISetLoading
  | IClearDataConversation
  | IHideSummarizeIdea
  | IGenerateResponse;
