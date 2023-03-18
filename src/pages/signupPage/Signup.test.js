import {render,screen} from '@testing-library/react'
import SignupPage from './Signup'

describe('Signup Page',()=>{
    it('Should have a Join Twitter Today content', ()=>{
        render(<SignupPage/>)
        let result = screen.getByText('Join Twitter Today')
        expect(result).toBeInTheDocument()
    })

    it('Should have a button', ()=>{
        render(<SignupPage/>)
        let result = screen.getByRole('button')
        expect(result).toBeInTheDocument()
    })

    it('Should have 3 text Boxes', ()=>{
        render(<SignupPage/>)
        let result = screen.getAllByRole('textbox')
        expect(result).toHaveLength(3)
    })
})

