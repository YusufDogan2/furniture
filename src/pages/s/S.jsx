import { useFetch } from '../../hooks/useFetch';

const S = () => {
    const { data, isPending, error } = useFetch("http://localhost:3000/fornitures");


    return (
        <div>
            {isPending && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {data && <>{
                data.map((forniture) => {
                    if (forniture.size === "small") {
                        return (
                            <div>
                                {forniture.title}
                            </div>
                        );
                    };
                })
            }
            </>}
        </div>
    );
};

export default S;