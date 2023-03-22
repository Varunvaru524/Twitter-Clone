import { render, screen } from '@testing-library/react'
import LeftSidebar from './LeftSideBar'

describe("Homepage Left Sidebar", () => {
    it('Should contain home button', () => {
        render(<LeftSidebar />)
        let result = screen.getByText(/home/i)
        expect(result).toBeInTheDocument()
    })
    it('Should contain Explore button', () => {
        render(<LeftSidebar />)
        let result = screen.getByText(/explore/i)
        expect(result).toBeInTheDocument()
    })
    it('Should contain Notifications button', () => {
        render(<LeftSidebar />)
        let result = screen.getByText(/notifications/i)
        expect(result).toBeInTheDocument()
    })
    it('Should contain Messages button', () => {
        render(<LeftSidebar />)
        let result = screen.getByText(/messages/i)
        expect(result).toBeInTheDocument()
    })
    it('Should contain Bookmarks button', () => {
        render(<LeftSidebar />)
        let result = screen.getByText(/bookmarks/i)
        expect(result).toBeInTheDocument()
    })
    it('Should contain Profile button', () => {
        render(<LeftSidebar />)
        let result = screen.getByText(/profile/i)
        expect(result).toBeInTheDocument()
    })
    it('Should contain Tweet button', () => {
        render(<LeftSidebar />)
        let result = screen.getByRole('button', { name: /tweet/i })
        expect(result).toBeInTheDocument()
    })
})