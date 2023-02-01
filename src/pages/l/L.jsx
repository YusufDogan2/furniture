import { useFetch } from '../../hooks/useFetch';

const L = () => {

    const { data, isPending, error } = useFetch("/api/furniture");


    return (
        <div>
            {isPending && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {data && <>{
                data.map((forniture) => {
                    if (forniture.size === "large") {
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

export default L;