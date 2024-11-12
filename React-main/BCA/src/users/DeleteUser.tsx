import React, { FC } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import SnackBar from '../snakeBar/SnackBar';
interface Props {
    deleteUser: (id: string) => void;
}

interface ShowSnackProps {
    showSnack: JSX.Element
    navigate: (to: string | number, options?: { replace?: boolean, state?: any }) => void;
}



export default function DeleteUser(props: Props) {

    
    
    const { id } = useParams();
    const navigate = useNavigate();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.deleteUser(id!);
        navigate('/users/');
    

      };
  return (
    <>
    <div>
    <form onSubmit={handleSubmit}>
        <h2>Warning!</h2>
        <h4>Are you sure you want to remove it?</h4>
        <button type='submit'>Delete</button>
        <SnackBar message='Delete Successful'/>
    </form>
        <button>
            <Link to={'/users/'}>Cancel</Link>
        </button>
    </div>

    </>
  )
}
