import './App.css';
import { Component } from 'react';
import Customer from './Components/Customer';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress'
import {withStyles} from '@material-ui/core/styles'
import CustomerAdd from './Components/CustomerAdd';

const styles = theme => ({
  root:{
    with: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table:{
    minWidth: 1080
  },
  progress:{
    margin: theme.spacing(2)
  }
});


class App extends Component{

  //state: 변경될 수 있는 데이터
  //props: 변경될 수 없는 데이터
  constructor(props) {
    super(props);
    this.state = {
      customers:'',
      completed: 0
    }
    this.stateRefresh = this.stateRefresh.bind(this);
  }

  stateRefresh = () => {
    this.setState({
      customers: '',
      completed:0
    });
    this.callApi()
      .then(res=> this.setState({customers:res}))
      .catch(err => console.log(err));
  }
  

  componentDidMount(){
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res=> this.setState({customers:res}))
      .catch(err => console.log(err));
  }

  progress = () => {
    const {completed} = this.state;
    this.setState( {completed: completed >= 100 ? 0 : completed +10 });
  }

  callApi = async () => {
    const response = await fetch('/customers');
    const body = await response.json();
    return body;
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>핸드폰 번호</TableCell>
                <TableCell>등록자</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>방문날짜</TableCell>
                <TableCell>설정</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.customers ? this.state.customers.map(c => {
                return <Customer stateRefresh={this.stateRefresh}
                  key={c.id} id={c.id} name={c.name} phoneNumber={c.phoneNumber} doctor={c.doctor} birthday={c.birthday} visitDay={c.visitDay}
                />
              }) : 
                <TableRow>
                  <TableCell colSpan="6" align="center">
                    {/* <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/> */}
                    <CircularProgress/>
                  </TableCell>
                </TableRow>
              }
            </TableBody>
          </Table>
        </Paper>
        <CustomerAdd stateRefresh={this.stateRefresh}/>
      </div>
      
    )
  }
}

export default withStyles(styles)(App);
