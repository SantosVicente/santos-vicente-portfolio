export function AnimatedLines() {
  const numberOfLines = 4;
  return (
    <div className="shooting-lines-container">
      <div className="lines">
        {Array.from({ length: numberOfLines }).map((_, index) => (
          <div key={index} className="line"></div>
        ))}
      </div>
    </div>
  );
}
