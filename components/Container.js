import { Theme } from '../styles/Theme';

export default function Container({ children }) {
  return (
    <>
      <style jsx>
        {`
          div {
            background-color: ${Theme.neutral['000']};
            width: 40vw;
            border-radius: 8px;
            padding: 24px 28px;
            box-shadow: 0 4px 20px ${Theme.neutral[400]};
            min-height: 120px;
          }
        `}
      </style>
      <div>{children}</div>
    </>
  );
}
