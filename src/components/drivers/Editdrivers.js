import React, { Component } from "react";

export default class Editdrivers extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <section className="content-header">
            <h1>
              Drivers
              <small>Manage Drivers</small>
            </h1>
            <ol className="breadcrumb">
              <li>
                <a href="#">
                  <i className="fa fa-dashboard" /> Home
                </a>
              </li>
              <li>
                <a href="/drivers">Drivers</a>
              </li>
              <li className="active">Add Drivers</li>
            </ol>
          </section>
          <section className="content">
            <div className="row">
              <div className="col-md-12">
                <div className="box box-primary">
                  <div className="box-header with-border">
                    <h3 className="box-title">Edit Drivers</h3>
                  </div>
                  <div className="row">
                    <div className="col-md-3" />
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
                            <label htmlFor="exampleInputPassword1">
                              Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Password"
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
                            <label>Date masks:</label>
                            <div className="input-group">
                              <div className="input-group-addon">
                                <i className="fa fa-calendar" />
                              </div>
                              <input
                                type="date"
                                className="form-control"
                                data-inputmask="'alias': 'dd/mm/yyyy'"
                                data-mask
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Gender</label>
                            <select className="form-control ">
                              <option selected="selected">Male</option>
                              <option>Female</option>
                              <option>Not Specified</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Country</label>
                            <select className="form-control ">
                              <option selected="selected">India</option>
                              <option>Nepal</option>
                              <option>Bhutan</option>
                            </select>
                          </div>

                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">City</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter City"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                              Contact Address
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Address"
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="exampleInputFile">Image</label>
                            <input type="file" />
                          </div>

                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Status</label>
                            <select className="form-control ">
                              <option selected="selected">Approved</option>
                              <option>Denied</option>
                              <option>Anything</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Verfied</label>
                            <select className="form-control ">
                              <option selected="selected">Yes</option>
                              <option>NO</option>
                              <option>Processing</option>
                            </select>
                          </div>
                        </div>

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
