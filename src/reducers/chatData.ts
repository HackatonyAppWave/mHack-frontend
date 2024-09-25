// Define the chat object structure
interface Message {
  id: number;
  date: string;
  content: string;
  ai_response: boolean;
}

interface Chat {
  id: number;
  title: string;
  messages: Message[];
}

// Define the initial state
interface ChatState {
  chats: Chat[];
}

const initialState: ChatState = {
  chats: [],
};

// Define action types and action creators
const SET_CHATS = "SET_CHATS";
const ADD_MESSAGE = "ADD_MESSAGE";
const ADD_NEW_CHAT = "ADD_NEW_CHAT";

interface SetChatsAction {
  type: typeof SET_CHATS;
  payload: Chat[];
}

interface AddMessageAction {
  type: typeof ADD_MESSAGE;
  payload: {
    chatId: number;
    message: Message;
  };
}

interface AddNewChatAction {
  type: typeof ADD_NEW_CHAT;
  payload: Chat;
}

export const SetChats = (chats: Chat[]): SetChatsAction => ({
  type: SET_CHATS,
  payload: chats,
});

export const AddMessage = (
  chatId: number,
  message: Message
): AddMessageAction => ({
  type: ADD_MESSAGE,
  payload: { chatId, message },
});

export const AddNewChat = (chat: Chat): AddNewChatAction => ({
  type: ADD_NEW_CHAT,
  payload: chat,
});

// Define the reducer
export const chatDataReducer = (
  state = initialState,
  action: SetChatsAction | AddMessageAction | AddNewChatAction
): ChatState => {
  switch (action.type) {
    case SET_CHATS:
      return { ...state, chats: action.payload };

    case ADD_MESSAGE:
      return {
        ...state,
        chats: state.chats.map((chat) => {
          if (chat.id === action.payload.chatId) {
            const index = chat.messages.length;
            return {
              ...chat,
              messages: [
                ...chat.messages,
                { ...action.payload.message, id: index },
              ],
            };
          }
          return chat;
        }),
      };

    case ADD_NEW_CHAT:
      const index = state.chats.length;
      return {
        ...state,
        chats: [...state.chats, { ...action.payload, id: index }],
      };

    default:
      return state;
  }
};
