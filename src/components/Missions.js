import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((missao, index) => (
          <MissionCard
            key={ index }
            name={ missao.name }
            year={ missao.year }
            country={ missao.country }
            destination={ missao.destination }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
