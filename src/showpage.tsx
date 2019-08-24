import * as React from "react"
import * as ReactDOM from "react-dom"

// import { Button, Radio, RadioGroup, CheckBox, Menu, MenuItem, SubMenu } from "."
import { Button } from "./button"
import { Radio,RadioGroup } from "./radio"
import { Menu, SubMenu,MenuItem } from "./menu"
import  { Table }  from "./table"
import { CheckBox,CheckBoxGroup } from "./checkbox"
import { Input } from "./input"
import { Select } from "./select"
import "./font/iconfont.css"
import "./index.css"

const fn = function () {
    console.log(1);
}
interface TestState{
    value: string;
}
interface TestState1{
    value: number;
}
interface TestState6{ 
    columns: Array<{
        label: string
        prop: string
        width?: number
    }>
    data:  Array<Object>
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
    onChange = (e: string) => {
        this.setState({
          value: e,
        });
      };
    render() {
        return (
            <div>
                <Radio value="1" stateValue={this.state.value}  onChange={this.onChange.bind(this)}>备选项1</Radio>
                <Radio value="2" stateValue={this.state.value}  onChange={this.onChange.bind(this)}>备选项2</Radio>
            </div>
        )
    }
}
class Test2 extends React.Component<TestProps,TestState1> {
    constructor(props: TestProps) {
        super(props);
        this.state = {
            value: 3
        }
    }
    onChange(value: number) {
        this.setState({ value:value });
    }
    render() {
        return (
            <RadioGroup value={this.state.value} onChange={this.onChange.bind(this)}>
                <Radio value={3}>备选项</Radio>
                <Radio value={6}>备选项</Radio>
                <Radio value={9}>备选项</Radio>
            </RadioGroup>
        )
    }

}
class Test3 extends React.Component {
    render() {
        return (
            <Menu theme="dark" defaultActive="1" mode="horizontal" onSelect={this.onSelect.bind(this)} >
                <MenuItem index="1">处理中心</MenuItem>
                <SubMenu index="2" title="我的工作台">
                    <MenuItem index="2-1">选项1</MenuItem>
                    <MenuItem index="2-2">选项2</MenuItem>
                    <MenuItem index="2-3">选项3</MenuItem>
                </SubMenu> 
                <MenuItem index="3">订单管理</MenuItem>
            </Menu>
        )
    }
    onSelect(index: string){
        console.log(index)
    }
}
class Test4 extends React.Component {
    render() {
        return (
            <Menu defaultActive="1" mode="horizontal" onSelect={this.onSelect.bind(this)}>
                <MenuItem index="1">处理中心</MenuItem>
                <SubMenu index="2" title="我的工作台">
                    <MenuItem index="2-1">选项1</MenuItem>
                    <MenuItem index="2-2">选项2</MenuItem>
                    <MenuItem index="2-3">选项3</MenuItem>
                </SubMenu>
                <MenuItem index="3">订单管理</MenuItem>
            </Menu>
        )
    }
    onSelect(index: string){
        console.log(index)
    }
}
class Test5 extends React.Component {
    render() {
        return (
            <Menu defaultActive="1" mode="vertical" onSelect={this.onSelect.bind(this)}>
                <MenuItem index="1">处理中心</MenuItem>
                <SubMenu index="2" title="我的工作台">
                    <MenuItem index="2-1">选项1</MenuItem>
                    <MenuItem index="2-2">选项2</MenuItem>
                    <MenuItem index="2-3">选项3</MenuItem>
                </SubMenu>
                <MenuItem index="3">订单管理</MenuItem>
            </Menu>
        )
    }
    onSelect(index: string){
        console.log(index)
    }
}
class Test6 extends React.Component<TestProps,TestState6> {
    constructor(props: TestProps) {
        super(props);
      
        this.state = {
          columns: [
            {
              label: "日期",
              prop: "date",
              width: 180
            },
            {
              label: "姓名",
              prop: "name",
              width: 180
            },
            {
              label: "地址",
              prop: "address"
            }
          ],
          data: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
    render() {
        return (
            <Table
            //   style={{width: '100%'}}
              columns={this.state.columns}
            //   maxHeight={200}
              data={this.state.data}
            />
          )
    }
}
class Test7 extends React.Component<TestProps,TestState6> {
    constructor(props: TestProps) {
        super(props);
      
        this.state = {
          columns: [
            {
              label: "日期",
              prop: "date",
              width: 180
            },
            {
              label: "姓名",
              prop: "name",
              width: 180
            },
            {
              label: "地址",
              prop: "address"
            }
          ],
          data: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
    render() {
        return (
            <Table
            //   style={{width: '100%'}}
              columns={this.state.columns}
            //   maxHeight={200}
              data={this.state.data}
              stripe={true}
            />
          )
    }
}
class Test8 extends React.Component<TestProps,TestState6> {
    constructor(props: TestProps) {
        super(props);
      
        this.state = {
          columns: [
            {
              label: "日期",
              prop: "date",
              width: 180
            },
            {
              label: "姓名",
              prop: "name",
              width: 180
            },
            {
              label: "地址",
              prop: "address"
            }
          ],
          data: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
    render() {
        return (
            <Table
            //   style={{width: '100%'}}
              columns={this.state.columns}
            //   maxHeight={200}
              data={this.state.data}
              border={true}
            />
          )
    }
}
class Test9 extends React.Component {
  render() {
      return (
        <CheckBox clicked>
          备选项
        </CheckBox>
        )
  }
}
class Test10 extends React.Component {
  render() {
      return (
        <div>
          <CheckBox clicked disabled>
            备选项1
          </CheckBox>
          <CheckBox disabled>
            备选项2
          </CheckBox>
        </div>
        )
  }
}
interface Test11State{
  checkList: Array<string>
}
class Test11 extends React.Component<{},Test11State>{
  constructor(props: any){
    super(props)
    this.state = {
      checkList: ['复选框 A', '选中且禁用']
    }
  }
  render() {
    return (
      <CheckBoxGroup value={this.state.checkList} onChange={this.onChange}>
        <CheckBox label="复选框 A"></CheckBox>
        <CheckBox label="复选框 B"></CheckBox>
        <CheckBox label="复选框 C"></CheckBox>
        <CheckBox label="禁用" disabled></CheckBox>
        <CheckBox label="选中且禁用" disabled></CheckBox>
      </CheckBoxGroup>
    )
  }
  onChange(value:any){
    console.log(value)
  }
}
class Text12 extends React.Component<any,any>{
  constructor(props:any){
    super(props)
    
  this.state = {
    options: [{
      value: '选项1',
      label: '黄金糕'
    }, {
      value: '选项2',
      label: '双皮奶'
    }, {
      value: '选项3',
      label: '蚵仔煎'
    }, {
      value: '选项4',
      label: '龙须面'
    }, {
      value: '选项5',
      label: '北京烤鸭'
    }],
    value: ''
  };
}
render() {
  return (
      <Select options={this.state.options} placeholder="请选择"></Select>
    )  
  }

}
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
                <Radio disabled value={1}>中国</Radio>
                <Radio disabled value={2}>美国</Radio>
            </form>
        </div>
        <div>
            <h2>单选框组</h2>
            <Test2></Test2>
        </div>
        <div>
            <h2>复选框</h2>
            {/* <CheckBox>日本</CheckBox> */}
            {/* <CheckBox>中国</CheckBox> */}
            {/* <CheckBox>美国</CheckBox> */}
        </div>
        <div>
            <h1>黑色顶栏</h1>
            <Test3></Test3>
            <div className="line"></div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>默认顶栏</h1>
            <Test4></Test4>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>垂直顶栏</h1>
            <Test5></Test5> 
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>普通表格</h1>
            <Test6></Test6>
            <h1>带斑马纹表格</h1>
            <Test7></Test7>
            <h1>带边框表格</h1>
            <Test8></Test8>
            <h1>多选框</h1>
            <Test9></Test9>
            <h1>禁用多选框</h1>
            <Test10></Test10>
            <h1>多选框组</h1>
            <Test11></Test11>
            <h1>输入框</h1>
            <Input></Input>
            <h1>placeholder输入框</h1>
            <Input placeholder="请输入内容"></Input>
            <h1>禁用输入框</h1>
            <Input disabled placeholder="请输入内容"></Input>
            <h1>图标输入框</h1>
            <Input icon="cat-fire" placeholder="请输入内容"></Input>
            <h1>输入框尺寸</h1>
            <Input placeholder="请输入内容" size="large" />
            <Input placeholder="请输入内容" />
            <Input placeholder="请输入内容" size="small" />
            <Input placeholder="请输入内容" size="mini" />
            <h1>选择器</h1>
            <Text12></Text12>
        </div>
    </div>
    , document.body
)