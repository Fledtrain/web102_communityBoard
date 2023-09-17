const Event = () => {
    return (
        <>
            <section className="container">
                <Card img="Forza.jpg" name="Forza Motorsport" price={69.99} link="https://youtu.be/WtuBLc3cU-o?si=3ivQWAf41LD2V-um" />
                <Card img="Forza.jpg" name="Star Wars Jedi: Survivor" price={69.99} link="https://youtu.be/WtuBLc3cU-o?si=3ivQWAf41LD2V-um" />
                <Card img="Forza.jpg" name="Resident Evil 4" price={69.99} link="https://youtu.be/WtuBLc3cU-o?si=3ivQWAf41LD2V-um" />
                <Card img="Forza.jpg" name="Resident Evil 4" price={69.99} link="https://youtu.be/WtuBLc3cU-o?si=3ivQWAf41LD2V-um" />
            </section>
        </>
    )
}

// eslint-disable-next-line react/prop-types
const Card = ({ img, name, price, link }) => {

    return (
        <>
            <aside className='card'>
                <img className="logo" src={img} alt="Event" />
                <div className="bundle">
                    <h5>{name}</h5>
                    <p>${price}</p>
                </div>
                <a href={link} target='_blank' rel='noreferrer' >
                    View Game
                </a>
            </aside>
        </>
    )
}

export default Event