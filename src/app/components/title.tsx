interface TitleProps{
    children: string
}

export function Title(props: TitleProps){
    const text = props.children

    return(
        <h2 className="font-semibold border-1-4 pl-1 m-4 border-amber-400"  >
            { text }
        </h2>
    )
}