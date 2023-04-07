
export function HomeButton (props){
    return <a href={props.direccion}><button className="rounded-md justify-between bg-yellow-HomeButtton HomeButton 
    w-48 h-16 left-495 top-687 not-italic text-black font-extrabold text-base" type="button">
        {props.leyenda}
    </button></a>
}