import { Theme } from '../styles/Theme';

export default function Container({ children }) {
  return (
    <>
      <style jsx>
        {`
          div {
            background-color: ${Theme.neutral['000']};
            width: 60vw;
          }
        `}
      </style>
      <div>{children}</div>
    </>
  );
}
