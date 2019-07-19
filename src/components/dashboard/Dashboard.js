import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <h1>
              Dashboard
              <small>Control panel</small>
            </h1>
            <ol className="breadcrumb">
              <li>
                <a href="#">
                  <i className="fa fa-dashboard" /> Home
                </a>
              </li>
              <li className="active">Dashboard</li>
            </ol>
          </section>
          {/* Main content */}
          <section className="content">
            {/* Small boxes (Stat box) */}
            <div className="row">
              <div className="col-lg-3 col-xs-6">
                {/* small box */}
                <div className="small-box bg-aqua">
                  <div className="inner">
                    <h3>150</h3>
                    <p>Orders</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag" />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fa fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-xs-6">
                {/* small box */}
                <div className="small-box bg-green">
                  <div className="inner">
                    <h3>53</h3>
                    <p>Transport</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-android-bus" />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fa fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-xs-6">
                {/* small box */}
                <div className="small-box bg-yellow">
                  <div className="inner">
                    <h3>44</h3>
                    <p>Users</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add" />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fa fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-xs-6">
                {/* small box */}
                <div className="small-box bg-red">
                  <div className="inner">
                    <h3>65</h3>
                    <p>Turn Over</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars" />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fa fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6">
                {/* small box */}
                <div className="small-box bg-purple">
                  <div className="inner">
                    <h3>44</h3>
                    <p>Service Area</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-gear-b" />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fa fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6">
                {/* small box */}
                <div className="small-box bg-maroon">
                  <div className="inner">
                    <h3>650</h3>
                    <p>Drivers</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-android-bicycle" />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fa fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6">
                {/* small box */}
                <div className="small-box bg-primary">
                  <div className="inner">
                    <h3>150</h3>
                    <p>Goods Types</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag" />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fa fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6">
                {/* small box */}
                <div className="small-box bg-teal">
                  <div className="inner">
                    <h3>
                      53<sup style={{ fontSize: 20 }}>%</sup>
                    </h3>
                    <p>Coupons</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-android-bookmark" />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fa fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              {/* ./col */}
            </div>
          </section>
          <section className="content">
            <div className="row">
              <div className="col-xs-12">
                <div className="box">
                  <div className="box-header" />
                  {/* /.box-header */}
                  <div className="box-body">
                    <table
                      id="example2"
                      className="table table-bordered table-hover"
                    >
                      <thead>
                        <tr>
                          <th>Details</th>
                          <th>Today</th>
                          <th>This Week</th>
                          <th>This Month</th>
                          <th>This Year</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Trident</td>
                          <td>5.0</td>
                          <td>95+</td>
                          <td>5</td>
                          <td>C</td>
                          <td>X</td>
                        </tr>
                        <tr>
                          <td>Trident</td>
                          <td>5.5</td>
                          <td> 95+</td>
                          <td>5.5</td>
                          <td>A</td>
                          <td>X</td>
                        </tr>
                        <tr>
                          <td>Trident</td>
                          <td>6</td>
                          <td>6</td>
                          <td>6</td>
                          <td>A</td>
                          <td>X</td>
                        </tr>
                        <tr>
                          <td>Trident</td>
                          <td>7</td>
                          <td>2</td>
                          <td>7</td>
                          <td>A</td>
                          <td>X</td>
                        </tr>
                        <tr>
                          <td>Trident</td>
                          <td>6</td>
                          <td>7</td>
                          <td>6</td>
                          <td>A</td>
                          <td>X</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>Rendering </th>
                          <th>Browser</th>
                          <th>Platform(s)</th>
                          <th>Engine </th>
                          <th>CSS grade</th>
                          <th>X</th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  {/* /.box-body */}
                </div>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </section>
        </div>
      </div>
    );
  }
}
