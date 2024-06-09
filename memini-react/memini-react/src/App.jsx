import React, { Component, useEffect } from "react";

import MeminiDateComponent from "./components/memini-date-component.jsx";

import { Container, Grid } from 'semantic-ui-react';



import './App.css';
import './index.css'

class App extends Component{
    constructor(props){
        super(props);  
        
        this.API_URL = "http://localhost:5000/";

        //this can be global context stuff
        this.dateNow = new Date();
        this.yearNow = this.dateNow.getFullYear();
        this.monthNow = this.dateNow.getMonth() + 1; // who programmed this to need  + 1 to be accurate.

        
        
    }
    
  fetchData = async () => {
    fetch(this.API_URL + "api/Calendar/GetCalendar")
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json(); 
    })
    .then(data => {
      this.setState({note:data});
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }
  componentDidMount() {
 
  }

  render() { 
    
        return (
          <>
            <Container>
            <Grid>

            <Grid.Row>
            </Grid.Row>

            <Grid.Row>

            <Grid.Column width={8} tablet={16} computer={8}> {/* Adjusting width for smaller screens */}            
              <MeminiDateComponent></MeminiDateComponent>
            </Grid.Column>

            </Grid.Row>


            </Grid>

            </Container>
          </>
        );
    }
  }

export default App;







