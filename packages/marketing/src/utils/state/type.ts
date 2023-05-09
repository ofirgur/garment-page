export interface PageStateContextInterface {
  pageState: PageState;
  setPageState: (pageState: Partial<PageState>) => void;
}

export interface PageState {
  user?: User;
}

export type User = {
  id?: number;
  name?: string;
  locale?: string;
  currency?: string;
};
