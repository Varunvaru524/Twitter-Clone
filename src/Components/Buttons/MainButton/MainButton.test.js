import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import MainButton from './MainButton'

test('Should have a button', ()=>{
    render(<MainButton className='primaryButton'/>)
    let result = screen.getByRole('button')
    expect(result).toBeInTheDocument()
})

