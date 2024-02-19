import {UseMedia} from 'hooks/useMedia';
import React, {useState} from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Birds from '../../components/Birds';
import {Accordion} from '../../components/FAQ/faq.jsx';
import Footer from '../../components/Footer/footer.jsx';
import {
  Logo,
  LogoSectionAbout
} from '../../components/logo-section/logoSection.jsx';
import Media from '../../components/media/media.jsx';
import {
  FirstPrize,
  PrizeHeading
} from '../../components/prize tracks/prizes.jsx';
import {
  Sponsor,
  SponsorsHead,
  SponsorUS
} from '../../components/Sponsors/sponsors.jsx';
import {JoinTeam, Member} from '../../components/team/team';
import {Myinfo} from '../../components/Top-division-components/Top-division-components.jsx';
import {
  FOOTER,
  frequentlyAskedQuestions,
  JudgesInfo,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  TOP_SECTION
} from '../../Module/General';
import MyCalender from '../calender';
import './about.css';
import pattern from './pattern4.png';

function SponsorGroup(props) {
  return (
    <Row>
      {props.map(s => (
        <Col className="" sm={12} lg={4} md={6}>
          {' '}
          <Sponsor srcx={s.src} />{' '}
        </Col>
      ))}
    </Row>
  );
}

// javascript Map for sponsors end

// Prize group

function PrizeGroup(props) {
  return (
    <Row>
      {props.map(s => (
        <Col className="" sm={12} lg={4} md={6}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
}

// Prize group ending
function TeamMembers(props) {
  return (
    <Row className="members">
      {props.map(s => (
        <Col className="" sm={12} lg={4} md={4}>
          <Member info={s} />
        </Col>
      ))}
    </Row>
  );
}

function FrequentlyAsked(props) {
  return (
    <Row className="sf">
      {props.map(s => (
        <Col className="" sm={12} lg={6} md={6}>
          <Accordion panels={s} />
        </Col>
      ))}
    </Row>
  );
}

export default function HomePage() {
  const [media, setMedia] = useState();
  UseMedia('min-width', 1000, setMedia);

  return (
    <div className="Whole_div" style={{backgroundImage: `url(${pattern})`}}>
      <div className="color_sectiom" id="home">
        <Container fluid>
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={7} md={7}>
              <Myinfo />
            </Col>
            <Col className="d-image" sm={12} lg={4} md={4}>
              <Logo />
            </Col>
          </Row>

          <Row className="mediaInfo">
            <Col className="" sm={12} lg={12} md={12}>
              <Media />
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid>
        {/* Logo section  */}
        <Row className=" logoSection">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
          {/*<Col className="info-div" sm={12} lg={4} md={4}>
            <Logo />
          </Col>*/}
        </Row>
        {/* ******** Event Schedule here ***** */}
        <h1>Event Schedule</h1>
        <h2 align="center">Day 1</h2>
        <table class="GeneratedTable">
          <thead>
            <tr>
              <th>Time</th>
              <th>Event</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9:30 AM - 10:00 AM</td>
              <td>
                Registration <br /> <i>(Location: Foyer)</i>
              </td>
            </tr>
            <tr>
              <td>10:00 AM - 11:00 AM</td>
              <td>
                Opening Ceremonies <br /> <i>(Location: BA1130)</i>
              </td>
            </tr>
            <tr>
              <td>2:00 PM - 3:00 PM</td>
              <td>
                Workshop 1 <br /> MRI: The Gold Standard for Cardiac Imagine By
                Jay Patel <br /> <i>(Location: BA1130)</i>
              </td>
            </tr>
            <tr>
              <td>3:00 PM - 4:00 PM</td>
              <td>
                Workshop 2 <br /> Biorobotics and Rapid Prototyping by Katie
                Allison <br /> <i>(Location: BA1130)</i>
              </td>
            </tr>
            <tr>
              <td>4:00 PM - 5:00 PM</td>
              <td>
                Workshop 3 <br /> Wearable Tech In Cardiology by Megh Rathod{' '}
                <br /> <i>(Location: BA1130)</i>
              </td>
            </tr>
            <tr>
              <td>6:00 PM - 7:00 PM</td>
              <td>
                Workshop 4 <br /> Intro to Basic Hardware and Arduino by Craig
                Macsemchuk <br /> <i>(Location: BA1130)</i>
              </td>
            </tr>
            <tr>
              <td>7:30 PM - 8:30 PM</td>
              <td>
                Dinner <br /> <i>(Location: Foyer)</i>
              </td>
            </tr>
          </tbody>
        </table>
        <h2 align="center">Day 2</h2>
        <table class="GeneratedTable">
          <thead>
            <tr>
              <th>Time</th>
              <th>Event</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9:00 AM - 10:00 AM</td>
              <td>
                Breakfast <br /> <i>(Location: Foyer)</i>
              </td>
            </tr>
            <tr>
              <td>11:00 AM</td>
              <td>Submissions close!</td>
            </tr>
            <tr>
              <td>12:00 PM - 2:00 PM</td>
              <td>
                Presentations <br /> <i> (Location: BA2145, BA2155, BA2165) </i>
              </td>
            </tr>
            <tr>
              <td>3:00 PM - 4:00 PM</td>
              <td>
                Closing Ceremony
                <br /> <i>(Location: BA1130)</i>
              </td>
            </tr>
          </tbody>
        </table>

        {/* ********Event Schedule ending here ***** */}

        {/* ********Frequently asked Questions here ***** */}
        <div className="Myfaqs" id="faq">
          <h1>Frequently Asked Questions</h1>
          {frequentlyAskedQuestions.map(FrequentlyAsked)}
          {/* ********Frequently asked Questions ending here ***** */}
        </div>

        {/* ********Prizes here ***** */}
        <Row className="prizesection" id="prizes">
          <PrizeHeading
            type="Streams"
            content="Choose a stream to hack in, and compete for a stream prize!"
          />

          {Prizeinfo.map(PrizeGroup)}
        </Row>
        {/* ********Prizes ending here ***** */}

        {/* ********Sponsors here ***** */}

        <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
          <SponsorUS />
          {/*sponsorLogos.map(SponsorGroup) */}
        </Row>
        {/* ********Sponsors ending here ***** */}

        {media && <Birds top="120vh" left="0vh" type="" />}

        {/* ********Team here ***** */}
        <h1 id="team">Our Team</h1>

        {TeamInfo.map(TeamMembers)}
        {/* ********Team ending here ***** */}

        {/* ********Judges here ***** */}

        <h1 id="team">Judges</h1>
        <h2 align="center">Coming Soon!</h2>
        {/*JudgesInfo.map(TeamMembers) */}
        {/* ********Team ending here ***** */}
      </Container>
      <Footer />
    </div>
  );
}
