import React, { Component } from 'react';
import './CreateNew.css';
import { Link } from 'react-router-dom';

type stuff = {
    name: string,
    size?: number
}
type MyState = {
    name: string,
    type: string,
    tmpitems: string,
    items: stuff[]
}
class CreateNew extends Component<{}, MyState> {

    constructor(props:any){
        super(props)

        this.state = {
            name:'',
            type: '',
            tmpitems: '',
            items: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }

    keyPress(event:any) {
        if (event.keyCode === 13) {
            const target = event.target;
            if (target.value !== '') {
                let newItems = this.state.items;
                newItems.push(target.value);
                this.setState({ items: newItems });
                this.setState({tmpitems:''});
                
            }
        }
    }

    handleChange(event:any) {
        const target = event.target;
        const stateName:string = target.name;
        this.setState<never>({
            [stateName]: target.value
        });
        
    }
    
    handleSubmit(event:any) {
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        localStorage.setItem(this.state.name, JSON.stringify(this.state));
        
    }
    render() {
        return (
            <>
            <form className="create-new" onSubmit={this.handleSubmit}>
                Create Your Container
                <label>
                    <input 
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="The Container Name"/>
                    <input
                        type="text"
                        name="type"
                        value={this.state.type}
                        placeholder="The Container Type"
                        onChange={this.handleChange} />
                    <input
                        type="text"
                        name="tmpitems"
                        value={this.state.tmpitems}
                        onKeyDown={this.keyPress}
                        onChange={this.handleChange}
                        placeholder="The Container Items" />
                    
                        <Link to="/">
                        <input
                            type="submit"
                            value="create" />
                        </Link>
                </label>
            </form>
            </>
        );
    }
}

export default CreateNew;