import React from 'react';
import { post } from 'axios';


class CustomerAdd extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pName: "",
            phoneNumber: "",
            doctor: "",
            birthday: "",
            visitDay: ""
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
            })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer(){
        const url = '/customers';
        let data = {
            name: this.state.pName,
            phoneNumber: this.state.phoneNumber,
            doctor: this.state.doctor,
            birthday: this.state.birthday,
            visitDay: this.state.visitDay
        }
        return post(url,data);
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>환자 추가</h1>
                환자명: <input type="text" name="pName" value={this.state.name} onChange={this.handleValueChange}/><br/>
                핸드폰 번호: <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleValueChange}/><br/>
                등록자: <input type="text" name="doctor" value={this.state.doctor} onChange={this.handleValueChange}/><br/>
                생년월일: <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange}/><br/>
                방문날짜: <input type="text" name="visitDay" value={this.state.visitDay} onChange={this.handleValueChange}/><br/>
                <button type="submit">추가하기</button>
            </form>
        )
    }
}

export default CustomerAdd

