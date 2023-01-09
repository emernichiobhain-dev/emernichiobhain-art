export default function Header({ title, subtitle }) {
  return (
    <div className="container">
  <h1 className="title">{title}</h1>
  <h3 className="title">{subtitle}</h3>
    </div>
  )
}
