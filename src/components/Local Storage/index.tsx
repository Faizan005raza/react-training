
function LocalStorage() {
    
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Local Storage</h1>
      <div>
        <p>
          Local Storage is the place where we stores the data which does not get
          removed after re-rendering of the page or by just exiting from the
          page and also after closing of the browser.
        </p>
        <h4>Methods to implement Local Storage in React:</h4>
        <ul>
        <li>
            <strong>setItem()</strong>: This method is used to add a key and a
            value to localStorage.
        </li>
        <br />
        <li>
            <strong>getItem()</strong>: This method is used to get an item from
            localStorage using the key.
        </li>{" "}
          <br />
          <li>
            <strong>removeItem()</strong>: This technique is used to delete an
            item from localStorage based on its key.
          </li>{" "}
          <br />
          <li>
            <strong>clear()</strong>: This technique is used to delete all
            instances of localStorage.
          </li>{" "}
          <br />
          <li>
            <strong>key()</strong>: When you supply a number, it aids in the
            retrieval of a localStorage key.
          </li>{" "}
          <br />
        </ul>
      </div>
    </>
  );
}
export default LocalStorage;
