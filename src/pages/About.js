// Import icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


// Import initiative assets
import dev_image from "../assets/img/ada_bot_scarf.png";
import student_image from "../assets/img/ada_bot_sleepy.png";
import mentor_image from "../assets/img/ada_bot_hands_up.png";
import podcast_image from "../assets/img/ada_bot_hat1.png";
import React from 'react'
import db from '../firebase'

class About extends React.Component {

  state = {
    initiatives: null,
    executives: null
  }


  componentDidMount() {

    console.log("mounted")
    db.collection("executives").get()
    .then( snapshot => {
      const executives = []
      snapshot.forEach(doc => {
        const data = doc.data()
        executives.push(data)

      })
      this.setState({executives: executives})
      console.log(executives)
    })
    .catch(error => console.log(error))
    
    db.collection("initiatives").get()
    .then( snapshot => {
      const initiatives = []
      snapshot.forEach(doc => {
        const data = doc.data()
        initiatives.push(data)
      })
      this.setState( {initiatives: initiatives})
      console.log(initiatives)
    })
    .catch(error => console.log(error))
  }


  render() {
  library.add(fab, faEnvelope); //importing brand icons for social-media
  const images = [dev_image, student_image, mentor_image, podcast_image];


  return (
    <div className="page">

      <div className="page-title">
        <h1>About</h1>
        <h5 className="text-center">Learn more about Ada's Team.</h5>

      </div>
      {/* Title Intro */}
      <div id="about-goal" className="my-6 mb-8">
        <p>
          In Ada's Team, our goal is to <b>promote diversity in computing science, games, technology, engineering, and
          mathematics.</b> By diversity, we include but are not limited to the following categories:
          gender, race, ethnicity, religion, ability, sexuality, social class, and any other factor
          of discrimination or minority group. <br /> 
          <b>We embrace and celebrate your differences, striving
          to foster an inclusive culture and safe space for everyone to collaborate and thrive in.</b>
        </p>
      </div>

      {/* Initiative block */}
      <div id="initiatives" className="py-7">
        <h2 className="pb-4">OUR INITIATIVES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-36 gap-y-10">

          {this.state.initiatives && this.state.initiatives.map((initiative, i) => (
            // Initiative Info
            <div className="grid justify-items-center">
              <div className="initiative-image">
                {initiative["image"] !== "" && <img src={images[i]} alt="adas-team-bot" 
                className="h-40 w-30 pb-3" />}
              </div>
              

              <h4 className="font-title text-2xl">{initiative["name"]}</h4>

              <div className="description">
                <p>{initiative["description"]}</p>
              </div>  

              <div className="initiative-social-media" className="my-2 space-x-4">
                {initiative["contact"]["instagram"] !== "" && (
                  <a href={initiative["contact"]["instagram"]} className="text-3xl">
                    <FontAwesomeIcon icon={['fab', 'instagram']}/>
                  </a>)}
                {initiative["contact"]["email"] !== "" && (
                  <a href={initiative["contact"]["email"]} className="text-3xl">
                    <FontAwesomeIcon icon={faEnvelope}/>
                  </a>)}
              </div>
            </div>
          ))}

        </div>


      </div>

      <div className="join-links" className="flex flex-col space-y-5 py-5 items-stretch">
        <div id="adas-tutoring-join">
          <h3 className="font-title">Ada's Podcast</h3>
          <p>
            Get FREE access to virtual one-on-one tutoring sessions, and connect 
            with our students through virtual hangouts and study group sessions. 
            There are tutors available to help with various CMPUT, MATH and STAT courses.
          </p>
          <button className="self-center"> 
            <span className="pr-3 text-lg"><FontAwesomeIcon icon={['fab', 'slack']}/></span>
            Join Ada's Tutoring
          </button>
        </div>
        <div id="adas-base-join">
          <h3 className="font-title">Ada's Base</h3>
          <p>
            Join the Ada's Base Discord server: an online community of students that 
            share job opportunities and hackathons, review resumes, and hold each other 
            accountable with virtual coworking sessions. 
          </p>
          <button>
            <span className="pr-3 text-lg"><FontAwesomeIcon icon={['fab', 'discord']}/></span>
            Join Ada's Base
          </button>
        </div>
      </div>



      <div id="the-team">
        <div className="title">
          <h2>MEET THE TEAM</h2>
          <h3 className="font-title text-pink text-2xl">2020-2021</h3>
        </div>

        {this.state.executives && this.state.executives.map((executive, i) => (
          <div id="executives" className="blue-rect-shadow">
            <div className="image">{executive["image"] !== "" && executive["image"]}</div>
            <div className="">
              <div className="name">
                <h4 className="font-title">{executive["name"]}</h4>
              </div>
              <div id="executive-role" className="mb-2">
                <p>
                  <em>{executive["role"]}</em>
                </p>
              </div>
              <div id="executive-description">
                <p>{executive["description"]}</p>
              </div>
            </div>

            <div className="my-2 space-x-4 text-3xl">
              <a 
                href={executive.contact.LinkedIn}> 
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </a>
              <a href={executive.contact.Github} alt="Github">
                <FontAwesomeIcon icon={['fab', 'github']}/> 
              </a>
              {executive.contact.Other !== "" && (
                <a className="Contact" href={executive.contact.Other} alt="Contact">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              )}
              <br />
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>

  );
  }
}


export default About;
