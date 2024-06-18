import { useGlobalContext } from "../context";

const SearchForm = () => {
	const { setSearchTerm } = useGlobalContext();
	const handlSubmit = e => {
		e.preventDefault();
		const searchValue = e.target.elements.search.value;
		if (!searchValue) return;
		setSearchTerm(searchValue);
	};
	return (
		<section>
			<h1 className='title'>unsplash images</h1>
			<form className='search-form' onSubmit={handlSubmit}>
				<input type='text' name='search' className='form-input search-input' placeholder='tiger' />
				<button className='btn'>search</button>
			</form>
		</section>
	);
};

export default SearchForm;
