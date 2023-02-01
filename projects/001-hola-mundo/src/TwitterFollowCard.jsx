import { useState } from "react"


export const TwitterFollowCard = ({userName, name}) => {

  const [isFollowing, setIsFollowing] = useState(false);

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  const text = isFollowing ? "Siguiendo" : "Seguir"
  const buttonClassName = isFollowing ? "tw-followcard-button is-following" : "tw-followcard-button"  
  const imageSrc = `https://unavatar.io/${userName}` 

  return (
    <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img 
                src={imageSrc} 
                alt="imagen perfil"
                className="tw-followCard-avatar" />
        
            <div className="tw-followCard-info">
                <strong>{name}</strong>
                <span className=".tw-followCard-infoUserName">@{userName}</span>
            </div>
        </header>

    <aside>
        <button 
            className={buttonClassName} 
            onClick={handleClick}>
            {text}
        </button>
    </aside>
   </article>
  )
}
