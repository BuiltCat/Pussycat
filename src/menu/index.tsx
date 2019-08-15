import * as React from "react"
import "./menu.css"

interface MenuProps{
    // 主题
    theme?: string
    defaultActive: string
    mode: string
    onSelect?: ()=> void
    children: any
}
interface MenuState{
    defaultActive: string
    theme: string
}
interface SubMenuProps{
    index: string
    title: string
    children: any
    checked?: string
    defaultActive?: any
    onClick?: any
    onSelect?: any
}
interface MenuItemProps{
    onClick?: any
    index: string
    onSelect?: any
    checked?: any
}
class Menu extends React.Component<MenuProps, MenuState>{
    constructor(props: MenuProps) {
        super(props);
        this.state = {
            theme: this.props.theme ? this.props.theme : 'default',
            defaultActive: this.props.defaultActive
        }
    }
    onClick(defaultActive: string) {
        this.setState({ defaultActive })
    }
    renderChildren() {
        return React.Children.map(this.props.children, child => {
            if (child.type === SubMenu) {
                return React.cloneElement(child, {
                    ...child.props,
                    checked: this.state.defaultActive.slice(0,1) === child.props.index,
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
            <ul className={`cat-menus ${this.props.mode} ${this.state.theme}`}>
                {this.renderChildren()}
            </ul>
        )
    }
}
class SubMenu extends React.Component<SubMenuProps>{
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
            <li  className={this.props.checked ? 'active' : ''}>
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
class MenuItem extends React.Component<MenuItemProps>{
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