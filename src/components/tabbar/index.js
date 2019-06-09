import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './index.css'
const tatbarArr = [
    {
        img:'icon-home',
        text:'首页',
        link:'/home'
    },
    {
        img:'icon-fenlei',
        text:'分类',
        link:'/category'
    },
    {
        img:'icon-qicheqianlian-',
        text:'购物车',
        link:'/car'
    },
    {
        img:'icon-yonghu',
        text:'我的',
        link:'/user'
    }
]

const Tabbar = (WrappedComponent) => class Tabbar extends Component {
    constructor(props){
        super(props)
        this.state ={
            index:''
        }
    }
    itemChange = (i) => {
        console.log(i)
         this.setState({
             index:i
         })
    }
    componentWillMount(){

    }
    componentDidMount(){
        console.log(this.props.match)
    }
    render (){
        const url = this.props.match.path;
        return (
            <div className="content">
                <div className="content-a">
                   <WrappedComponent></WrappedComponent>
                </div>
                <div className='tabbar'>
                    
                    <div className='tabbar-content'>
                    {
                        tatbarArr.map((v,i)=>( 
                        
                        <Link to ={v.link} key={i} className={"tarbar-item " +((url.indexOf(v.link)>-1) ? 'active': '') } onClick={this.itemChange.bind(this,i)}>
                            <div className={'iconfont  '+ v.img}></div>
                            <div className=''>{v.text}</div>
                        </Link>  
                        
                        ))
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default Tabbar;