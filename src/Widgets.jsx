export default function Widgets({icon, textColor, color, link }){

    const style = {
        container:{
            width: '70px',
            height: '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px',
            boxShadow: '2px 2px 8px black',
            backgroundColor: color,
        },
        text:{
            textDecoration: 'none', 
            color: textColor
        }
        
    }


    return(
        <div style={style.container}>
            <h2>
                <a href={link} target="_blank" rel="noopener noreferrer" style={style.text}>
                    <img src={icon} style={{
                        width: '60px',
                        height: '60px'
                    }} alt="" />
                </a>
            </h2>
        </div>
    )
}