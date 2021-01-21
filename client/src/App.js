import './App.css';
import { Component } from 'react';
import Customer from './Components/Customer';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
  root:{
    with: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table:{
    minWidth: 1080
  }
});

const customer = [{
  'id': 1,
  'name': '황대건',
  'phoneNumber': '010',
  'doctor': 'dg',
  'birthDay': '900604',
  'visitDay': '20210121'
},
{
  'id': 2,
  'name': '나라인포',
  'phoneNumber': '010',
  'doctor': 'dg',
  'birthDay': '900604',
  'visitDay': '20210121'
},
]


class App extends Component{
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
              </TableRow>
            </TableHead>
            <TableBody>
              {customer.map(c => {
                return <Customer
                  key={c.id} id={c.id} name={c.name} phoneNumber={c.phoneNumber} doctor={c.doctor} birthDay={c.birthDay} visitDay={c.visitDay}
                />
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
      
    )
  }
}

export default withStyles(styles)(App);
