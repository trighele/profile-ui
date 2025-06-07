export default function TabButton({ id, activeTab, children, onClick }) {

  const resumePath = '/Resume-TomRighele.pdf'

  return (
    <li>
      {id != 3 ?
      <button
        className={id === activeTab ? "active" : undefined}
        onClick={() => onClick(id)}
      >
        {children}
      </button> :
      <a href={resumePath} download="Resume-TomRighele.pdf">
        <button className="download">{children}</button>
      </a>}
    </li>
  );
}
