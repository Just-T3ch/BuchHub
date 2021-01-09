import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import EditProfile from "./EditProfile";
const MyProfile = ({ username, email, phone, followers, following }) => {
  console.log(following, followers)
  return (
    <div>
      <Navbar />
      <div className="row py-5 px-4">
        <div className="col-md-5 mx-auto">
          <div className="bg-white shadow rounded overflow-hidden">
            <div className="px-4 pt-0 pb-4 cover">
              <div className="media align-items-end profile-head">
                <Link
                  to="/setting"
                  className="text-decoration-none text-secondary"
                >
                  <EditProfile />
                </Link>
                <div className="media-body mb-5 text-white">
                  <h4 className="mt-0 mb-5">{username}</h4>
                </div>
              </div>
            </div>
            <div className="bg-light p-4 d-flex justify-content-end text-center">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block">
                    {followers.length}
                  </h5>
                  <small className="text-muted">Followers</small>
                </li>
                <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block">
                    {following.length}
                  </h5>
                  <small className="text-muted">Following</small>
                </li>
              </ul>
            </div>
            <div className="px-4 py-3">
              <h5 className="mb-0">About</h5>
              <div className="py-4 rounded shadow-sm bg-light">
                <p className="font-italic mb-0">{phone}</p>
                <p className="font-italic mb-0">{email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

