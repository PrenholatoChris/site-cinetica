export default function ServicesButton({icon, textColor, color, link }){

    const style = {
        container:{
            width: '400px',
            height: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px',
            margin: '10px',
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
                        width: '70px'
                    }} alt="" />
                </a>
            </h2>
        </div>
    )
}