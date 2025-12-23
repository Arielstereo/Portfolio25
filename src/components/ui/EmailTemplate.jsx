const escapeHtml = (str) =>
  String(str || "").replace(
    /[&<>"']/g,
    (s) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[s])
  );

const EmailTemplate = ({ username, email, message }) => {
  return (
    <div>
      <div>
        <h1>De: {username}</h1>
        <h4>Email: {email}</h4>
      </div>
      <p>Mensaje: {message}</p>
    </div>
  );
};

export function toHtml({ username, email, message }) {
  return `<!doctype html><html><head><meta charset="utf-8"></head><body>
    <div>
      <div>
        <h1>De: ${escapeHtml(username)}</h1>
        <h4>Email: ${escapeHtml(email)}</h4>
      </div>
      <p>Mensaje: ${escapeHtml(message)}</p>
    </div>
  </body></html>`;
}

export default EmailTemplate;
