import React from 'react';
import '../css/Team.css';
import { CardView } from '../components';

// team members import
import member1 from '../assets/TeamImg/mem1.png';

function Team() {
  return (
    <div className="team">
      <br />
      <div>
        <CardView socialtwitter="https://twitter.com/Rajat__Rai" sociallinkdin="https://www.linkedin.com/in/rajat-rai-96298222b/" profileimage={member1} profilename="Rajat Rai" socialgithub="https://github.com/rajatrai30" />
      </div>
    </div>
  );
}
export default Team;
