import * as React from 'react';
import { PageStateContextInterface, PageState } from './type';

// state management context
const PageStateContext = React.createContext<PageStateContextInterface | null>(
  null,
);

// custome hook to get the state of the app, getter & setter,
// return { pageState, setPageState }, see Ln 32, Col 38
export const usePageState = () => {
  const context = React.useContext(PageStateContext);
  if (!context) {
    throw new Error(
      'usePageState must be used within a PageStateContextProvider',
    );
  }

  return context;
};

// context frovider for app state, should wrap the Root of the app
// it's a component with local state,
// it shares it's state (getter & setter) with the returned PageStateContext.Provider (context provider)
type PageStateContextProviderProps = {
  initialState: PageState;
  children: React.ReactElement;
};

export const PageStateContextProvider = (
  props: PageStateContextProviderProps,
) => {
  const { initialState } = props;
  const [pageState, regularSetPageState] = React.useState(initialState);
  const setPageState = (newState: Partial<PageState>) => {
    regularSetPageState((prevState: PageState) => ({
      ...prevState,
      ...newState,
    }));
  };

  const value = React.useMemo(() => ({ pageState, setPageState }), [pageState]);
  return <PageStateContext.Provider value={value} {...props} />;
};
