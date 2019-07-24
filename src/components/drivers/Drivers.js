import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Drivers extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <section className="content-header">
            <h1>
              Drivers
              <small>Manage drivers</small>
            </h1>
            <ol className="breadcrumb">
              <li>
                <a href="/">
                  <i className="fa fa-dashboard" /> Home
                </a>
              </li>
              <li className="active">Drivers</li>
            </ol>
          </section>
          {/* Main content */}
          <section className="content">
            <div className="row">
              <div className="col-xs-12">
                <div className="box">
                  <div className="box-header">
                    <div className="box-body">
                      <div className="row">
                        <div className="col-md-2">
                          <Link
                            to="/add_drivers"
                            type="button"
                            class="btn btn-block btn-default"
                          >
                            <i className="fa fa-plus" /> Add Drivers
                          </Link>
                        </div>
                        <div className="col-md-3">
                          <div className="input-group input-group-sm hidden-xs">
                            <input
                              type="text"
                              name="table_search"
                              className="form-control pull-right"
                              placeholder="Search"
                            />
                            <div className="input-group-btn">
                              <button type="submit" className="btn btn-default">
                                <i className="fa fa-search" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="box-body table-responsive no-padding">
                      <table className="table table-hover">
                        <tbody>
                          <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email Address</th>
                            <th>Mobile Number</th>
                            <th>Created At</th>

                            <th>Status</th>
                            <th>Verified Status</th>
                            <th>Action</th>
                          </tr>
                          <tr>
                            <td>183</td>
                            <td>John Doe</td>
                            <td>11-7-2014</td>

                            <td>John Doe</td>
                            <td>183</td>
                            <td>John Doe</td>
                            <td>
                              <span className="label label-success">
                                Active
                              </span>
                            </td>
                            <td>
                              <span className="label label-success">
                                Verfied
                              </span>
                            </td>
                            <td>
                              {" "}
                              <Link
                                to="/drivers/edit"
                                class="btn btn-social-icon btn-bitbucket"
                              >
                                <i class="fa fa-edit" />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>183</td>
                            <td>John Doe</td>

                            <td>183</td>
                            <td>John Doe</td>
                            <td>183</td>
                            <td>John Doe</td>
                            <td>
                              <span className="label label-warning">
                                Inactive
                              </span>
                            </td>
                            <td>
                              <span className="label label-warning">
                                Not Verfied
                              </span>
                            </td>
                            <td>
                              <Link
                                to="/drivers/edit"
                                class="btn btn-social-icon btn-bitbucket"
                              >
                                <i class="fa fa-edit" />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>183</td>
                            <td>John Doe</td>

                            <td>183</td>
                            <td>John Doe</td>
                            <td>183</td>
                            <td>John Doe</td>
                            <td>
                              <span className="label label-primary">
                                Active
                              </span>
                            </td>
                            <td>
                              <span className="label label-primary">
                                Pending
                              </span>
                            </td>
                            <td>
                              {" "}
                              <Link
                                to="/drivers/edit"
                                class="btn btn-social-icon btn-bitbucket"
                              >
                                <i class="fa fa-edit" />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>183</td>
                            <td>John Doe</td>

                            <td>183</td>
                            <td>John Doe</td>
                            <td>183</td>
                            <td>John Doe</td>
                            <td>
                              <span className="label label-danger">Delete</span>
                            </td>
                            <td>
                              <span className="label label-danger">
                                Not Verfied
                              </span>
                            </td>
                            <td>
                              {" "}
                              <Link
                                to="/drivers/edit"
                                class="btn btn-social-icon btn-bitbucket"
                              >
                                <i class="fa fa-edit" />
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
