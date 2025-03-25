import { Link } from "react-router";

function BusinessCard({
  card: { _id, bizName, bizDescription, bizAddress, bizPhone, bizImage },
}) {
  return (
    <div className="col col-sm-6 col-md-4 col-xl-3 my-2">
      <div className="card">
        <img src={bizImage} className="card-img-top" alt={bizName} />
        <div className="card-body">
          <h5 className="card-title">{bizName}</h5>
          <p className="card-text">{bizDescription}</p>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">{bizAddress}</li>
            <li className="list-group-item">{bizPhone}</li>
          </ul>

          <Link to={`/my-cards/edit/${_id}`}>Edit</Link>
          <Link className="mx-3" to={`/my-cards/delete/${_id}`}>
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BusinessCard;
