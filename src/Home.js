const Home = ({product}) => {
    console.log(product, "props");
    return <>
        <h1>home</h1>
        {product.map((item)=> (
            <div key={item.id}>
                <img src={item.image} alt={item.id} width={50} height={50}></img>
                <ul key={item.id}> {item.title}</ul>
            </div>
        ))}
    </>;
};

export default Home;