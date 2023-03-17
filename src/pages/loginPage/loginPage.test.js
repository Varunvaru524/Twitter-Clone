import {render,screen,logRoles} from '@testing-library/react'
import LoginPage from './LoginPage'

describe('Login Page',()=>{
    it('Should have a Login to Twitter content', ()=>{
        render(<LoginPage/>)
        let result = screen.getByText('Login to Twitter')
        expect(result).toBeInTheDocument()
    })

    it('Should have a button', ()=>{
        render(<LoginPage/>)
        let result = screen.getByRole('button')
        expect(result).toBeInTheDocument()
    })

    it('Should have 2 text Boxes', ()=>{
        render(<LoginPage/>)
        let result = screen.getAllByRole('textbox')
        expect(result).toHaveLength(2)
    })
})

