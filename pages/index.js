import Section from "../components/Section";

export default function Home(){

return(
  <div>
    <div style={{zIndex: "-1",position: "absolute",width: "100%"}}>
        <div style={{overflow: "hidden",width: "100%", display: "flex",justifyContent: "center"}}>
          <img src="/bkg.png" alt="background" style={{width: "auto",height: "840px !important"}}/>
        </div>
    </div>
    <Section direction="column">
      <h1>
        <div style={{marginTop: "45px"}}>
          you're
        </div>
        <div style={{marginTop: "25px"}}>
          invited
        </div>
      </h1>
      <h2>
        Hugo turns 2!
      </h2>
      <div className="tallText" style={{width: "150px"}}>
          a party will be held on:
      </div>
      <h2>
        july 30th
      </h2>
      <div>
        12:30 - 4:00 pm
      </div>
      <div className="tallText" style={{width: "150px",marginTop: "35px"}}>
          it will be a water party, bring swimsuits and towels!
      </div>
    </Section>
  </div>
  )
}