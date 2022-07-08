import React, {useState} from "react";

const Default = () => {
  const [Server, setServer] = useState("null");
  const [Link, setLink] = useState("null");
  const [ServerIcon, setServerIcon] = useState("#");
  const [User, setUser] = useState("null");
  const [Url, setUrl] = useState("null");
  const [UserIcon, setUserIcon] = useState("#");


  const users = [
    {user: "<KopyTKG/>", icon: "https://cdn.discordapp.com/avatars/236131719449673739/6b7d1f127c7ceb2da7046fd8490ef53c.webp?size=80", url: "https://definitelynotawebsite.website"},
    {user: "D4vEØFF", icon: "https://cdn.discordapp.com/avatars/236187553169014785/a_b8ca7380e1fe76f19783528d0ac922e7.gif?size=80", url: "https://d4veoff.thekrew.app/"},
    {user: "Seeya", icon: "https://cdn.discordapp.com/avatars/211882110091395073/6d71466e961211ebe9c538ba2d26feff.webp?size=80", url: ""},
    {user: "ByBye", icon: "https://cdn.discordapp.com/avatars/236514652421357570/a_cf12a099df770e186c05c8a900649409.gif?size=80", url: ""},
    {user: "Oncee", icon: "https://cdn.discordapp.com/avatars/323444714542071811/02c78c4dec08d734d38f2077cda87790.webp?size=80", url: ""},
    {user: "Marty11", icon: "https://cdn.discordapp.com/avatars/476760523124244486/cae716dd479a423de531e002bba4b600.webp?size=80", url: ""},

    
  ]
  const servers = [
    {title: "Teamspeak", icon: "https://addons-content.teamspeak.com/943dd816-7ef2-48d7-82b8-d60c3b9b10b3/images/648_366/teamspeaklogo_5d00347a0cb48.png", link: "ts.thekrew.app"},
    {title: "Discord", icon: "https://logodownload.org/wp-content/uploads/2017/11/discord-logo-4-1.png", link: "https://discord.gg/ZtjNUMHm8C"}
  ]

  return (
    <>
      <section>
        <div className="front-page">
            <div className="text">
                The Krew
            </div>
            <div className="strip-red"/>
        </div>
      </section>
      <section className="normal">
        <div className="container">
          <div className="strip"/>
        </div>
        <div className="content">
          <div className="title">Members</div>
          <div className="icons">
          {users.map((user, key) => {
            return(<>
              <div className="icon" style={{backgroundImage: "url("+user.icon+")", backgroundSize: "contain", backgroundColor: "transparent"}} onClick={() => {
                setUser(user.user);
                setUrl(user.url);
                setUserIcon(user.icon);
              }}/>
            </>)
          })}
          </div>
          <div className="info" style={User == "null"?{display: "none"}:{}}>
          <div className="large-icon" style={{backgroundImage: "url("+UserIcon+")", backgroundSize: "contain", backgroundColor: "transparent"}} />
             <div className="text">
                <div className="info-title">{User}</div>
                <a className="info-desc" href={Url} target="_blank">{Url}</a>
             </div>
          </div>
        </div>
      </section>
      <section className="normal">
        <div className="container">
          <div className="strip"/>
        </div>
        <div className="content">
          <div className="title">TKG platforms</div>
          <div className="icons">
          {servers.map((server, key) => {
            return(<>
              <div className="icon" style={{backgroundImage: "url("+server.icon+")", backgroundSize: "contain", backgroundColor: "transparent"}} onClick={() => {
                setServer(server.title);
                setLink(server.link);
                setServerIcon(server.icon);
              }}/>
            </>)
          })}
          </div>
          <div className="info" style={Server == "null"?{display: "none"}:{}}>
             <div className="large-icon" style={{backgroundImage: "url("+ServerIcon+")", backgroundSize: "contain", backgroundColor: "transparent"}} />
             <div className="text">
                <div className="info-title">{Server}</div>
                <a className="info-desc" href={Link} target="_blank">{Link}</a>
             </div>
          </div>
        </div>
      </section>
      <footer>
          <a href="https://github.com/KopyTKG/ReactApp" rel="noreferrer" target="_blank">
              <img src={process.env.PUBLIC_URL + "/logo.png"} />
          </a>
          <span style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
            Find us here
          </span>
      </footer>  
    </>
  );
}

export default Default;
