import React, { Component } from "react";

export default class Orders extends Component {
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
                        <div className="col-md-2">
                          <div className="form-group">
                            <select className="form-control ">
                              <option selected="selected">All</option>
                              <option>Alaska</option>
                              <option>California</option>
                              <option>Delaware</option>
                            </select>
                          </div>
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
                              <option selected="selected">All Type</option>
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

                        <div className="col-sm-3">
                          <div className="form-group">
                            <select className="form-control ">
                              <option selected="selected">All</option>
                              <option>Alaska</option>
                              <option>California</option>
                              <option>Delaware</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <div className="input-group">
                              <div className="input-group-addon">
                                <i>From</i>
                              </div>
                              <input type="date" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <select className="form-control ">
                              <option selected="selected">All</option>
                              <option>Alaska</option>
                              <option>California</option>
                              <option>Delaware</option>
                            </select>
                          </div>
                          <div className="form-group ">
                            <div className="input-group">
                              <div className="input-group-addon">
                                <i>To</i>
                              </div>
                              <input type="date" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /.box-header */}
                      {/* /.col */}
                    </div>
                    <div className="row">
                      {/* ./col */}
                      <div className="col-md-2 col-xs-6">
                        {/* small box */}
                        <div className="small-box bg-yellow">
                          <div className="inner">
                            <h3>440</h3>
                            <p>Pending</p>
                          </div>
                        </div>
                      </div>
                      {/* ./col */}
                      <div className="col-md-2 col-xs-6">
                        {/* small box */}
                        <div className="small-box bg-red">
                          <div className="inner">
                            <h3>650</h3>
                            <p>Cancel</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 col-xs-6">
                        {/* small box */}
                        <div className="small-box bg-aqua">
                          <div className="inner">
                            <h3>150</h3>
                            <p>On the way</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-2 col-xs-6">
                        {/* small box */}
                        <div className="small-box bg-green">
                          <div className="inner">
                            <h3>53 </h3>
                            <p>Complain</p>
                          </div>
                        </div>
                      </div>
                      {/* ./col */}
                      <div className="col-lg-2 col-xs-6">
                        {/* small box */}
                        <div className="small-box bg-yellow">
                          <div className="inner">
                            <h3>44</h3>
                            <p>ACC</p>
                          </div>
                        </div>
                      </div>
                      {/* ./col */}
                      <div className="col-lg-2 col-xs-6">
                        {/* small box */}
                        <div className="small-box bg-red">
                          <div className="inner">
                            <h3>65</h3>
                            <p>ATT</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-xs-6">
                        {/* small box */}
                        <div className="small-box bg-maroon">
                          <div className="inner">
                            <h3>65</h3>
                            <p>GABCNR</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-xs-6">
                        {/* small box */}
                        <div className="small-box bg-teal">
                          <div className="inner">
                            <h3>65</h3>
                            <p>Total</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-body table-responsive no-padding">
                      <table className="table table-hover">
                        <tbody>
                          <tr>
                            <th>Order ID</th>
                            <th>User</th>
                            <th>Booked At</th>
                            <th>Delivery To</th>
                            <th>Delivery By</th>
                            <th>Date & Time</th>
                            <th>Amount</th>
                            <th>Payment</th>
                            <th>Booked At</th>
                            <th>Status</th>
                            <th>Action</th>
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
                            <td>
                              <span className="label label-success">
                                Approved
                              </span>
                            </td>
                            <td>
                              {" "}
                              <a class="btn btn-social-icon btn-bitbucket">
                                <i class="fa fa-edit" />
                              </a>
                              <a class="btn btn-social-icon btn-flickr">
                                <i class="fa fa-eye" />
                              </a>
                              <a class="btn btn-social-icon btn-google">
                                <i class="fa fa-times" />
                              </a>
                            </td>
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
                            <td>
                              <span className="label label-warning">
                                Pending
                              </span>
                            </td>
                            <td>
                              <a class="btn btn-social-icon btn-bitbucket">
                                <i class="fa fa-edit" />
                              </a>
                              <a class="btn btn-social-icon btn-flickr">
                                <i class="fa fa-eye" />
                              </a>
                              <a class="btn btn-social-icon btn-google">
                                <i class="fa fa-times" />
                              </a>
                            </td>
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
                            <td>
                              <span className="label label-primary">
                                Approved
                              </span>
                            </td>
                            <td>
                              {" "}
                              <a class="btn btn-social-icon btn-bitbucket">
                                <i class="fa fa-edit" />
                              </a>
                              <a class="btn btn-social-icon btn-github">
                                <i class="fa fa-eye" />
                              </a>
                              <a class="btn btn-social-icon btn-google">
                                <i class="fa fa-times" />
                              </a>
                            </td>
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
                            <td>
                              <span className="label label-danger">Denied</span>
                            </td>
                            <td>
                              {" "}
                              <a class="btn btn-social-icon btn-bitbucket">
                                <i class="fa fa-edit" />
                              </a>
                              <a class="btn btn-social-icon btn-flickr">
                                <i class="fa fa-eye" />
                              </a>
                              <a class="btn btn-social-icon btn-google">
                                <i class="fa fa-times" />
                              </a>
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
