import { useFetch } from '../../hooks/useFetch';

const M = () => {
    const { data, isPending, error } = useFetch("https://furniture-server-production.up.railway.app/api/furniture");

    /* const getmedium = data.filter(item => {
        return item.size === "medium";
    }); */

    return (
        <div>
            {isPending && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {data && <>
                <div className='card-list' >
                    {data.map((forniture) => {
                        if (forniture.size === "medium") {
                            return (
                                <div className='card' >
                                    <h1>{forniture.title}</h1>
                                    <p>{forniture.room}</p>
                                    <p>{forniture.size}</p>
                                    <img className='pic' src={"https://furniture-server-production.up.railway.app/" + forniture.image} alt="asdf" />
                                    <p>{forniture.text}</p>
                                </div>
                            );
                        }
                    })
                    }
                </div>
            </>}
        </div>
    );
};

export default M;