const SearchForm = () => {
	const handlSubmit = e => {
		e.preventDefault();
		const searchValue = e.target.elements.search.value;
		if (!searchValue) return;
	};
	return (
		<section>
			<h1 className='title'>unsplash images</h1>
			<form className='search-form' onSubmit={handlSubmit}>
				<input type='text' name='search' className='form-input search-input' placeholder='cat' />
				<button className='btn'>search</button>
			</form>
		</section>
	);
};

export default SearchForm;
