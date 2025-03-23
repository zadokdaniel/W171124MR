import { Link } from "react-router";
import PageHeader from "../components/common/pageHeader";

function MyCards() {
  return (
    <div className="container">
      <PageHeader title="My Cards" />

      <div className="row">
        {/* <div className="col">no cards</div> */}

        <div className="col-6">
          <div className="card">
            <img
              src="http://sdfakjdsfj"
              className="card-img-top"
              alt="lemon inc"
            />
            <div className="card-body">
              <h5 className="card-title">Lemon Inc</h5>
              <p className="card-text">some description</p>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">lemon av.</li>
                <li className="list-group-item">0522545448</li>
              </ul>

              <Link to={`/my-cards/edit/`} className="card-link">
                edit
              </Link>
              <Link to={`/my-cards/delete/`} className="card-link">
                delete
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCards;
