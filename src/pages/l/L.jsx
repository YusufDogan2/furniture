import { useFetch } from '../../hooks/useFetch';
import '../../components/Card.css';

const L = () => {

    const { data, isPending, error } = useFetch("https://furniture-server-production.up.railway.app/api/furniture");


    return (
        <div>
            {isPending && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {data && <>
                <div className='card-list' >
                    {data.map((forniture, index) => {

                        if (forniture.size === "large") {
                            return (
                                <div className='card' key={index} >
                                    <h1>{forniture.title}</h1>
                                    <p>{forniture.room}</p>
                                    <p>{forniture.size}</p>
                                    <img className='pic' src={"https://furniture-server-production.up.railway.app/" + forniture.image} alt="asdf" />
                                    <p>{forniture.text}</p>
                                </div>);
                        }
                    })}
                </div>
            </>}
        </div>
    );
};

export default L;