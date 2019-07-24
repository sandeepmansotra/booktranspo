import React, { Component } from "react";

export default class Role extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <h1>
              Users
              <small>Manage Users</small>
            </h1>
            <ol className="breadcrumb">
              <li>
                <a href="#">
                  <i className="fa fa-dashboard" /> Home
                </a>
              </li>
              <li>
                <a href="/manage">Users</a>
              </li>
              <li className="active">Edit Users</li>
            </ol>
          </section>

          <section className="content">
            <div className="row">
              <div className="col-md-12">
                <div className="box box-primary">
                  <div className="box-header with-border">
                    <h3 className="box-title">Edit Users</h3>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <form role="form">
                        <div className="box-body">
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                              First Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter First Name"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                              Last Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Last Name"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                              Middle Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Middle Name"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                              Email address
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter email"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                              Mobile Number
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter Mobile Number"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Status</label>
                            <select className="form-control ">
                              <option selected="selected">Active</option>

                              <option>Inactive</option>
                            </select>
                          </div>
                        </div>
                        {/* /.box-body */}
                        <div className="box-footer">
                          <button type="submit" className="btn btn-danger">
                            Update
                          </button>
                        </div>
                      </form>
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
