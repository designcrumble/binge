var React = require('react');
var Dropdown = require('react-simple-dropdown');
var DropdownTrigger = Dropdown.DropdownTrigger;
var DropdownContent = Dropdown.DropdownContent;
 
var Menu = React.createClass({
    render: function () {
        return (
            <Dropdown>
                <DropdownTrigger>Profile</DropdownTrigger>
                <DropdownContent>
                    <img src="avatar.jpg" /> Username
                    <ul>
                        <li>
                            <a href="/profile">Profile</a>
                        </li>
                        <li>
                            <a href="/favorites">Favorites</a>
                        </li>
                        <li>
                            <a href="/logout">Log Out</a>
                        </li>
                    </ul>
                </DropdownContent>
            </Dropdown>
        )
    }
});