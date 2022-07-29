import { Component } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from "prop-types"
import s from "./SearchBar.module.css"

export class SearchBar extends Component { 
    
    state = {
        value : ""
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.value.trim() !== "") {
                 this.props.onSubmit(this.state.value)
                this.setState({value: ""})   
        }else{
        return toast.error("You're request is empty")}

    }

    handleChange = (event) => {
        const {value} = event.target
        return this.setState({value: value})}
    
    
    render() {return <header className={s.Searchbar}>
  <form className={s.searchForm} onSubmit={this.handleSubmit}>
    <button type="submit" className={s.button}>
      <span className={s.buttonLabel}>Search</span>
    </button>

    <input
        onChange={this.handleChange}
        value={this.state.value}
      className={s.input}
      type="text"
      placeholder="Search images and photos"
    />
  </form>
</header>
    }
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func
}