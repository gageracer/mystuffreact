import React, { Component } from 'react';
import './Container.css';


type container_temp = {
        name: string,
        type: string,
        itemsnum: number,
}
type MyState = {
    container_num: number;
    
    container_list: container_temp[]
}

class Container extends Component<{},MyState> {
    constructor(props:any) {
        super(props);
        this.state = {
            container_num: 0,
            container_list: [
            //     {
            //     name: "Test-Container-Name",
            //     type: "Test-Container-type",
            //     itemsnum: 5,
            // },
            //     {
            //         name: "Test-Container-Name2",
            //         type: "Test-Container-type",
            //         itemsnum: 5,
            //     }, {
            //         name: "Test-Container-Name",
            //         type: "Test-Container-type",
            //         itemsnum: 5,
            //     } , {
            //         name: "Test-Container-Name",
            //         type: "Test-Container-type",
            //         itemsnum: 5,
            //     },
            ]
        }
    }
    
    componentDidMount() {
        this.setState({container_num: this.state.container_list.length})
    }
    getLocalData = () => {
        return (JSON.parse(localStorage.getItem("myContainers") || ''));
    };

    setLocalData = () => (
        localStorage.setItem("myContainers", JSON.stringify(this.state.container_list))
    );

    listContainers = () => (
        this.state.container_list.map((ele, index) =>
            <li className={ele.type} key={index}>{ele.name}<br />{ele.itemsnum} Stuff here</li>
    ));

    render() {
        
        // const listConts = this.state.container_list.map((ele, index) =>
        //     <li key={index}>{ele.name}<br />{ele.itemsnum} Stuff here</li>
        // );
        // console.log(this.getLocalData);
        return (
            <div id="container">
                You have {this.state.container_num} Containers
                <br/>
                    {this.state.container_num === 0 ?  <div>Create a Container!</div> : this.listContainers()}
                    
            </div>
        );
    }
}

export default Container;