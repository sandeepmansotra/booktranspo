import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Users extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <section className="content-header">
            <h1>
              Orders
              <small>Manage Orders</small>
            </h1>
            <ol className="breadcrumb">
              <li>
                <a href="/">
                  <i className="fa fa-dashboard" /> Home
                </a>
              </li>
              <li className="active">Orders</li>
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
                        <div className="col-md-3">
                          <div className="form-group">
                            <input
                              type="text"
                              name="table_search"
                              className="form-control "
                              placeholder="Search by name, email"
                            />
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="form-group">
                            <select className="form-control ">
                              <option selected="selected">All</option>
                              <option>Alaska</option>
                              <option>California</option>
                              <option>Delaware</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <Link
                            to="/addcategories"
                            type="button"
                            class="btn btn-block btn-default"
                          >
                            <i className="fa fa-search" /> Search
                          </Link>
                        </div>
                        <div className="col-md-1">
                          <Link
                            to="/addcategories"
                            type="button"
                            class="btn btn-block btn-default"
                          >
                            Clear
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-1 col-xs-6" />
                      <div className="col-md-2 col-xs-6">
                        {/* small box */}
                        <div className="small-box bg-purple">
                          <div className="inner">
                            <h3>150</h3>
                            <p>Active</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-2 col-xs-6">
                        {/* small box */}
                        <div className="small-box bg-red">
                          <div className="inner">
                            <h3>53 </h3>
                            <p>Inactive</p>
                          </div>
                        </div>
                      </div>
                      {/* ./col */}
                      <div className="col-lg-2 col-xs-6">
                        {/* small box */}
                        <div className="small-box bg-yellow">
                          <div className="inner">
                            <h3>44</h3>
                            <p>Total</p>
                          </div>
                        </div>
                      </div>
                      {/* ./col */}
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
                                to="/users/edit"
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
                                to="/users/edit"
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
                                to="/users/edit"
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
                                to="/users/edit"
                                class="btn btn-social-icon btn-bitbucket"
                              >
                                <i class="fa fa-edit" />
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* /.box-body */}
                  </div>
                  {/* /.box */}
                </div>
              </div>
            </div>
          </section>
          {/* /.content */}
        </div>
      </div>
    );
  }
}
