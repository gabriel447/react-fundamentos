interface ICard {
    id: number
    title: string
    paragraph: string
}

export const Card = ({ id, title, paragraph }: ICard) => {
    return (
        <div>
            <h1>Card {id}</h1>
            <h2>{title}</h2>
            <p>{paragraph}</p>
        </div>
    )
}