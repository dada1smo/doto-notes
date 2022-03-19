export default function Spacer({ horizontal, vertical }) {
  return (
    <>
      <div></div>{' '}
      <style jsx>{`
        div {
          width: ${horizontal || '100%'};
          height: ${vertical || 0}px;
        }
      `}</style>
    </>
  );
}
