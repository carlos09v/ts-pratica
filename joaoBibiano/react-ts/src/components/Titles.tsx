import React from "react"

type TitleProps = {
    text: string
}

type TitleProps1 = {
    children: React.ReactNode
    size?: 'small' | 'large'
}

const Title = ({ text }: TitleProps) => {
    return <h1>{text}</h1>
}

const Title2 = ({ children }: { children: string }) => {
    return <h1>{children}</h1>
}

const Title3 = ({ children }: { children: React.ReactNode }) => {
    return <h1>{children}</h1>
}

const Title4 = ({ children, size = 'large' }: TitleProps1) => {
    return <h1 style={{
        fontSize: size === 'small' ? '1.5rem' : '3rem'
    }}>{children}</h1>
}

export { Title, Title2, Title3, Title4 }