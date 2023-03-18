import {render,screen} from '@testing-library/react'
import LeftSidebar from './LeftSideBar'

describe("Homepage Left Sidebar", ()=>{
    it('Should contain home button',()=>{
        render(<LeftSidebar/>)
        let result = screen.screen.getByText(/home/i)
        expect(result).toBeInTheDocument()
    })
})