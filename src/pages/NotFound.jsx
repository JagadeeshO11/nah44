import { LuHouse } from 'react-icons/lu'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="container">
      <section className="notfound" style={{ marginTop: 'var(--space-20)' }} aria-label="Page not found">

        <div className="notfound__glow" aria-hidden="true"></div>
        <div className="notfound__card">
          <div className="notfound__headline" aria-hidden="true">404</div>

          <h2 className="notfound__title">This Page is Lost</h2>
          <p className="notfound__desc">
            The page you are looking for doesn't exist or has been moved to a new address.
          </p>

          <Link to="/" className="notfound__btn" role="button">
            <LuHouse size={16} /> Back to Home
          </Link>
        </div>

      </section>
    </div>
  )
}

export default NotFound
