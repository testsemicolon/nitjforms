import React from "react";
import { NavItem, NavLink, Badge, Collapse, DropdownItem } from "shards-react";
import { Link } from "react-router-dom";
export default class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };

    this.toggleNotifications = this.toggleNotifications.bind(this);
  }

  toggleNotifications() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <div className="dropdown">
        <NavLink
          className="nav-link-icon text-center"
          onClick={this.toggleNotifications}
        >
          <div>
            <i className="material-icons">&#xE7F4;</i>
            <Badge pill theme="success">
              2
            </Badge>
          </div>
        </NavLink>

        <Collapse
          open={this.state.visible}
          className="dropdown-menu dropdown-menu-small"
        >
          {" "}
          <div
            style={{
              minHeight: "0vw",
              maxHeight: "20vw",
              overflowY: "scroll",
              width: "25vw",
              overflowX: "inherit",
            }}
          >
            <DropdownItem style={{ overflowWrap: "break-word" }}>
              <div className="notification__icon-wrapper">
                <div className="notification__icon">
                  <i className="material-icons">&#xE6E1;</i>
                </div>
              </div>
              <div
                className="notification__content"
                style={{ overflowWrap: "break-word" }}
              >
                <span className="notification__category">Analytics</span>
                <br />
                Your website’s active users count increased by 28% in the last
                week.
              </div>
            </DropdownItem>
          </div>
        </Collapse>
      </div>
    );
  }
}
