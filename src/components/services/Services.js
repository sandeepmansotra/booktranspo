import React, { Component } from "react";

export default class Services extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <section className="content-header">
            <h1>
              Services
              <small>Manage Services</small>
            </h1>
            <ol className="breadcrumb">
              <li>
                <a href="/">
                  <i className="fa fa-dashboard" /> Home
                </a>
              </li>
              <li className="active">Services</li>
            </ol>
          </section>
          {/* Main content */}
          <section className="content">
            <div className="row">
              <div className="col-xs-12">
                <div className="box">
                  <div className="box-header">
                    <h3 className="box-title">Add Services</h3>
                    <div className="box-body">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <select className="form-control ">
                              <option selected="selected">All</option>
                              <option>Alaska</option>
                              <option>California</option>
                              <option>Delaware</option>
                            </select>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <select className="form-control ">
                                  <option selected="selected">All</option>
                                  <option>Alaska</option>
                                  <option>California</option>
                                  <option>Delaware</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <select className="form-control ">
                                  <option selected="selected">All</option>
                                  <option>Alaska</option>
                                  <option>California</option>
                                  <option>Delaware</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              name="table_search"
                              className="form-control"
                              placeholder="Distance"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              name="table_search"
                              className="form-control"
                              placeholder="Price"
                            />
                          </div>
                        </div>
                      </div>
                      <h3 className="box-title">Price SetUp</h3>
                      <div className="box-body">
                        <div className="row">
                          <div className="col-md-2">
                            <div className="form-group">
                              <select className="form-control ">
                                <option selected="selected">All</option>
                                <option>Alaska</option>
                                <option>California</option>
                                <option>Delaware</option>
                              </select>
                            </div>
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
                            <div className="form-group">
                              <select className="form-control ">
                                <option selected="selected">All</option>
                                <option>Alaska</option>
                                <option>California</option>
                                <option>Delaware</option>
                              </select>
                            </div>
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
                            <div className="form-group">
                              <select className="form-control ">
                                <option selected="selected">All</option>
                                <option>Alaska</option>
                                <option>California</option>
                                <option>Delaware</option>
                              </select>
                            </div>
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
                            <div className="form-group">
                              <input
                                type="text"
                                name="table_search"
                                className="form-control"
                                placeholder="Price"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                name="table_search"
                                className="form-control"
                                placeholder="Price"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <h3 className="box-title">Tax SetUp</h3>
                      <div className="box-body">
                        <div className="row">
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
                            <div className="form-group">
                              <input
                                type="text"
                                name="table_search"
                                className="form-control"
                                placeholder="Percentage"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="box-body table-responsive no-padding">
                      <table className="table table-hover">
                        <tbody>
                          <tr>
                            <th>Transport Name</th>
                            <th>From Branch</th>
                            <th>To Branch</th>
                            <th>Distance</th>
                            <th>Days</th>
                            <th>Product</th>
                            <th>Units</th>
                            <th>Size</th>
                            <th>Price</th>
                          </tr>
                          <tr>
                            <td>183</td>
                            <td>John Doe</td>
                            <td>11-7-2014</td>
                            <td>183</td>
                            <td>John Doe</td>
                            <td>183</td>
                            <td>John Doe</td>
                            <td>183</td>
                            <td>John Doe</td>
                          </tr>
                          <tr>
                            <td>183</td>
                            <td>John Doe</td>
                            <td>11-7-2014</td>
                            <td>183</td>
                            <td>John Doe</td>
                            <td>183</td>
                            <td>John Doe</td>
                            <td>183</td>
                            <td>John Doe</td>
                          </tr>
                          <tr>
                            <td>183</td>
                            <td>John Doe</td>
                            <td>11-7-2014</td>
                            <td>183</td>
                            <td>John Doe</td>
                            <td>183</td>
                            <td>John Doe</td>
                            <td>183</td>
                            <td>John Doe</td>
                          </tr>
                          <tr>
                            <td>183</td>
                            <td>John Doe</td>
                            <td>11-7-2014</td>
                            <td>183</td>
                            <td>John Doe</td>
                            <td>183</td>
                            <td>John Doe</td>
                            <td>183</td>
                            <td>John Doe</td>
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
