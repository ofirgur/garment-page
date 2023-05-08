export interface PageStateContextInterface {
  pageState: PageState;
  setPageState: (pageState: Partial<PageState>) => void;
}

export interface PageState {
  users: User[];
}

export type User = {
  name: string;
};