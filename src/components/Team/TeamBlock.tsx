import React, { FC } from "react";
import styled from "styled-components";
import TeamCard from "./TeamCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchTeam, ITeam } from "../../slices/teamSlice";


const TeamBlock: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const teamData = useSelector<RootState, ITeam[]>((state) => state.team.data);

  React.useEffect(() => {
    dispatch(fetchTeam());
  }, [dispatch]);

  return (
    <TeamBlockStyle id="team">
      <svg width="541" height="535" viewBox="0 0 541 535" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_47_485)">
          <circle cx="343" cy="343" r="343" transform="matrix(-1 0 0 1 686 -151)" fill="#F14F4F"/>
        </g>
        <defs>
          <clipPath id="clip0_47_485">
            <rect width="541" height="535" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      <svg width="424" height="550" viewBox="0 0 424 550" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_47_487)">
          <circle cx="322" cy="-14" r="321.5" transform="rotate(90 322 -14)" stroke="white" stroke-opacity="0.5"/>
          <circle cx="457.5" cy="401.5" r="148" transform="rotate(90 457.5 401.5)" stroke="white" stroke-opacity="0.5"/>
        </g>
        <defs>
          <clipPath id="clip0_47_487">
            <rect width="550" height="424" fill="white" transform="translate(424 1.52588e-05) rotate(90)"/>
          </clipPath>
        </defs>
      </svg>
      <div className="container team-container">
        <h2>Наша команда</h2>
        <ul>
          {teamData &&
            teamData.map((item: ITeam) => (
              <TeamCard data={item} key={item.id} />
            ))}
        </ul>
      </div>
    </TeamBlockStyle>
  );
};

const TeamBlockStyle = styled.section`
  background: rgb(72, 66, 131) url("./images/team-back.png") no-repeat top right;
  background-size: 30%;
  padding-bottom: 56px;

  h2 {
    position: relative;
    color: white;
    font-family: "Intro";
    margin-bottom: 35px;
  }

  .team-container {
  padding: 60px 0;
  }

  ul {
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 32px 15px;
    flex-wrap: wrap;
  }

  svg {
  right: 0;
  }

`;

export default TeamBlock;
