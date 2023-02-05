import './DiagramBar.css'

const DiagramBar = function (props) {

    let barFillHeight = '0%';
    if(props.maxValue > 0 ){
        barFillHeight = Math.round(props.value / props.maxValue * 100)+'%';
    }


    return (
        <div key={props.key} className={'diagram-bar'}>
            <div className={'diagram-bar__inner'}>
                <div className={'diagram-bar__fill'} style={{
                    height: barFillHeight
                }}>

                </div>
            </div>
                <div className={'diagram-bar__label'}>{props.label}</div>
        </div>
    )
}

export default DiagramBar;


// key={dataSet.id}
// label={dataSet.label}
// maxValue={null}
// value={dataSet.value}/>)}