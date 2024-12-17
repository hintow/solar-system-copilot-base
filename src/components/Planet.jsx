// 
// create a planet component that takes in a planet prop.
// the Prop contains the name, size, number of moons of the planet, a picture of the planet
// the component should display the name, size, number of moons and the picture of the planet
// If there is no picture of the planet, display a default image.
// add the validatio for the prop types. image is optional.
// make a planetlist comp 
import React from 'react';
import PropTypes from 'prop-types';

const Planet = ({ planet }) => {
    const { name, size, moons, image } = planet;
    return (
        <div>
        <h2>{name}</h2>
        <p>Size: {size}</p>
        <p>Moons: {moons}</p>
        <img src={image || 'https://via.placeholder.com/150'} alt={name} />
        </div>
    );
    }

Planet.propTypes = {
    planet: PropTypes.shape({
        name: PropTypes.string.isRequired,
        size: PropTypes.number.isRequired,
        moons: PropTypes.number.isRequired,
        image: PropTypes.string
    }).isRequired
};

export default Planet;
