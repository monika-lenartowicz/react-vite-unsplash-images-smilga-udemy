import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const URL = "https://api.unsplash.com/search/photos?client_id=p52BaltRc9uhBN3FPzR3eO6V5MvttktlDvgGZPfR-fw&query=cat";

const Gallery = () => {
	const response = useQuery({
		queryKey: ["images"],
		queryFn: async () => {
			const result = await axios.get(URL);
			return result.data;
		},
	});
	console.log(response);
	return <div>Gallery</div>;
};

export default Gallery;
