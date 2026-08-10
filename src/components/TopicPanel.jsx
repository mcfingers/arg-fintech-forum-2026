export default function TopicPanel({ icon, title, topics }) {
  return (
    <div className="h-panel">
      <img src={icon} alt="" className="topic-icon" />
      <h3>{title}</h3>
      <div className="divider"></div>
      <ul className="topic-list">
        {topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
    </div>
  );
}
