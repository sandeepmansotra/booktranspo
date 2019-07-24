import React, { Component } from "react";

export default class Addcategories extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <section className="content-header">
            <h1>
              Goods Type Setup
              <small>Manage Goods</small>
            </h1>
            <ol className="breadcrumb">
              <li>
                <a href="/">
                  <i className="fa fa-dashboard" /> Home
                </a>
              </li>
              <li className="active">Add Categories</li>
            </ol>
          </section>
          {/* Main content */}
          <section className="content">
            <div className="row">
              <div className="col-xs-12">
                <div className="box">
                  <div className="box-header">
                    <h3 className="box-title">Add Categories</h3>
                    <div className="box-body">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              name="table_search"
                              className="form-control"
                              placeholder="Categories"
                            />
                          </div>
                        </div>
                      </div>
                      <h3 className="box-title">Select Size Type</h3>
                      <div className="box-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
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
                            <button type="button" class="btn btn-danger btn-lg">
                              Add Categories
                            </button>
                          </div>
                        </div>
                      </div>
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
