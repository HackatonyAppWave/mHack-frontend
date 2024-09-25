import {
  CHAT_MENU_TOGGLE,
  HOME_PAGE_ACTIVE,
  SERVICES_PAGE_ACTIVE,
  CHAT_OPEN,
  CHAT_CLOSE,
} from "./actionTypes";

export interface HomePageActiveAction {
  type: typeof HOME_PAGE_ACTIVE;
}

export interface ServicesPageActiveAction {
  type: typeof SERVICES_PAGE_ACTIVE;
}

export interface ChatMenuToggleAction {
  type: typeof CHAT_MENU_TOGGLE;
}

export interface ChatOpenAction {
  type: typeof CHAT_OPEN;
}

export interface ChatCloseAction {
  type: typeof CHAT_CLOSE;
}

export const HomePageActive = (): HomePageActiveAction => {
  return {
    type: HOME_PAGE_ACTIVE,
  };
};

export const ServicesPageActive = (): ServicesPageActiveAction => {
  return {
    type: SERVICES_PAGE_ACTIVE,
  };
};

export const ChatMenuToggle = (): ChatMenuToggleAction => {
  return {
    type: CHAT_MENU_TOGGLE,
  };
};

export const ChatOpen = (): ChatOpenAction => {
  return {
    type: CHAT_OPEN,
  };
};

export const ChatClose = (): ChatCloseAction => {
  return {
    type: CHAT_CLOSE,
  };
};
