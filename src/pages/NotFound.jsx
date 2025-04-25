function NotFound() {
  return (
    <>
      <h1>404 - O rety kotlety</h1>
      <h2>Będzie dobrze dzieciak</h2>

      <button onClick={() => (window.location.href = "/")}>
        Wróć na właściwy peron
      </button>

      <p className="read-the-docs">Poradzimy sobie w inny sposób</p>
    </>
  );
}

export default NotFound;
