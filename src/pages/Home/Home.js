import React,{Component}  from 'react'
export default class Home extends Component{
      constructor(props){
          super(props);
          this.state={
             count:0
          }
      }
      _handleClick(){
         this.setState({
             count:++this.state.count
         })
      }
      render(){
          return(
              <div>
                  <h1>this is home2312</h1>
                  当前计数:{this.state.count}
                  <button onClick={()=>this._handleClick()}>自增</button>
              </div>


          )
      }
}