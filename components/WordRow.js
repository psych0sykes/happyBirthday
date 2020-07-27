import Section from "./Section"

export default function WordRow(props){
        const max = props.max ? props.max : 5;
        const word = props.word ? props.word : "wow";
        const rowLength = (Math.random() * max) + 2;
        let array = [];
        for(var i = 0;i < rowLength;i++){
            array.push(word)
        };
        // console.log(array)
        const NewRow = array.map((text,index)=>{
            return(<div key={index} style={{fontSize: "30px",letterSpacing: "10px"}}>{text}</div>)
        });
        return(
            <div className="wordRow">
                <Section justify="left">
                    {NewRow}
                </Section>
            </div>
        )
}