import React from "react";
import "./menu.css";

class Menu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            theme: this.props.theme ? this.props.theme : 'default',
            defaultActive: this.props.defaultActive
        }
    }
    onClick(defaultActive) {
        this.setState({ defaultActive })
    }
    renderChildren() {
        return React.Children.map(this.props.children, child => {
            if (child.type === SubMenu) {
                return React.cloneElement(child, {
                    ...child.props,
                    checked: this.state.defaultActive === child.props.index,
                    defaultActive: this.state.defaultActive,
                    onClick: this.onClick.bind(this),
                    onSelect:this.props.onSelect
                })
            }
            return React.cloneElement(child, {
                ...child.props,
                checked: this.state.defaultActive === child.props.index,
                onClick: this.onClick.bind(this),
                onSelect:this.props.onSelect
            })
        })
    }
    render() {
        return (
            <ul className={`cat-menus horizontal ${this.state.theme}`}>
                {this.renderChildren()}
            </ul>
        )
    }
}
class SubMenu extends React.Component{
     renderChildren() {
         return React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                ...child.props,
                checked: this.props.defaultActive === child.props.index,
                onClick: this.props.onClick,
                onSelect: this.props.onSelect
            })
        })
    }
    render() {
        return (
            <li>
                <div>
                    {this.props.title}
                    <span className={"catfont cat-down"}></span>
                </div>
                <ul className="cat-submenu">
                    {this.renderChildren()}
                </ul>
            </li>
        )
    }

}
class MenuItem extends React.Component{
    changeDefault() {
        if (this.props.onClick) {
            this.props.onClick(this.props.index)
        }
        if (this.props.onSelect) {
            this.props.onSelect(this.props.index)
        }
    }
    render() {
        return (
            <li className={this.props.checked ? 'active' : ''} onClick={() => this.changeDefault()}>
                {this.props.children}
            </li>
        )
    }
}


export {
    Menu,
    MenuItem,
    SubMenu
}