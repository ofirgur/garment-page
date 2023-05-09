import { PageState, User } from './type';

const DEFAULT_USER: User = {
  locale: 'es_US',
  currency: 'USD',
};

export const INITIAL_PAGE_STATE: PageState = {
  user: DEFAULT_USER,
};
