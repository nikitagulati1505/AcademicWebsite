// AcademicTeam.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/academicTeam.css';
import { ParallaxBanner } from 'react-scroll-parallax';

const TeamSection = ({ title, members, getCardClass, getSubTeamClass }) => (
  <div className="teamSection">
    {title && <div className={getSubTeamClass()}>{title}</div>}
    <div className="teamCardWrapper">
      {members.map((member, index) => (
        <div className={getCardClass()} key={`${member.id}-${index}`}>
          <img
            className="teamCardImage"
            src={member.imgSrc}
            alt={`${member.name} - ${member.designation}`}
          />
          <div className="teamCardInfo">
            <div className="teamMemberName">{member.name}</div>
            <div className="teamMemberRole">{member.designation}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AcademicTeam = () => {
  const [size, setSize] = useState(window.innerWidth);
  const navigate = useNavigate();

  // State variables for team data
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  // Fetch team data from backend
  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/academic-team');
        setTeamData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch team data');
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  const getHeadingClass = () => {
    if (size > 800) return 'mainHeading';
    if (size > 500) return 'subHeadingLarge';
    return 'subHeadingSmall';
  };

  const getSubTeamClass = () => {
    if (size > 800) return 'subTeamHeadingLarge';
    if (size > 500) return 'subTeamHeadingMedium';
    return 'subTeamHeadingSmall';
  };

  const getCardClass = () => {
    if (size > 800) return 'teamCardLarge';
    if (size > 500) return 'teamCardMedium';
    return 'teamCardSmall';
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  // Define the groupings and order
  const groupOrder = [
    {
      groupName: 'DoAA',
      teams: ['DoAA'],
    },
    {
      groupName: 'UG & PG Chair',
      teams: ['UG Chair', 'PG Chair'],
    },
    {
      groupName: 'Registrar & Admin Academic',
      teams: ['Registrar', 'Admin Academic'],
    },
    {
      groupName: 'Admin B.Tech.',
      teams: ['Admin B.Tech.'],
    },
    {
      groupName: 'Admin M.Tech.',
      teams: ['Admin M.Tech.'],
    },
    {
      groupName: 'Admin Ph.D.',
      teams: ['Admin Ph.D.'],
    },
  ];

  // Function to group team members by group and teams
  const groupByTeam = (data) => {
    // Create a mapping from team names to their members
    const teamMap = data.reduce((acc, member) => {
      if (!acc[member.team]) {
        acc[member.team] = [];
      }
      acc[member.team].push(member);
      return acc;
    }, {});

    // Organize teams into groups based on groupOrder
    const groupedData = groupOrder.map((group) => {
      const teamsInGroup = group.teams.map((teamName) => {
        return {
          teamName,
          members: teamMap[teamName] || [],
        };
      });
      return {
        groupName: group.groupName,
        teams: teamsInGroup,
      };
    });

    return groupedData;
  };

  return (
    <div>
      {/* Back to Home Button */}
      <button className="backButton" onClick={handleBackToHome} aria-label="Back to Home">
        &#8592;
      </button>

      <div className={getHeadingClass()}>Academic Team</div>
      <ParallaxBanner>
        {loading ? (
          <div className="loading">Loading team data...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : (
          <div className="teamContainer">
            <div className="teamBox">
              {groupByTeam(teamData).map((group, groupIndex) => (
                <div key={groupIndex} className="groupWrapper">
                  {/* Render the group heading */}
                  <div className={getSubTeamClass()}>{group.groupName}</div>
                  {/* Render all members in the group */}
                  <TeamSection
                    title={null} // No additional title
                    members={group.teams.flatMap((team) => team.members)}
                    getCardClass={getCardClass}
                    getSubTeamClass={getSubTeamClass}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </ParallaxBanner>
      <Footer />
    </div>
  );
};

export default AcademicTeam;
