import { Theme } from './Theme';

export default function GlobalStyle() {
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: ${Theme.ibmPlexSans};
        background-color: ${Theme.neutral[200]};
      }
      html,
      body,
      #__next {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        padding: 40px 20px;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
      }
    `}</style>
  );
}
