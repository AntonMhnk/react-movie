import React, { useState } from "react";

function Search(props) {
	const { seacrhMovies = Function.prototype } = props;

	const [seacrh, setSearch] = useState("");
	const [type, setType] = useState("all");

	const handelKey = (event) => {
		if (event.key === "Enter") {
			seacrhMovies(seacrh, type);
		}
	};

	const handelFiler = (event) => {
		setType(event.target.dataset.type);
		seacrhMovies(seacrh, event.target.dataset.type);
	};

	return (
		<div className="row">
			<div className="input-field">
				<input
					id="email_inline"
					type="search"
					className="validate"
					placeholder="Search"
					value={seacrh}
					onChange={(e) => setSearch(e.target.value)}
					onKeyDown={handelKey}
				/>
				<button
					className="waves-effect waves-light btn"
					onClick={() => seacrhMovies(seacrh, type)}
				>
					Search
				</button>
			</div>

			<div>
				<label>
					<input
						className="with-gap"
						name="type"
						type="radio"
						data-type="all"
						onChange={handelFiler}
						checked={type === "all"}
					/>
					<span>All</span>
				</label>
				<label>
					<input
						className="with-gap"
						name="type"
						type="radio"
						data-type="movie"
						onChange={handelFiler}
						checked={type === "movie"}
					/>
					<span>Movies only</span>
				</label>
				<label>
					<input
						className="with-gap"
						name="type"
						type="radio"
						data-type="series"
						onChange={handelFiler}
						checked={type === "series"}
					/>
					<span>Series only</span>
				</label>
			</div>
		</div>
	);
}

export { Search };
