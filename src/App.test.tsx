import {screen,render} from '@testing-library/react'
import App from './App'


describe("app",()=>{
    it("check App component",()=>{
        render(<App/>)
    })
})