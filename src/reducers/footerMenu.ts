const footerMenuDefaultState: {
  home: boolean;
  services: boolean;
} = { home: true, services: false };

export const footerMenuReducer = (
  state = footerMenuDefaultState,
  action: {
    type: string;
  }
) => {
  switch (action.type) {
    case "HOME_PAGE_ACTIVE":
      return { home: true, services: false };
    case "SERVICES_PAGE_ACTIVE":
      return { home: false, services: true };
    default:
      return state;
  }
};
