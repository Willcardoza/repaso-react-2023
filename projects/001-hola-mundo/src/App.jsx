import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export const App = () => {

  return (
    
  <section className="App">

    <TwitterFollowCard 
        isFollowing={true}
        userName="Thor" 
        name="William Cardoza Dubón"/>
    
    <TwitterFollowCard 
        isFollowing={false} 
        userName="Juan" 
        name="Elvio Cardoza Rodríguez"/>
    
    <TwitterFollowCard 
        isFollowing={true} 
        userName="Ellie" 
        name="Sherling Gutiérres Palacios"/>
    
    <TwitterFollowCard 
        isFollowing={false} 
        userName="Joel" 
        name="Joel Miller"/>

    <TwitterFollowCard 
        isFollowing={true} 
        userName="Iron Man" 
        name="Tony Stark"/>

   </section>
  )
}
