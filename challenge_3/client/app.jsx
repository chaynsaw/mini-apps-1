class Form extends React.Component {
  constructor(props) {
    super(props);
    this.switchStage = this.switchStage.bind(this);
    this.state = {
      name: '',
      email: 'blagoyevich',
      password: '',
      stage: ['f1', 'f2', 'f3'],
      currentStage: 'f1'
    }
  }
  switchStage() {
    switch(this.state.currentStage) {
      case 'f1':
        this.setState({currentStage: 'f2'});
        return;
      case 'f2':
        this.setState({currentStage: 'f3'});
        return; 
      case 'f3':
        this.setState({currentStage: 'f1'});
        return; 
    }
  }
  render(props) {
    return(
      <form>
        <NameField currentStage={this.state.currentStage}/>
        <EmailField currentStage={this.state.currentStage}/>
        <Password currentStage={this.state.currentStage}/>
        {/* <InputField things = {this.state}/> */}
        <NextButton onClick={this.switchStage} />
      </form>
    )
  }
}

// var InputField = ({bows}) => {
//   return (<div>{bows}
//     </div>)
// }
var NameField = (props) => {
  if (props.currentStage === 'f1') {
    return (
    <div>Name
      <input type="text">
      </input>
    </div>)
  } else {
    return null;
  }
}
  

var EmailField = (props) => (
  <div>Email
    <input type="email">
    </input>
  </div> 
)
var Password = (props) => (
  <div>Password
    <input type="password">
    </input>
  </div>
)
var NextButton = (props) => (
  <input type="button" value="Next Stage" onClick={props.onClick}>
  </input>
)

ReactDOM.render(<Form />, document.getElementById('root'))
// ReactDOM.render(<StageSelector />, document.getElementById('root'))