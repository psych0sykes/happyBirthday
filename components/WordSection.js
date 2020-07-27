import WordRow from "./WordRow";
import Section from "./Section";

export default function WordSeciton(props){
    const heightMax = props.heightMax ? props.heightMax : 5;
    const widthMax = props.heightMax ? props.widthMax : 5;
    const word = props.word ? props.word : "wow";
    const sectionLength = (Math.random() * heightMax) + 30;
    let array = [];
    for(var i = 0;i < sectionLength;i++){
        array.push(word)
    };
    // console.log(array)
    const NewSection = array.map((text,index)=>{
        return(<WordRow key={index} word={word} max={widthMax}/>)
    });
    return(
        <div className="wordRow" style={{transform: "rotate(-15deg)"}}>
            <Section direction="column">
                {NewSection}
            </Section>
        </div>
    )
}