import { useRouter } from 'next/router';
import { Button } from './Button';
import NotebookItem from './NotebookItem';
import Spacer from './Spacer';
import Typography from './Typography';

export default function NotebookList({ notebooks }) {
  const router = useRouter();

  const handleOpenNotebook = (notebookId) => {
    router.push(`/notebook?id=${notebookId}`);
  };

  return (
    <>
      <Typography tag="h1" label="Notas" />
      <Spacer vertical={16} />
      <ul>
        {notebooks.map(({ _id, title }) => {
          return (
            <NotebookItem
              key={_id}
              name={title}
              // handleClick={() => handleOpenNotebook(_id)}
            />
          );
        })}
      </ul>

      <style jsx>
        {`
          ul {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
        `}
      </style>
    </>
  );
}
