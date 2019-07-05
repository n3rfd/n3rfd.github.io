import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/styles';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import FaceIcon from '@material-ui/icons/Face';
import ComputerIcon from '@material-ui/icons/Computer';

import { API, graphqlOperation } from 'aws-amplify'
import { listSkills } from './graphql/queries'

import GitHubButton from 'react-github-btn'

import Backend from './Backend'

import profile from './profile.jpeg'

const useStyles = makeStyles({
  avatar: {
    marginLeft: 17,
    marginRight: 20,
    marginTop: 0,
  },
  blackAvatar: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 0,
    color: '#fff',
    backgroundColor: '#000',
    borderRadius: 0,
    minWidth: 56,
    flexShrink: 0
  },
  icon: {
    // margin: theme.spacing(1),
    marginBottom: 0,
    marginRight: 5,
    fontSize: 14
  }
});

function App() {
  const [skills, setSkills] = useState()
  const classes = useStyles();

  useEffect(() => {
    async function fetchData() {
      try {
        // const apiData = await API.graphql(graphqlOperation(listSkills))
        // setSkills(apiData.data.listSkills.items)

        // @todo replace mocking
        const apiData = [
          {
            id: "51dd369b-5c0e-4b3a-817d-4106fb43f154",
            skill: "AWS Lambda",
            stack: "Backend"
          },
          {
            id: "51dd369b-5c0e-4b3a-817d-4106fb43f155",
            skill: "AWS GraphQL",
            stack: "Backend"
          }
        ]
        setSkills(apiData)
      } catch (err) {
        console.log('error: ', err)
      }
    }
    fetchData()
  }, [])

  return skills ? (
    <Grid container justify="center">
      {/* <GitHubButton href="https://github.com/android86/android86.github.io"
                    data-show-count="true"
                    aria-label="Star android86/android86.github.io on GitHub"
                    className="foo">Star</GitHubButton> */}

      <div className="spacer"></div>

      <Avatar alt="Remy Sharp" src={profile} className={classes.avatar} />
      <div>
        <section className="company-box">
          <span>Neftali Papelleras</span> <a className="years twitter-link" target="_blank" href="https://twitter.com/pneftali">@pneftali</a>
          <p className="years">Software Engineer (8+ years)</p>
        </section>

        <fieldset className="tags-wrapper">
          <legend>about me</legend>
          <p className="about-me">
          I am ambitious and driven.
          I thrive on challenge and constantly set goals for myself, so I have something to strive toward.
          I’m not comfortable with settling, and I’m always looking for an opportunity to do better and achieve greatness.
          In my previous role, I was promoted two times in less than three years.
          </p>
        </fieldset>
      </div>

      <div className="spacer"></div>

      {/* <div> */}
      <Avatar className={classes.blackAvatar}>OP</Avatar>
      <div>
        <section className="company-box">
          <span>Open Source</span> <a className="years" target="_blank" href="https://github.com/android86">(https://github.com/android86)</a>
          <p className="years">2019</p>
        </section>

        <fieldset className="tags-wrapper">
          <legend>Frontend</legend>
          <span className="tags">javascript</span>
          <span className="tags">reactjs</span>
          <span className="tags">vuejs</span>
          <span className="tags">material-ui</span>
        </fieldset>

        <fieldset className="tags-wrapper">
          <legend>Backend</legend>
          <span className="tags">nodejs</span>
          <span className="tags">aws</span>
          <span className="tags">aws-amplify</span>
          <span className="tags">aws-appsync</span>
          <span className="tags">graphQL</span>
          <span className="tags">serverless</span>
          <span className="tags">microservices</span>
        </fieldset>

        <fieldset className="tags-wrapper">
          <legend>Others</legend>
          <span className="tags">github</span>
          <span className="tags">travis-ci</span>
          <span className="tags">codecov</span>
          <span className="tags">codeclimate</span>
        </fieldset>
      </div>

      <div className="spacer"></div>

      <Avatar className={classes.blackAvatar}>BS</Avatar>
      <div>
        <section className="company-box">
          <span>Bridge Software</span> <a className="years" target="_blank" href="https://www.bridgesoftware.com/">(https://www.bridgesoftware.com/)</a>
          <p className="years">Software Engineer / Tech Lead</p>
          <p className="years">2014 - 2019 (5 years)</p>
        </section>

        <fieldset className="tags-wrapper">
          <legend>Frontend</legend>
          <span className="tags">javascript</span>
          <span className="tags">html</span>
          <span className="tags">css</span>
          <span className="tags">jquery</span>
          <span className="tags">ajax</span>
          <span className="tags">json</span>
          <span className="tags">backbonejs</span>
          <span className="tags">bootstrap</span>
          <span className="tags">reactjs</span>
          <span className="tags">material-ui</span>
        </fieldset>

        <fieldset className="tags-wrapper">
          <legend>Backend</legend>
          <span className="tags">php</span>
          <span className="tags">codeigniter</span>
          <span className="tags">linux</span>
          <span className="tags">mysql</span>
          <span className="tags">oop</span>
          <span className="tags">nodejs</span>
          <span className="tags">aws</span>
          <span className="tags">nosql</span>
          <span className="tags">serverless</span>
          <span className="tags">api</span>
          <span className="tags">rest</span>
        </fieldset>

        <fieldset className="tags-wrapper">
          <legend>Others</legend>
          <span className="tags">git</span>
          <span className="tags">ios</span>
          <span className="tags">android</span>
          <span className="tags">jenkins</span>
          <span className="tags">ci/cd</span>
          <span className="tags">phpunit</span>
          <span className="tags">mocha</span>
          <span className="tags">chai</span>
          <span className="tags">techlead</span>
        </fieldset>
      </div>
      {/* </div> */}

      <div className="spacer"></div>

      <Avatar className={classes.blackAvatar}>FL</Avatar>
      <div>
        <section className="company-box">
          <span>Freelance</span>
          <p className="years">2013 (1 year)</p>
        </section>

        <fieldset className="tags-wrapper">
          <legend>Backend</legend>
          <span className="tags">java</span>
          <span className="tags">jsoup</span>
        </fieldset>
      </div>

      <div className="spacer"></div>

      <Avatar className={classes.blackAvatar}>AR</Avatar>
      <div>
        <section className="company-box">
          <span>Arcanys</span> <a className="years" target="_blank" href="https://www.arcanys.com/">(https://www.arcanys.com/)</a>
          <p className="years">Software Engineer</p>
          <p className="years">2012 - 2013 (1 year)</p>
        </section>

        <fieldset className="tags-wrapper">
          <legend>Frontend</legend>
          <span className="tags">javascript</span>
          <span className="tags">html</span>
          <span className="tags">css</span>
          <span className="tags">jquery</span>
          <span className="tags">ajax</span>
          <span className="tags">json</span>
          <span className="tags">backbonejs</span>
          <span className="tags">bootstrap</span>
        </fieldset>

        <fieldset className="tags-wrapper">
          <legend>Backend</legend>
          <span className="tags">php</span>
          <span className="tags">codeigniter</span>
          <span className="tags">linux</span>
          <span className="tags">mysql</span>
          <span className="tags">oop</span>
        </fieldset>

        <fieldset className="tags-wrapper">
          <legend>Others</legend>
          <span className="tags">git</span>
          <span className="tags">ios</span>
        </fieldset>
      </div>

      <div className="spacer"></div>

      <Avatar className={classes.blackAvatar}>NS</Avatar>
      <div>
        <section className="company-box">
          <span>NextIX Systems</span> <a className="years" target="_blank" href="https://www.nextixsystems.com/">(https://www.nextixsystems.com/)</a>
          <p className="years">Software Engineer</p>
          <p className="years">2011 (1 year)</p>
        </section>

        <fieldset className="tags-wrapper">
          <legend>Frontend</legend>
          <span className="tags">javascript</span>
          <span className="tags">html</span>
          <span className="tags">css</span>
          <span className="tags">jquery</span>
          <span className="tags">ajax</span>
          <span className="tags">json</span>
        </fieldset>

        <fieldset className="tags-wrapper">
          <legend>Backend</legend>
          <span className="tags">php</span>
          <span className="tags">zend framework</span>
          <span className="tags">linux</span>
          <span className="tags">mysql</span>
        </fieldset>

        <fieldset className="tags-wrapper">
          <legend>Others</legend>
          <span className="tags">git</span>
        </fieldset>
      </div>

      <div className="spacer"></div>

      <Avatar className={classes.blackAvatar}>SC</Avatar>
      <div>
        <section className="company-box">
          <span>University of San Carlos</span>
          <p className="years">BS Computer Engineering</p>
          <p className="years">2006 - 2010</p>
        </section>
      </div>
    </Grid>
    // <Container maxWidth="sm">
    //   <Grid container >
    //     <Grid item xs={6}>

    //         <Avatar className={classes.blackAvatar}>BS</Avatar>
    //         <section>Bridge Software</section>
    //       <div>
    //           <p className="c12"><span className="c11 c13"></span></p>
    //       </div>
    //       <p className="c15 title" id="h.5rf9wr4r3no2">
    //         <span className="c11">Hello</span>
    //         <span className="c9"><br /></span>
    //         <span>I&rsquo;m Neftali Papelleras</span>
    //       </p>
    //       <p className="c3"><span className="c16">Cebu City, Philippines</span></p>
    //       <p className="c3"><span className="c6"><a className="c5" href="mailto:iam@neftalipapelleras.com">iam@neftalipapelleras.com</a></span></p>
    //       <p className="c3"><span className="c8">(+63) 932 919 5661</span></p>
    //       <Backend skills={skills}/>
    //     </Grid>
    //     <Grid item xs={6}>
    //     </Grid>
    //   </Grid>
    // </Container>
  ) : (
    <div>Loading...</div>
  )
}

export default App;
