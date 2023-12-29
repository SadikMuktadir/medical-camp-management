import useData from "../../Hooks/useData";


const MyCamp = () => {
    const [item] = useData();
    return (
        <div>
            <h1>My camp</h1>
            <h1>{item.length}</h1>
        </div>
    );
};

export default MyCamp;