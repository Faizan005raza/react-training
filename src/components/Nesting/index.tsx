function Nest() {
  return <p>Nesting Component means component inside component.</p>;
}
function Ans() {
  return (
    <>
      <h2>What is Nesting Component?</h2>
      <Nest />
    </>
  );
}
export default Ans;
