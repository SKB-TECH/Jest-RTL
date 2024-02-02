
type great={
    name:string;
}
export const Great = (props:great) => {
    return (
        <div>
            {` Hello ${props.name}`}
        </div>
    );
};
