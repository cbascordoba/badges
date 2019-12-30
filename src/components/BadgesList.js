import React from 'react'

class BadgesList extends React.Component{

    render() {
        return (
            <ul className="list-unstyled">
            {/* vamos a transformar un valor de objeto a un elemento  */}
            {
                this.props.badges.map((badge)=>{
                   return (
                       <li key={badge.id}>
                            <p>{badge.firstName} {badge.lastName}</p>
                       </li>
                   )
                })
            }

        </ul>
        );
    }
}

export default BadgesList;