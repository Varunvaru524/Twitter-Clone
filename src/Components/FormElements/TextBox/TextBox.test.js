import {render,screen} from '@testing-library/react'
import TextBox from './TextBox'

test('Should have a textbox', ()=>{
    render(<TextBox/>)
    let result = screen.getByRole('textbox')
    expect(result).toBeInTheDocument()
})