// inferencia de tipos
function sumNumbers(a: number, b: number) {
    return a + b
}
const user = {
    id: 1,
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    birthDate: new Date('1980-01-01')
}
type UserAttributes = typeof user
const mary: UserAttributes = {
    id: 2,
    name: 'Mary',
    age: 28,
    isAdmin: false,
    birthDate: new Date('1990-02-01')
}

type TitleProps1 = {
    children: React.ReactNode
    size?: 'small' | 'large'
}

type ParagraphProps = {
    color: string
}

const Paragraph = ({ children, size = 'small', color }: TitleProps1 & ParagraphProps ) => {
    return <h1 style={{
        fontSize: size === 'small' ? '1.5rem' : '3rem',
        color: color
    }}>{children}</h1>
}

export { Paragraph }