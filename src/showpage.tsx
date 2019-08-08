import * as React from "react"
import * as ReactDOM from "react-dom"

// import { Button, Radio, RadioGroup, CheckBox, Menu, MenuItem, SubMenu } from "."
import { Button } from "./button"
import { Radio } from "./radio"
import "./font/iconfont.css"
import "./index.css"

const fn = function () {
    console.log(1);
}
interface TestState{
    value: string;
}
interface TestProps{

}
class Test extends React.Component<TestProps,TestState> {
    constructor(props: TestProps) {
        super(props);
        this.state = {
            value: "1"
        }
    }
    onChange = (e:any) => {
        console.log('radio1 checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      };
    render() {
        return (
            <div>
                <Radio value="1" stateValue={this.state.value}  onChange={this.onChange}>备选项1</Radio>
                <Radio value="2" stateValue={this.state.value}  onChange={this.onChange}>备选项2</Radio>
            </div>
        )
    }
}
// class Test2 extends React.Component<object,object> {
//     constructor() {
//         super();
//         this.state = {
//             value: 3
//         }
//     }
//     onChange(value) {
//         this.setState({ value });
//     }
//     render() {
//         return (
//             <RadioGroup value={this.state.value} onChange={this.onChange.bind(this)}>
//                 <Radio value="3">备选项</Radio>
//                 <Radio value="6">备选项</Radio>
//                 <Radio value="9">备选项</Radio>
//             </RadioGroup>
//         )
//     }

// }
// class Test3 extends React.Component {
//     render() {
//         return (
//             <Menu theme="dark" defaultActive="1" mode="horizontal" onSelect={this.onSelect.bind(this)}>
//                 <MenuItem index="1">处理中心</MenuItem>
//                 <SubMenu index="2" title="我的工作台">
//                     <MenuItem index="2-1">选项1</MenuItem>
//                     <MenuItem index="2-2">选项2</MenuItem>
//                     <MenuItem index="2-3">选项3</MenuItem>
//                 </SubMenu> 
//                 <MenuItem index="3">订单管理</MenuItem>
//             </Menu>
//         )
//     }
//     onSelect(i){
//         console.log(i)
//     }
// }
// class Test4 extends React.Component {
//     render() {
//         return (
//             <Menu defaultActive="1" mode="horizontal" onSelect={this.onSelect}>
//                 <MenuItem index="1">处理中心</MenuItem>
//                 <SubMenu index="2" title="我的工作台">
//                     <MenuItem index="2-1">选项1</MenuItem>
//                     <MenuItem index="2-2">选项2</MenuItem>
//                     <MenuItem index="2-3">选项3</MenuItem>
//                 </SubMenu>
//                 <MenuItem index="3">订单管理</MenuItem>
//             </Menu>
//         )
//     }
//     onSelect(i){
//         console.log(i)
//     }
// }

ReactDOM.render(
    <div>
        <div>
            <h2>基础按钮</h2>
            <form method='get' action='www.baidu.com'>
            <Button>默认按钮</Button>
            <Button type={'primary'}>主要按钮</Button>
            <Button type={'success'}>成功按钮</Button>
            <Button type={'info'}>信息按钮</Button>
            <Button type={'warning'}>警告按钮</Button>
            <Button type={'danger'}>危险按钮</Button>
            </form>
        </div>
        <div>
            <h2>填充按钮</h2>
            <Button fill>默认按钮</Button>
            <Button type={'primary'} fill>主要按钮</Button>
            <Button type={'success'} fill>成功按钮</Button>
            <Button type={'info'} fill>信息按钮</Button>
            <Button type={'warning'} fill>警告按钮</Button>
            <Button type={'danger'} fill>危险按钮</Button>
        </div>
        <div>
            <h2>圆角按钮</h2>
            <Button round>默认按钮</Button>
            <Button type={'primary'} round>主要按钮</Button>
            <Button type={'success'} round>成功按钮</Button>
            <Button type={'info'} round>信息按钮</Button>
            <Button type={'warning'} round>警告按钮</Button>
            <Button type={'danger'} round>危险按钮</Button>
        </div>
        <div>
            <h2>圆型按钮</h2>
            <Button icon={'cat-fire'} circle></Button>
            <Button type={'primary'} icon={'cat-fire'} circle></Button>
            <Button type={'success'} icon={'cat-pause'} circle></Button>
            <Button type={'info'} icon={'cat-pause'} circle></Button>
            <Button type={'warning'} icon={'cat-pause'} circle></Button>
            <Button type={'danger'} icon={'cat-pause'} circle></Button>
        </div>
        <div>
            <h2>圆型按钮</h2>
            <Button icon={'cat-fire'} circle></Button>
            <Button type={'primary'} icon={'cat-fire'} circle></Button>
            <Button type={'success'} icon={'cat-pause'} circle></Button>
            <Button type={'info'} icon={'cat-pause'} circle></Button>
            <Button type={'warning'} icon={'cat-pause'} circle></Button>
            <Button type={'danger'} icon={'cat-pause'} circle></Button>
        </div>
        <div>
            <h2>禁用按钮</h2>
            <Button disabled>默认按钮</Button>
            <Button type={'primary'} disabled>主要按钮</Button>
            <Button type={'success'} disabled>成功按钮</Button>
            <Button type={'info'} disabled>信息按钮</Button>
            <Button type={'warning'} disabled>警告按钮</Button>
            <Button type={'danger'} disabled>危险按钮</Button>
        </div>
        <div>
            <h2>不同尺寸</h2>
            <Button size={'mini'}>默认按钮</Button>
            <Button size={'small'}>默认按钮</Button>
            <Button size={'medium'}>默认按钮</Button>
            <Button size={'mini'} round>默认按钮</Button>
            <Button size={'small'} round>默认按钮</Button>
            <Button size={'medium'} onClick={fn} round>默认按钮</Button>
        </div>
        <div>
            <h2>单选框</h2>
            <Test></Test>
        </div>
        <div>
            <h2>禁用状态</h2>
            <form>
                {/* <Radio disabled value={1}>中国</Radio> */}
                {/* <Radio disabled value={2}>美国</Radio> */}
            </form>
        </div>
        <div>
            <h2>单选框组</h2>
            {/* <Test2></Test2> */}
        </div>
        <div>
            <h2>复选框</h2>
            {/* <CheckBox>日本</CheckBox> */}
            {/* <CheckBox>中国</CheckBox> */}
            {/* <CheckBox>美国</CheckBox> */}
        </div>
        <div>
            <h1>黑色顶栏</h1>
            {/* <Test3></Test3> */}
            <div className="line"></div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>默认顶栏</h1>
            {/* <Test4></Test4> */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    </div>
    , document.body
)