 type GreetProps={
    name:string
 }


const Second = (props:GreetProps) => {
    return (
        <div>
            <h2>{`Hello ${props.name}`}</h2>
        </div>
    );
};
export default  Second