const chatDefaultState: {
  chat: boolean;
  chatMenu: boolean;
  currentChat: number;
} = { chat: true, chatMenu: false, currentChat: 0 };

export const chatReducer = (
  state = chatDefaultState,
  action: {
    type: string;
  }
) => {
  switch (action.type) {
    case "CHAT_MENU_TOGGLE":
      return { ...state, chatMenu: !state.chatMenu };
    case "CHAT_MENU_OPEN":
      return { ...state, chat: true };
    default:
      return state;
  }
};
