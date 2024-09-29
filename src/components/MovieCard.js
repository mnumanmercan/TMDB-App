import Image from 'next/image';

const MovieCard = ({ title, image, imdbRating, year }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image src={image} alt={title} width={300} height={450} className="w-full object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <div className="flex justify-between items-center">
                    <span className="text-yellow-500">⭐ {imdbRating}</span>
                    <span className="text-gray-600">{year}</span>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;