import { Theme } from '../styles/Theme';

export default function Typography({ tag, label }) {
  const Tag = tag;

  return (
    <>
      <Tag>{label}</Tag>

      <style jsx>
        {`
          h1 {
            font-family: ${Theme.belleza};
            color: ${Theme.primary[400]};
          }
        `}
      </style>
    </>
  );
}
