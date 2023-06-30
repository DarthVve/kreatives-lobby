import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: 'center', padding: '150px 0' }}>
            <RotatingLines width="35" strokeColor="#f8982c" strokeWidth="3" />
        </div>
    )
};

export default Loader;