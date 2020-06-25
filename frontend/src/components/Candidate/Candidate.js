import React from 'react';
import Position from '../Position/Position';
import Picture from '../Picture/Picture';
import Info from '../Info/Info';
import Name from '../Name/Name';
import Votes from '../Votes/Votes';
import Percentage from '../Percentage/Percentage';
import Popularity from '../Popularity/Popularity';
import css from './candidate.module.css';

export default function Candidate({
  previousVote,
  previousPercentage,
  candidate,
  position,
}) {
  const { id, name, votes, percentage, popularity } = candidate;
  const imageSource = `${id}.jpg`;
  return (
    <div className={css.flexRow}>
      <Position>{position}</Position>
      <Picture imageSource={imageSource} description={name} />
      <Info>
        <Name>{name}</Name>
        <Votes value={votes} previous={previousVote} />
        <Percentage value={percentage} previousPercentage={previousPercentage}>
          {percentage}
        </Percentage>
        <Popularity
          previousPercentage={previousPercentage}
          value={popularity}
        />
      </Info>
    </div>
  );
}
