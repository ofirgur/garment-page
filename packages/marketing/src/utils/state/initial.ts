import { PageState, User } from './type';

const DEFAULT_USER: User = {
  locale: 'en-US',
  lang: 'en',
  currency: 'USD',
};

export const INITIAL_PAGE_STATE: PageState = {
  user: DEFAULT_USER,
};
