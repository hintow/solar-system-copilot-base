// create a planetlist component that takes in a planets prop.
// the prop contains an array of planet objects.
// the component should display a list of planets using the planet component.
// add the validation for the prop types.

import React from 'react';
import PropTypes from 'prop-types';
import Planet from './Planet';

const Planetlist = ({ planets }) => {
    return (
        <div>
            {planets.map((planet) => (
                <Planet key={planet.name} planet={planet} />
            ))}
        </div>
    );
}

Planetlist.propTypes = {
    planets: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            size: PropTypes.number.isRequired,
            moons: PropTypes.number.isRequired,
            image: PropTypes.string
        })
    ).isRequired
};

export default Planetlist;
