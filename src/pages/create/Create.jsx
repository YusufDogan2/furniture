import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

// styles
import './Create.css';

const Create = () => {

    const [title, setTitle] = useState("");
    const [room, setRoom] = useState("");
    const [text, setText] = useState("");
    const [size, setSize] = useState("");
    const navigate = useNavigate();



    const { postData, data, error } = useFetch("http://localhost:3000/fornitures", "POST");

    const handleSubmit = (e) => {
        e.preventDefault();
        postData({ title, size, room, text });

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
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        value={title}
                        required
                    />
                </label>
                <label>
                    <span>Room</span>
                    <input
                        onChange={(e) => setRoom(e.target.value)}
                        type="text"
                        value={room}
                        required
                    />
                    <span>Size</span>
                    <input
                        onChange={(e) => setSize(e.target.value)}
                        type="text"
                        value={size}
                        placeholder="large,medium or large"
                        required
                    />
                </label>
                <br />
                <br />
                <br />
                <span>Picture</span>
                <br />
                <br />
                <input
                    type="file"
                    name="myImage"
                />
                <label>
                    <span>Description</span>
                    <textarea
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        required
                    />
                </label>
                <button className='btn' >submit</button>
            </form>
        </div >
    );
};

export default Create;