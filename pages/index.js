import React from 'react'
import Layout from '../components/layout/Layout'
import styled from 'styled-components'
import Contents from '../components/index/Contents'


import * as css from '../common/css/style.css'

const Body = styled.div`
   background: #ebeef0;
`

const Container = styled.div`
    min-height: 97vh;
    background: #fff;
`


class Index extends React.Component {
  state = {
    isDark : false,
    light: true,
    team_data: null
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll',this.onScroll)
  }

  onScroll = () => {
    const height = window.scrollY
    const windowHeight = window.innerHeight

    if ( height >= 2 * windowHeight) {
       this.setState({light: false})
    } else {
       this.setState({light: true})
    }
  }

   render(){
      const { isDark, light } = this.state
 
      return (
        <Layout isDark={isDark} light={light} className={css.sovleNextBug}>
          <Body>
            <Container className="banner-container">
              <Contents data={this.state.team_data}/>
            </Container>
          </Body>
        </Layout>
      )
   }
}

export default Index



