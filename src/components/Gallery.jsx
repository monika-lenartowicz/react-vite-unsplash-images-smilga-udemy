import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const URL = "https://api.unsplash.com/search/photos?client_id=p52BaltRc9uhBN3FPzR3eO6V5MvttktlDvgGZPfR-fw&query=office";

const Gallery = () => {
	const response = useQuery({
		queryKey: ["images"],
		queryFn: async () => {
			const result = await axios.get(URL);
			return result.data;
		},
	});

	if (response.isLoading) {
		return (
			<section className='image-container'>
				<h4>loading...</h4>
			</section>
		);
	}

	if (response.isError) {
		return (
			<section className='image-container'>
				<h4>there was an error...</h4>
			</section>
		);
	}

	const results = response.data.results;

	if (results.length < 1) {
		return (
			<section className='image-container'>
				<h4>no results found...</h4>
			</section>
		);
	}

	return (
		<section className='image-container'>
			{results.map(item => {
				const { id, alt_description } = item;
				const url = item?.urls?.regular;
				return <img src={url} key={id} alt={alt_description} className='img' />;
			})}
		</section>
	);
};

export default Gallery;
