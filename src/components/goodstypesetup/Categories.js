import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Categories extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <section className="content-header">
            <h1>
              Goods Types SetUp
              <small>Manage Goods</small>
            </h1>
            <ol className="breadcrumb">
              <li>
                <a href="/">
                  <i className="fa fa-dashboard" /> Home
                </a>
              </li>
              <li className="active">Goods Types SetUp</li>
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
                            to="/addcategories"
                            type="button"
                            class="btn btn-block btn-default"
                          >
                            <i className="fa fa-plus" /> Add Categories
                          </Link>
                        </div>
                        <div className="col-md-3" />
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
                        <div className="col-md-3">
                          <div className="form-group">
                            <select className="form-control ">
                              <option selected="selected">Select</option>
                              <option>Alaska</option>
                              <option>California</option>
                              <option>Delaware</option>
                              <option>California</option>
                              <option>Delaware</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="box-body table-responsive no-padding">
                      <table className="table table-hover">
                        <tbody>
                          <tr>
                            <th>Id</th>
                            <th>Categories</th>
                            <th>Size Type</th>
                            <th>Action</th>
                          </tr>
                          <tr>
                            <td>183</td>
                            <td>John Doe</td>
                            <td>11-7-2014</td>
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
