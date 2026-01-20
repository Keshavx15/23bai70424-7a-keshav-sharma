function Demo(props) {
  return (
    <div>
      {props.products.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>₹ {item.price}</p>
          <img src={item.image} width="100" />
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Demo
