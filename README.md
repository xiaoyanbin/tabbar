## npm run start
react实现高阶组件的用法<br/>
// 高阶组件<br/>
1.首先写一个普通组件，<br/>
2.然后把普通组件封装成一个函数，<br/>
3.把别的组件以组件的方式导入进来<br/>


//集成式高阶组件的好处 <br/>
1.操作 prop  给组件进行增加或过滤属性<br/>

2.抽取状态，多个公共状态抽离<br/>
3.访问ref （不推荐使用）<br/>
4. 包装组件 对组件进行装饰<br/>

<!-- export default (title) => WrappedComponent => class A extends component {
    refc(instance){
      // instance.getName&&alert(instance.getName())	
    }
    constructor(props) {
    	super(props)
    	this.state = {
    		value:''
    	}
    }
    onInputChange = (e) => {
        this.setState({
        	value:e.target.value
        })
    }
    render() {

    	const { age,...otherProps } = this.props
    	const newProps = {
    		value:this.state.value,
    		onInput:this.onInputChange,
    	}
    	return (
          <div>
            <WrappedComponent  sex={'男'} {...otherProps} {...newProps}></WrappedComponent>
          </div>
    	)
    }

} -->

components/tabbar 为高阶组件的实现文件
