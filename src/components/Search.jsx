import React from "react"

class Search extends React.Component {
    state = {
        seacrh: '',
		type: 'all'
    }
    
	handelKey = (event) => {
		if (event.key === "Enter") {
			this.props.seacrhMovies(this.state.seacrh, this.state.type)
		}
	}

	handelFiler = (event) => {
		this.setState(() => ({type: event.target.dataset.type}), () => {
			this.props.seacrhMovies(this.state.seacrh, this.state.type)
		})
	}

    render() {
        return  <div className="row">
          <div className="input-field">
            <input id="email_inline" 
					type="search" 
					className="validate"
					placeholder="Search"
					value={this.state.seacrh}
					onChange={(e) => this.setState({seacrh: e.target.value})}
					onKeyDown={this.handelKey}
					/>
					<button className="waves-effect waves-light btn" 
							onClick={() => this.props.seacrhMovies(this.state.seacrh, this.state.type)}>
							Search
					</button>
          </div>
		  
		  <div>
				<label>
					<input className="with-gap" 
							name="type" 
							type="radio" 
							data-type="all" 
							onChange={this.handelFiler} 
							checked={this.state.type === 'all'}
							/>
					<span>All</span>
				</label>
				<label>
					<input className="with-gap" 
							name="type" 
							type="radio" 
							data-type="movie" 
							onChange={this.handelFiler} 
							checked={this.state.type === 'movie'}
							/>
					<span>Movies only</span>
				</label>
				<label>
					<input className="with-gap"  
							name="type"  
							type="radio"  
							data-type="series" 
							onChange={this.handelFiler} 
							checked={this.state.type === 'series'}
							/>
					<span>Series only</span>
				</label>
		  </div>
        </div>
    }
}

export {Search}