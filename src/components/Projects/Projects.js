import React, { useState } from 'react'
import styled from 'styled-components'
import ProjectCard from '../Cards/ProjectCard'
import { projects } from '../../data/constant'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
  clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`

const Wrapper = styled.div`
  max-width: 1350px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;
  padding: 10px 0 100px 0;
`

const Title = styled.h1`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color: ${({theme}) => theme.text_primary};

  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({theme}) => theme.text_primary};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

const ToogleGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({theme}) => theme.primary};
    color: ${({theme}) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`

const ToogleButton = styled.div`
    padding: 8px 18px;
    cursor: pointer;
    border-radius: 6px;

    ${({active, theme}) => 
        active && 
        `
            background-color: ${theme.primary + 20};
        `}

    @media screen and (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px
    }
`

const Divider = styled.div`
    width: 1.5px;
    background-color: ${({theme}) => theme.primary};
`

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 28px;
`




function Projects() {
    const [toogle, setToogle] = useState("all")

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
        I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>

        <ToogleGroup>
            {toogle === "all" ?
            <ToogleButton active value="all">All</ToogleButton> :
            <ToogleButton value="all" onClick={() => setToogle("all")}>All</ToogleButton> 
            }
            <Divider />
            {toogle === "web app" ?
            <ToogleButton active >Web App</ToogleButton> :
            <ToogleButton onClick={() => setToogle("web app")}>Web App</ToogleButton> 
            }
            <Divider />
            {toogle === "ui design" ?
            <ToogleButton active >UI Design</ToogleButton> :
            <ToogleButton onClick={() => setToogle("ui design")}>UI Design</ToogleButton> 
            }
        </ToogleGroup>

        <CardContainer>
            {toogle === "all" && projects.map((project) => <ProjectCard project={project} />)}
            {projects.filter((item) => item.category === toogle).map((project) => <ProjectCard project={project} />)}
        </CardContainer>
      </Wrapper>
    </Container>

  )
}

export default Projects