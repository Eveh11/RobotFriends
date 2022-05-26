import React from "react";
import Card from "../Components/Card";

const CardList = ({ robots }) => {
    // const cardComponent = robots.map((user, i) => {
    //     return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/> 
    // });
    const cardComponent = robots.map((user) => {
        return (
            <Card 
                key={user.id} 
                id={user.id} 
                name={user.name} 
                email={user.email}
            /> 
        );
    });
    return (
        <div>
            { cardComponent }
        </div>
    );

}

export default CardList;