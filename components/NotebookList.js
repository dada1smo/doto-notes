import { useRouter } from 'next/router';

export default function NotebookList({ notebooks }) {
  const router = useRouter();

  const handleOpenNotebook = (notebookId) => {
    router.push(`/notebook?id=${notebookId}`);
  };

  return (
    <>
      <h1>Cadernos</h1>
      <ul>
        {notebooks.map(({ id, name }) => {
          console.log(name, id);
          return (
            <a key={id} onClick={() => handleOpenNotebook(id)}>
              <p>{name}</p>
            </a>
          );
        })}
      </ul>
    </>
  );
}
