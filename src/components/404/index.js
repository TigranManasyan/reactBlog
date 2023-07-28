import { useNavigate } from "react-router-dom";

function Error404() {
    const navigate = useNavigate();
    return (<div>
        <h1>Page Not Found</h1>
        <button onClick={() => {
            // navigate('/'); //նշում ենք այն հասցեն ուր ուզում ենք տեղափոխել 
            navigate(-1);// հիշողությամբ մեկ քայլ հետ
            // navigate(1);// հիշողությամբ մեկ քայլ առաջ
        }}>Go to back</button>
    </div>);
}

export default Error404;