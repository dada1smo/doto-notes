import { Theme } from '../styles/Theme';

export default function NotebookItem({ id, name, handleClick }) {
  return (
    <>
      <li>
        <a key={id} onClick={handleClick}>
          {name}
        </a>
      </li>

      <style jsx>{`
        li {
          display: flex;
        }
        a {
          width: 100%;
          height: 100%;
          padding: 12px 16px;
          background: ${Theme.neutral[200]};
          border-radius: 4px;
          transition: 0.3s;
          font-weight: 500;
          color: ${Theme.primary[800]};
        }
        a:hover {
          background: ${Theme.primary['000']};
        }
      `}</style>
    </>
  );
}
