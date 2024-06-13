import { ReactNode } from 'react'
import { Wrapper } from './styles'

export const Container = ({ children }: { children: ReactNode }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}
