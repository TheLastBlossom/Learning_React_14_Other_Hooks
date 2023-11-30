import { useAjax } from '../hooks/UseAjax'

export const User = () => {
    const { setId, user } = useAjax();
    return (
        <div>
            <h1>I'm going to show a user</h1>
            <input onChange={(e)=>{
                setId(e.target.value);
            }} type='number'  />
            {user != null && (
                <div>
                    <h1>This is the use you select</h1>
                    <ul>
                        <li>{user.id}</li>
                        <li>{user.name}</li>
                        <li>{user.username}</li>
                    </ul>

                </div>
            )}
        </div>
    )
}
