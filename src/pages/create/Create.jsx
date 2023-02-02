import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

// styles
import './Create.css';

const Create = () => {


    const navigate = useNavigate();

    const { postData, data } = useFetch("https://furniture-server-production.up.railway.app/api/furniture", "POST");

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        postData(form);


    };

    useEffect(() => {
        if (data) {
            navigate('/');
        }
    }, [data]);

    return (
        <div className='create' >
            <h2 className='page-title' >Add a new Furniture</h2>
            <form onSubmit={handleSubmit} >
                <label>
                    <span>Titel</span>
                    <input
                        type="text"
                        name="title"
                        required
                    />
                </label>
                <label>
                    <span>Room</span>
                    <input
                        name="room"
                        required
                    />
                </label>
                <label>
                    <span>Size</span>
                    <select name="size">
                        <option name="size" value="small">Small</option>
                        <option name="size" value="medium">Medium</option>
                        <option name="size" value="large">Laarge</option>
                    </select>
                </label>
                <br />
                <br />
                <br />
                <span>Picture</span>
                <br />
                <br />
                <input
                    type="file"
                    name="image"

                />
                <label>
                    <span>Description</span>
                    <textarea
                        name="text"
                        required
                    />
                </label>
                <button className='btn' >submit</button>
            </form>
        </div >
    );
};

export default Create;