function Header() {
	return (
		<nav className="blue darken-4">
			<div className="nav-wrapper">
				<a
					href="https://antonmhnk.github.io/react-movie/"
					className="brand-logo"
				>
					React Movies
				</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li>
						<a
							href="https://github.com/AntonMhnk/react-movie/tree/main"
							target="_blank"
							rel="noreferrer"
						>
							Repo
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export { Header };
