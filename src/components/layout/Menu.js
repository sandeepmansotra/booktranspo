import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <aside className="main-sidebar">
          {/* sidebar: style can be found in sidebar.less */}
          <section className="sidebar" id="#skin-blue-light">
            {/* Sidebar user panel */}
            <div className="user-panel">
              <div className="pull-left image">
                <img
                  src="dist/img/user2-160x160.jpg"
                  className="img-circle"
                  alt="User Image"
                />
              </div>
              <div className="pull-left info">
                <p>Vinay Pandey</p>
                <a href="#">
                  <i className="fa fa-circle text-success" /> Online
                </a>
              </div>
            </div>
            {/* search form */}
            <form action="#" method="get" className="sidebar-form">
              <div className="input-group">
                <input
                  type="text"
                  name="q"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="input-group-btn">
                  <button
                    type="submit"
                    name="search"
                    id="search-btn"
                    className="btn btn-flat"
                  >
                    <i className="fa fa-search" />
                  </button>
                </span>
              </div>
            </form>
            {/* /.search form */}
            {/* sidebar menu: : style can be found in sidebar.less */}
            <ul className="sidebar-menu" data-widget="tree">
              <li className="header">MAIN NAVIGATION</li>
              <li>
                <Link to="/dashboard">
                  <i className="fa fa-dashboard" /> <span>Dashboard</span>
                  <span className="pull-right-container" />
                </Link>
              </li>
              <li>
                <Link to="/orders">
                  <i className="fa fa-shopping-cart" /> <span>Orders</span>
                  <span className="pull-right-container" />
                </Link>
              </li>
              <li className="treeview">
                <Link to="/users">
                  <i className="fa fa-user" />
                  <span>Users</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </Link>
                <ul className="treeview-menu">
                  <li>
                    <Link to="/users/groups">
                      <i className="fa fa-circle-o" /> Groups
                    </Link>
                  </li>
                  <li>
                    <Link to="/users/address">
                      <i className="fa fa-circle-o" /> Address
                    </Link>
                  </li>
                  <li>
                    <Link to="/users/manage">
                      <i className="fa fa-circle-o" /> Manage
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="treeview">
                <Link to="/goods">
                  <i className="fa fa-cubes" />
                  <span>Goods Type SetUp</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </Link>
                <ul className="treeview-menu">
                  <li>
                    <Link to="/goods/groups">
                      <i className="fa fa-circle-o" /> Category
                    </Link>
                  </li>
                  <li>
                    <Link to="/users/address">
                      <i className="fa fa-circle-o" /> Unit
                    </Link>
                  </li>
                  <li>
                    <Link to="/goods/size">
                      <i className="fa fa-circle-o" /> Size
                    </Link>
                  </li>
                  <li>
                    <Link to="/goods">
                      <i className="fa fa-circle-o" /> Item SetUp
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="treeview">
                <Link to="/goods">
                  <i className="fa fa-truck" />
                  <span>Transport Basics</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </Link>
                <ul className="treeview-menu">
                  <li>
                    <Link to="/goods/groups">
                      <i className="fa fa-circle-o" /> Transport
                    </Link>
                  </li>
                  <li>
                    <Link to="/users/address">
                      <i className="fa fa-circle-o" /> Branch Setup
                    </Link>
                  </li>
                  <li>
                    <Link to="/goods/size">
                      <i className="fa fa-circle-o" /> Order Zones
                    </Link>
                  </li>
                  <li>
                    <Link to="/goods">
                      <i className="fa fa-circle-o" /> Documents
                    </Link>
                  </li>
                  <li>
                    <Link to="/goods/size">
                      <i className="fa fa-circle-o" /> Coupons
                    </Link>
                  </li>
                  <li>
                    <Link to="/goods">
                      <i className="fa fa-circle-o" /> Operational hours
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/services">
                  <i className="fa fa-gears" /> <span>Services</span>
                  <span className="pull-right-container" />
                </Link>
              </li>
              <li>
                <Link to="/driver">
                  <i className="fa fa-car" /> <span>Driver</span>
                  <span className="pull-right-container" />
                </Link>
              </li>
              <li className="treeview">
                <Link to="/goods">
                  <i className="fa fa-male" />
                  <span>Report</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </Link>
                <ul className="treeview-menu">
                  <li>
                    <Link to="/goods/groups">
                      <i className="fa fa-circle-o" /> Transport
                    </Link>
                  </li>
                  <li>
                    <Link to="/users/address">
                      <i className="fa fa-circle-o" /> Driver
                    </Link>
                  </li>
                  <li>
                    <Link to="/goods/size">
                      <i className="fa fa-circle-o" /> Order
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="treeview">
                <Link to="/goods">
                  <i className="fa fa-gear" />
                  <span>Access Control</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </Link>
                <ul className="treeview-menu">
                  <li>
                    <Link to="/goods/groups">
                      <i className="fa fa-circle-o" /> Role
                    </Link>
                  </li>
                  <li>
                    <Link to="/users/address">
                      <i className="fa fa-circle-o" /> Users
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="treeview">
                <Link to="/goods">
                  <i className="fa fa-laptop" />
                  <span>Frontend</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </Link>
                <ul className="treeview-menu">
                  <li>
                    <Link to="/goods/groups">
                      <i className="fa fa-circle-o" /> Gallery
                    </Link>
                  </li>
                  <li>
                    <Link to="/users/address">
                      <i className="fa fa-circle-o" /> Banner
                    </Link>
                  </li>
                  <li>
                    <Link to="/goods/size">
                      <i className="fa fa-circle-o" /> Offers
                    </Link>
                  </li>
                  <li>
                    <Link to="/goods/groups">
                      <i className="fa fa-circle-o" /> Earn & Refer
                    </Link>
                  </li>
                  <li>
                    <Link to="/users/address">
                      <i className="fa fa-circle-o" /> Popular Transport
                    </Link>
                  </li>
                  <li>
                    <Link to="/goods/size">
                      <i className="fa fa-circle-o" /> Add
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="treeview">
                <Link to="/goods">
                  <i className="fa fa-stack-overflow" />
                  <span>Preferences</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </Link>
                <ul className="treeview-menu">
                  <li>
                    <Link to="/goods/groups">
                      <i className="fa fa-circle-o" /> Order Number
                    </Link>
                  </li>
                  <li>
                    <Link to="/users/address">
                      <i className="fa fa-circle-o" /> Customer Number
                    </Link>
                  </li>
                  <li>
                    <Link to="/goods/size">
                      <i className="fa fa-circle-o" /> Transport Number
                    </Link>
                  </li>
                  <li>
                    <Link to="/goods/groups">
                      <i className="fa fa-circle-o" /> Driver Number
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/crmpage">
                  <i className="fa fa-th" /> <span>CRM Page</span>
                  <span className="pull-right-container" />
                </Link>
              </li>
              <li>
                <Link to="/setting">
                  <i className="fa fa-gears" /> <span>Settings</span>
                  <span className="pull-right-container" />
                </Link>
              </li>
              <li>
                <Link to="/advance">
                  <i className="fa fa-chrome" /> <span>Advance Settings</span>
                  <span className="pull-right-container" />
                </Link>
              </li>
              <li>
                <Link to="/feedback">
                  <i className="fa fa-foursquare" /> <span>Feedback</span>
                  <span className="pull-right-container" />
                </Link>
              </li>
            </ul>
          </section>
          {/* /.sidebar */}
        </aside>
      </div>
    );
  }
}
