import Link from 'next/link';
import { Theme } from '../styles/Theme';

export function Button({ label, onClick, shape, color }) {
  return (
    <>
      <button onClick={onClick} className={`${shape} ${color}`}>
        {label && <span>{label}</span>}
      </button>

      <style jsx>
        {`
          button {
            display: inline-flex;
            background-color: transparent;
            align-items: center;
            justify-content: center;
            font-family: ${Theme.ibmPlexSans};
            font-weight: 400;
            font-size: 1rem;
            transition: 0.3s;
            outline: 0;
            border: none;
            text-decoration: none;
            cursor: pointer;
            position: relative;
          }

          .primary {
            background: ${Theme.primary['000']};
            color: ${Theme.primary[600]};
          }

          .primary:hover {
            background: ${Theme.primary['200']};
          }

          .regularMD {
            padding: 12px 16px;
            border-radius: 4px;
          }
        `}
      </style>
    </>
  );
}

export function LinkButton(props) {
  return (
    <Link href={props.link} passHref>
      {props.label && (
        <a
          className={`${ButtonStyles.btn} ${ButtonStyles[props.color]} ${
            ButtonStyles[props.shape]
          }`}
          onClick={props.onClick}
        >
          {props.label}
        </a>
      )}
    </Link>
  );
}
