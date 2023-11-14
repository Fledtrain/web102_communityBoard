/** Returns the Event component
 * @component 
 * @returns {Function} - Card component
 */
const Event = () => {
    return (
        <>
            <section className="container">
                <Card img="Forza.jpg" name="Forza Motorsport" price={69.99} link="https://youtu.be/WtuBLc3cU-o?si=3ivQWAf41LD2V-um" />
                <Card img="SW.webp" name="Star Wars Jedi: Survivor" price={59.99} link="https://youtu.be/_F6YBwIPzmk?si=72c9zP4PCobKBa2m" />
                <Card img="RE4.webp" name="Resident Evil 4" price={49.99} link="https://youtu.be/E69tKrfEQag?si=leYme_4T9wZqpoLp" />
                <Card img="SM2.webp" name="Marvel's Spider-Man 2" price={69.99} link="https://youtu.be/XrPZSq5YXqc?si=vBi-YmO7rKGM2i-E" />
                <Card img="HW.webp" name="Hogwarts Legacy" price={34.99} link="https://youtu.be/BtyBjOW8sGY?si=wiU5lCLebl0zKG5-" />
                <Card img="TLZ.webp" name="The Legend of Zelda" price={69.99} link="https://youtu.be/uHGShqcAHlQ?si=_LYsG19rXJqG1DXO" />
                <Card img="SOF.webp" name="Sons of the Forest" price={29.99} link="https://youtu.be/LpNDrrly3GI?si=EFmMU1Xasd5M9N5U" />
                <Card img="CM.webp" name="Crew MotorFest" price={57.99} link="https://youtu.be/QuvaE7VhhjY?si=CQJdxScKLsQNKwel" />
                <Card img="BG3.webp" name="Baldur's Gate 3" price={52.99} link="https://youtu.be/1T22wNvoNiU?si=c-EFXE6yvp72Fugw" />
                <Card img="PM4.webp" name="Pikmin 4" price={59.99} link="https://youtu.be/RPiT-s4i0rw?si=mevkYTgd5SU8Pv6F" />
            </section>
        </>
    )
}

/** Returns the Card component
 * @param {string} img - Image of game
 * @param {string} name - Name of game
 * @param {number} price - Price of game
 * @param {string} link - Link to game
 * @returns {void} - Returns the Card component
 */
// eslint-disable-next-line react/prop-types
const Card = ({ img, name, price, link }) => {

    return (
        <>
            <section className='card'>
                <img className="logo" src={img} alt={name} loading="lazy" />
                <div className="bundle">
                    <h2>{name}</h2>
                    <p>${price}</p>
                </div>
                <a href={link} target='_blank' rel='noreferrer' >
                    View Game
                </a>
            </section>
        </>
    )
}

export default Event