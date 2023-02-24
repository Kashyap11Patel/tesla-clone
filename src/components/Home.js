import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
  return (
    <Container>
        <Section
          title = "Model S"
          description = "Order Online for Touchless delivery"
          backgroundImg = "model-s.jpg"
          leftBtnTxt = "custom order"
          rightBtnTxt = "existing inventory"
        />

        <Section
        title = "Model Y"
        description = "Order Online for Touchless delivery"
        backgroundImg = "model-y.jpg"
        leftBtnTxt = "custom order"
        rightBtnTxt = "existing inventory" 
        />
        <Section
        title = "Model 3"
        description = "Order Online for Touchless delivery"
        backgroundImg = "model-3.jpg"
        leftBtnTxt = "custom order"
        rightBtnTxt = "existing inventory" 
        />
        <Section
        title = "Model x"
        description = "Order Online for Touchless delivery"
        backgroundImg = "model-x.jpg"
        leftBtnTxt = "custom order"
        rightBtnTxt = "existing inventory" 
        />
        <Section
        title = "Lowest Cost Solar Panels in America"
        description= "Money-back guarantee"
        backgroundImg = "solar-panel.jpg"
        leftBtnTxt = "Order Now"
        rightBtntxt = "Learn more"
        />
        <Section
        title = "Solar for New Roofs"
        description= "Solar Roof Costs Less Than a New Roof plus Solar Panels"
        backgroundImg = "solar-roof.jpg"
        leftBtnTxt = "Order Now"
        rightBtntxt = "Learn more"
        />
        <Section
        title = "Accessories"
        description= ""
        backgroundImg = "accessories.jpg"
        leftBtnTxt = "shop now"
        rightBtntxt = ""
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;    
`