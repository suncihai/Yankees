
import React, { Component } from 'react';
import { debounce } from 'lodash'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button, Form, Input, message, Spin } from 'antd'
import ReactPlayer from 'react-player'
import cx from 'classname'
import { videoWords, sidebarMenu } from '../../common/js/const.js'
import axios from 'axios'
import '../../common/css/animation.css'

//image
import iphoneX from '../../assets/img/iphoneX.png'
import facebook from '../../assets/img/facebook.png'
import instagram from '../../assets/img/instagram.png'
import twitter from '../../assets/img/twitter.png'
import iosdownload from '../../assets/img/download1.svg'
import androiddownload from '../../assets/img/download2.svg'
import { log } from 'util';

const ContentsBody = styled.div`
   min-height: 200vh;
`

const ContentWrap = styled.div`
   height: 100vh;
   width: 100vw;
   transition: background 0.5s ease-in;
   background: #fff;
   .main-box {
      width: 1400px;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      .left-box {
         padding-top: 140px;
         display: inline-block;
         width: 600px;
         vertical-align: top;
         h2 {
            font-size: 50px;
            margin-bottom: 25px;
            font-family: 'DIN-Bold';
            letter-spacing:1px;
            line-height: 1.2;
         }
         p {
            font-size: 12px;
            letter-spacing: 1.2px;
            margin-bottom: 30px;
         }
         .ant-input-group {
            width: 400px;
            margin-bottom: 40px;
         }
         img.icon {
            width: 30px;
            margin-right: 10px;
         }
         &.second {
            padding-top: 140px;
         }
      }
      .right-box {
         display: inline-block;
         vertical-align: top;
         padding-top: 250px;
         .phone-bg {
            width: 600px;
            height: 280px;
            background-image: url(${iphoneX});
            background-size: cover;
            padding: 22px;
            overflow: hidden;
            .container {
               height: 580px;
               overflow: hidden;
               position: relative;
               img {
                 position: absolute;
                 width: 500px;
                 left: 45px;
                 visibility:hidden;
                 opacity: 0;
                 &.imgFade1 {
                    transition: opacity 1.5s ease-in;
                    z-index: 2;
                    opacity: 1;
                    visibility: visible;
                 }
                 &.imgFade2 {
                    opacity: 1;
                    visibility: visible;
               }
               }
            }
         }
         &.second {
            padding-top: 150px;
         }
      }
   }
   &.top {
      background: linear-gradient(145deg,#fff 10%,#ebf4ff 60%,#69b2ff 150%);
   }
   &.intro {
      position: relative;
      .right-box {
         img {
            width: 550px;
            position: relative;
         }
      }
   }
   &.dark {
      background: #2c2c2c;
      .main-box {
         .left-box {
            h2, p {
               color: #fff;
            }
         }
      }
   }
`

const VideoWrapper = styled.div`
   width: 100vw;
   overflow: hidden;
   position: relative;
   video {
      object-fit: cover;
      height: 100vh;
      transition: all 1s ease-in-out;
   }
`

const StoryWrapper = styled.div`
   position: absolute;
   transform: translate(-50%,-50%);
   left:50%;
   top:50%;
   font-size:40px;
   color: #fff;
   white-space: nowrap;
   z-index: 51;
`

const Mask = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  z-index:50;
  background: #000;
`

const SideBar = styled.div`
  position: fixed;
  left: 0;
  top: 12.5vh;
  width: 175px;
  height: 75vh;
  z-index: 70;
  ul {
     display: flex;
     height: 100%;
     flex-direction: column;
     justify-content: space-between;
     li {
        align-items: center;
        display: flex;
        height: 8vh;
        color: #ddd;
        padding: 30px;
        cursor: pointer;
        &.active {
           color: #000;
           border-left: 5px solid #000;
           &.light {
              color: #fff;
              border-left: 5px solid #fff;
           }
        }
        &.light {
           color: #aaa;
        }
     }
  }
`


const Contents = () => {
   const [ story, setStory ] = useState(0);
   const [ video, setVideo ] = useState('https://www.youtube.com/watch?v=62Ku-EwXQqM');
   const [ mask, setMask] = useState(false);
   const [ bars, setBars] = useState(sidebarMenu);
   const [ light, setLight ] = useState(false);
   const [ app1, setApp1] = useState(0);

   const [ data, getData] = useState(null);

   const timer = () => {
      setTimeout(()=>{
         addStory(story)
         addApp1(app1)
         timer()
      },5000)
   }

   const doMask = (video) => {
      setMask(mask => true)
      setTimeout(()=>{
         setMask(mask => false)
         setVideo(video)
      },1000)
   }

   const addStory = (story) => {
      setStory(story => {
         if(story == 1) {
            doMask('https://www.youtube.com/watch?v=NtmQYAivK5I')
         }
         if(story == 3) {
            doMask('https://www.youtube.com/watch?v=2Ab-uoEQQ4U')
         }
         if(story == 5) {
            doMask('https://www.youtube.com/watch?v=WSCnkjeUXCw')
         }
         if(story == 7) {
            doMask('https://www.youtube.com/watch?v=62Ku-EwXQqM')
            return 0
         }

         return story + 1
      })
   }

   const addApp1 = (app1) => {
      setApp1(app1 => {
         if(app1 == 2) {
            return 0
         }
         return app1 + 1
      })
   }

   const selectBar = (bars, num, light) => {
     const windowHeight = window.innerHeight

     bars.map((ele, index)=>{
        if(num==index) {
           ele.active = true
        }else{
           ele.active = false
        }
     })
     setBars(bars => bars)
     setLight(light)
     window.scrollTo({
       top: num * windowHeight,
       behavior: 'smooth'
     })
   }

   const onScroll = debounce(() => {
      const height = window.scrollY
      const windowHeight = window.innerHeight
     
     if(height<windowHeight/2) {
        selectBar(bars, 0, false)
     }else if(height>=windowHeight/2&&height<1.5*windowHeight){
        selectBar(bars, 1, false)
     }else if(height>=1.5*windowHeight&&height<2.5*windowHeight){
        selectBar(bars, 2, true)
     }
   },350)
    
   useEffect(() => {
      timer()
      window.addEventListener('scroll', onScroll)

      axios.get('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=new_york_yankees')
      .then((res)=>{
         getData(res.data.teams[0]);
      })
      .catch((error)=>{
         console.log(error);
      })

      return () => {
         clearTimeout(timer)
         window.removeEventListener('scroll', onScroll)
      }
   },[])
   
   const Search = Input.Search
   
   return ( 
      <ContentsBody>
         <SideBar>
            <ul>
            {
               bars.map((ele, index)=>{
                  return (
                     <li onClick={()=>selectBar(bars, index)} className={cx({'active':ele.active,'light':light})} key={index}>{ele.bar}</li>
                  )
               })
            }
            </ul>
         </SideBar>
         <ContentWrap className={cx({'top':true,'dark':light})}>
           <div className="main-box">
               <div className="left-box">
                  <h2>New York Yankees</h2>
                  <p>{data ? data.strDescriptionEN : null}</p>
                  <a href={data ? `//${data.strFacebook}` : '#'} target='_blank'>
                     <img className="icon" src={facebook} />
                  </a>
                  <a href={data ? `//${data.strInstagram}` : '#'} target='_blank'>
                    <img className="icon" src={instagram} />
                  </a>
                  <a href={data ? `//${data.strTwitter}` : '#'} target='_blank'>
                    <img className="icon" src={twitter} />
                  </a>
               </div>
               <div className="right-box">
                  <div className="phone-bg">
                    <div className="container">
                       <img className={cx({'imgFade1':app1 == 0,'imgFade2':app1 == 1})} src={data ? data.strTeamFanart1 : null} />
                       <img className={cx({'imgFade1':app1 == 1,'imgFade2':app1 == 2})} src={data ? data.strTeamFanart2 : null} />
                       <img className={cx({'imgFade1':app1 == 2,'imgFade2':app1 == 0})} src={data ? data.strTeamFanart3 : null} />
                    </div>
                  </div>
               </div>
           </div>
         </ContentWrap>
         <ContentWrap className={cx({'intro':true,'dark':light})}>
         <div className="main-box">
               <div className="left-box second">
                  <h2>Where are we?</h2>
                  <p>{data ? data.strDescriptionEN : null}</p>
                  
               </div>
               <div className="right-box second">
                   <img className="riseDown" src={data ? data.strTeamJersey : null} />
               </div>
           </div>
         </ContentWrap>
         <VideoWrapper>
            <ReactPlayer url={video} playing muted loop width="100%" height="100vh"/>
            <Mask className={mask?'maskFadeIn':'maskFadeOut'}/>
            <StoryWrapper>
               <>
               {
                  videoWords.map((ele, index)=>{
                     return (
                        <div
                          className={story == index ? 'wordfadeIn' : 'wordfadeOut'}
                          key={index}
                        >
                          {ele}
                        </div>
                     )
                  })
               }
               </>
            </StoryWrapper>
         </VideoWrapper>
      </ContentsBody>
   );
}

export default Contents