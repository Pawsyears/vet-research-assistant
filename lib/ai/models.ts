export const DEFAULT_CHAT_MODEL: string = 'chat-model';

export interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model',
    name: 'Research model',
    description: 'Primary model for quick-research chat',
  },
  {
    id: 'chat-model-reasoning',
    name: 'Deep Reseacrh model',
    description: 'Uses Advanced Research',
  },
];
