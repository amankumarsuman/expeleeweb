import { useRef, useEffect } from "react";

function useDocumentTitle(title, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current;
      }
    },
    []
  );
}
//if you want to show any specific message in the page dynamically then you can pass prop
// in this Page function by calling them in component.
function Page(props) {
  return <h2>{props.content}</h2>;
}
export { useDocumentTitle, Page };
