declare namespace S_Lang {
  type Dispatch<A> = (value: A) => void;
  type SetStateAction<S> = S | ((prevState: S) => S);
  //useState
  function 산후조리<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
}
