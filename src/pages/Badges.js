import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'

import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

import api from '../api'
import MiniLoader from '../components/MiniLoader'

class Badges extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined
      };

      constructor(props){
            super(props);
            console.log('1. Constructor()');

       

      }
//en este metodo inicializamos la data llamado a una función
      componentDidMount(){
       this.fetchData();
      this.intervalId = setInterval(this.fetchData,5000);
      }

      fetchData = async() => {
        
          this.setState({ loading: true, error: null })

          try {
        //   llamada asincrona utilizamos await para esperar la contestación y declarar la duncion fetchData como async
          const data = await api.badges.list();
          this.setState({ loading: false, data:data})
          } catch (error) {
            this.setState({ loading: false, error:error})
          }
      }

      componentDidUpdate(prevProps,PrevState){
          console.log('5. componentDidUpdate()');
          console.log({
              prevProps: prevProps,
              PrevState: PrevState,
          });

          console.log({
              
              props: this.props,
              state: this.state,
          }
          );
      }

      componentWillUnmount(){
          console.log('6. componentWillUnMount');
          clearInterval(this.intervalId);
      }

    render(){
        console.log('2. render()');
        if(this.state.loading=== true && !this.state.data ){
            return <PageLoading/>;
        }

        if(this.state.error){
            return <PageError error={this.state.error}/>;
        }
        return (
            <React.Fragment>
         
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo"></img>
                        </div>
                    </div>
                </div>
                <div className="Badges__container">
                     <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                     </div>

                     {/* Lista de datos predeterminados como ejemplo  */}
                     <div className="Badges__list">
                         <div className="Badges__container">
                             <BadgesList badges={this.state.data} />
                
                         </div>
                     </div>
                 {this.state.loading && <MiniLoader /> }
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;