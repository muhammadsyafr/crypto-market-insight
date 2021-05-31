import { React,useParams } from "libraries";
import { BaseContainer } from "containers";

export const CoinDetail = () => {
    let { id } = useParams();
    return (

    <BaseContainer>
        <h3>ID: {id}</h3>
    </BaseContainer>

);
};

export default CoinDetail;
