import type {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

function Props(props: {
  size:
    | string
    | number
    | bigint
    | boolean
    | ReactElement<unknown, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<
        | string
        | number
        | bigint
        | boolean
        | ReactPortal
        | ReactElement<unknown, string | JSXElementConstructor<any>>
        | Iterable<ReactNode>
        | null
        | undefined
      >
    | null
    | undefined;
}) {
  return (
    <div>
      <h2>Hey, Here I get to know about the props.</h2>
      <p>Props are the arguments which passed into the component.</p>
      <p>
        Example:- H1 tag is the <strong>{props.size}</strong> Heading.
      </p>
      <p>Note: Bold Word Above is the props here.</p>
    </div>
  );
}
export default Props;
