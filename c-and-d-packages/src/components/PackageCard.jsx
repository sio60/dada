export default function PackageCard({ name, tagline, when, price, features = [], not = [] }) {
  return (
    <article className="card">
      <h3>{name}</h3>
      <p className="tagline">{tagline}</p>
      <p className="dim">{when}</p>

      <ul className="bullets">
        {features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>

      {not.length > 0 && (
        <div className="not">
          <span>안 되는 것</span>
          <ul>
            {not.map((n, i)=><li key={i}>{n}</li>)}
          </ul>
        </div>
      )}

      <div className="price">{price}</div>
    </article>
  );
  
}
