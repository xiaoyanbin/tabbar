## npm run start
react实现高阶组件的用法
// 高阶组件
1.首先写一个普通组件，
2.然后把普通组件封装成一个函数，
3.把别的组件以组件的方式导入进来

//通过高阶组件给被包裹的值进行增加属性或删除属性
export default (title) => WrappedComponent => class A extends component {
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

}